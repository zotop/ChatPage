var io = require('socket.io').listen(5001);

var onlineUsers = [];

io.sockets.on('connection', function (socket) {
  console.log("client connection");
  socket.on('user:connect',function(userName){
    console.log("user:connect request from: " + userName);
    onlineUsers.push(userName);
    io.sockets.emit('user:connected', {newUser: userName, onlineUsers: onlineUsers});
  });

  socket.on('disconnect',function(){
    console.log("user disconnected");
  });
  
});