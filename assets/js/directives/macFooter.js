angular.module("MacondoWebsite").directive('macFooter', function () {
	return {
		replace: true,
		restrict:"E",
		templateUrl:"assets/templates/directives/macFooter.html",
	};
});
