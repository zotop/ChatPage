var io = require('socket.io').listen(5000);
var clients = {};

io.sockets.on('connection', function (socket) {
  console.log("client connection");
  socket.on('user:connect',function(userName){
    console.log("user connection request from: " + userName);
    socket.emit('user:connected', userName);
  });
  
});