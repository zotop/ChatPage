angular.module("app").controller('HomeController', function($scope, $location, socket, UserService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";
  $scope.onlineUsers = UserService.onlineUsers;

  $scope.messageTable = [{time: "10:54:01", user: "Homer", message:"Hello my friends"}, {time: "10:56:01", user: "Johny", message:"Cool"}];

  socket.on("user:connected", function(response){
  	$scope.onlineUsers = response.onlineUsers;
  });

  $scope.addMessage = function(){
  	var currentDate = new Date();
  	var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  	$scope.messageTable.push({time: currentTime, user: UserService.currentUser , message: $scope.inputMessage});
  	$scope.inputMessage = "";
  };

  $scope.logout = function() {
    $location.path('/login');
  };
});
