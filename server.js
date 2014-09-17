var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    port = process.env.PORT || 5001;


app.use(express.static(__dirname + '/generated'));

var onlineUsers = [];
var allClients = [];

io.sockets.on('connection', function (socket) {
  socket.on('user:connect',function(userName){
    console.log("user:connect: " + userName);
    allClients.push(socket);
    onlineUsers.push(userName);
    io.sockets.emit('user:connected', {newUser: userName, onlineUsers: onlineUsers});
  });

  socket.on('user:message',function(message){
  	console.log("user:message: " + message.user + " -> " + message.text);
  	io.sockets.emit('user:new_message', message);
  });

  socket.on('disconnect',function(){
    var i = allClients.indexOf(socket);
     if(i >= 0) {
      allClients.splice(i,1);
      console.log("disconnect: " + onlineUsers[i]);
      onlineUsers.splice(i,1);
      io.sockets.emit('user:disconnected', onlineUsers);
    }
  });
  
});


server.listen(port);
