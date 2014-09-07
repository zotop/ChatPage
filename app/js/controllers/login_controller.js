angular.module("app").controller('LoginController', function($scope, $location) {
  $scope.username = "";

  $scope.login = function() {
  	$location.path('/home');  
  };
});
