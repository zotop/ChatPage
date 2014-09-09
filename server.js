var io = require('socket.io').listen(5001);

var onlineUsers = [];

io.sockets.on('connection', function (socket) {
  console.log("client connection");
  socket.on('user:connect',function(userName){
    console.log("user:connect request from: " + userName);
    onlineUsers.push(userName);
    io.sockets.emit('user:connected', {newUser: userName, onlineUsers: onlineUsers});
  });

  socket.on('user:message',function(message){
  	console.log("user:message: " + message.user + ":" + message.text);
  	io.sockets.emit('user:new_message', message);
  });

  socket.on('disconnect',function(){

    console.log("user disconnected");
  });

  socket.on('user:disconnect',function(userName){
  	var i = onlineUsers.indexOf(userName);
  	if(i >= 0) {
  		onlineUsers.splice(i,1);
  		console.log("user disconnected: " + userName);
  		io.sockets.emit('user:disconnected', onlineUsers);
  	}
    
  });
  
});