app.factory('$loginDialog', ['$mdDialog', function ($mdDialog) {
    return {
        show: function () {
            $mdDialog.show({
                controller: ['$scope', function ($scope) {

                }],
                templateUrl: 'templates/loginForm.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
        }
    }
}]);