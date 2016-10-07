angular.module("MacondoWebsite").directive('macPageNav', function () {
	return {
		replace: true,
		restrict:"E",
		templateUrl:"assets/templates/directives/macPageNav.html",
		controller: function($scope, $location){
			$scope.isPage = function(name){
				// /\/notes($|\/)/
				
				return new RegExp("/"+name+"($|/)").test($location.path());
			};
		}
	};
});
