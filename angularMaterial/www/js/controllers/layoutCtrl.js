app.controller('layoutCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.selectedIndex = 0;
  
    $rootScope.goToAlbums = function () {
        $rootScope.selectedIndex = 1;
    }

    $rootScope.goToMusics = function () {
        $rootScope.selectedIndex = 0;
    }
}]);