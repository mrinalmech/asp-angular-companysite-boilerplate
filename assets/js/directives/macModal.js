angular.module("MacondoWebsite").directive('macModal', function () {
	return {
		replace: true,
		restrict:"E",
		templateUrl:"assets/templates/directives/macModal.html",
	};
});
