var io = require('socket.io').listen(5001);


io.sockets.on('connection', function (socket) {
  console.log("client connection");
  socket.on('user:connect',function(userName){
    console.log("user:connect request from: " + userName);
    io.sockets.emit('user:connected', userName);
  });

  socket.on('disconnect',function(){
    console.log("user disconnected");
  });
  
});