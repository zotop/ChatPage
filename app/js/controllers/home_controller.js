angular.module("app").controller('HomeController', function($scope, $location, $anchorScroll,  socket, UserService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";
  $scope.onlineUsers = UserService.onlineUsers;

  $scope.messageTable = [];

  $scope.$on("$destroy", function(){ //when leaving the current page
    socket.disconnect();
  });

  $scope.$on("$viewContentLoaded", function(){ //when the page content is loaded
    if(UserService.currentUser === "") {
      $location.path('/login');  
    }   
  });

  socket.on("user:connected", function(response){
  	$scope.onlineUsers = response.onlineUsers;
  });

  socket.on("user:disconnected", function(remainingUsers){
    $scope.onlineUsers = remainingUsers;
  });

  socket.on("user:new_message", function(message){
    var currentDate = new Date();
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);
    var currentTime =  hours + ":" + minutes + ":" +  seconds;
    $scope.messageTable.push({time: currentTime, user: message.user , text: message.text});
    $location.hash('bottomTable');
    $anchorScroll();


  });

  $scope.addMessage = function(){
    socket.emit("user:message", {user: UserService.currentUser , text: $scope.inputMessage});
  	$scope.inputMessage = "";
  };

  $scope.logout = function() { 
    $location.path('/login');
  };

});
