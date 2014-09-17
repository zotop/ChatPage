angular.module('app').factory('socket', function ($rootScope) {
  var socket;
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    },
    disconnect: function() {
      socket.disconnect();  
    },
    connect: function() {
      socket = io.connect('http://chatpage.herokuapp.com', {'force new connection': true }); 
    }
  };
});