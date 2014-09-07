angular.module("app").controller('LoginController', function($scope, $location, socket, UserService) {

  $scope.login = function() {
  	socket.on('user:connected', function (response) {
  		console.log("response", response);
  		if(response.newUser === $scope.username) {
  			UserService.onlineUsers = response.onlineUsers;
  			$location.path('/home'); 	
  		}
    });

    socket.emit("user:connect", $scope.username);
  };
});
