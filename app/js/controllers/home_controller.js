angular.module("app").controller('HomeController', function($scope, $location, socket) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";
  $scope.onlineUsers = [];

  socket.on("user:connected", function(user){
  	$scope.onlineUsers.push(user);
  });


  $scope.logout = function() {
    $location.path('/login');
  };
});
