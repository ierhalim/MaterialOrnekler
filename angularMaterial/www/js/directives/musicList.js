app.directive('musicList', [function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/musics.html',
        controller: ['$scope', '$rootScope', '$loginDialog', function ($scope, $rootScope,$loginDialog) {
            $scope.musics = musicData;
            $scope.loginForm = function () {
                $loginDialog.show();
            }
        }]
    }
}]);