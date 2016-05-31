angular.module("MacondoWebsite").directive('macMailingList', function () {
	return {
		replace : true,
		restrict : "E",
		templateUrl : "assets/templates/directives/macMailingList.html",
		controller : function ($scope, $http) {
			$scope.addUser = function (valid) {

				if (valid) {
					data = {
						'name' : $scope.name,
						'email' : $scope.email
					};

					$http.post('php/macondo.php', data)
					.then(function () {
						$scope.name = "";
						$scope.email = "";
						$('#macondoModal').modal();
					})
				} else {

					if ($scope.name == '' || $scope.name == undefined) {
						$('#name').popover("show");

						setTimeout(function () {
							$('#name').popover("hide");
						}, 1000);

					} else {

						$('#email').popover("show");

						setTimeout(function () {
							$('#email').popover("hide");
						}, 1000);

					}

				}
			};
		}
	};
});
