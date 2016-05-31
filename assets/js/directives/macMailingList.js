angular.module("MacondoWebsite").directive('macMailingList', function () {
	return {
		replace: true,
		restrict:"E",
		templateUrl:"assets/templates/directives/macMailingList.html",
	};
});
