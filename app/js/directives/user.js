angular.module('app').factory('UserService', function ($rootScope) {
	return {
		'onlineUsers': [], 
		'currentUser': ""
	};
});