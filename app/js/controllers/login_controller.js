angular.module("app").controller('LoginController', function($scope, $location, socket, UserService) {

  $scope.login = function() {

    socket.connect();
    
    socket.on("connect", function() {
      
      socket.on('user:connected', function (response) {
      
        if(response.newUser === $scope.username) {
          UserService.onlineUsers = response.onlineUsers;
          UserService.currentUser = response.newUser;
          $location.path('/home');  
        }
      });

      socket.emit("user:connect", $scope.username);
    });
  	
  };
});
