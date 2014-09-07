angular.module("app").controller('HomeController', function($scope, $location, socket, UserService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";
  $scope.onlineUsers = UserService.onlineUsers;

  socket.on("user:connected", function(response){
  	$scope.onlineUsers = response.onlineUsers
  });


  $scope.logout = function() {
    $location.path('/login');
  };
});
