angular.module("app").controller('LoginController', function($scope, $location, socket) {

  $scope.login = function() {
  	socket.on('user:connected', function (user) {
  		if(user === $scope.username) {
  			$location.path('/home'); 	
  		}
    });

    socket.emit("user:connect", $scope.username);
  };
});
