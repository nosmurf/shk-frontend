var app = angular.module('app', []);




app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/timeline', {
		templateUrl: 'timeline.html',
		controller: 'timelineController'
	 }).
   when('/userAdd', {
    templateUrl: 'user.html',
    controller: 'userController'
    })
}]);
