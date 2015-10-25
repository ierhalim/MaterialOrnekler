app.directive('albumList', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/albums.html',
        controller: ['$scope','$rootScope',function ($scope,$rootScope) {
            $scope.albums = musicData;

        }],
    }
});