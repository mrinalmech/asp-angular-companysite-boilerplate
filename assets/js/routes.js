angular.module('MacondoWebsite').config(function ($routeProvider,$locationProvider) {
	
	$routeProvider
	.when('/', {
		redirectTo : '/home'
	})
	.when('/home', {
		templateUrl : "assets/templates/macondo/index.html"
	})
	.when('/about', {
		templateUrl : "assets/templates/macondo/about.html"
	})
	.when('/games', {
		templateUrl : "assets/templates/macondo/games.html"
	})
	.when('/career', {
		templateUrl : "assets/templates/macondo/career.html"
	});
	
	
});
