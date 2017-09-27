app.controller('header', function($scope, $rootScope, $location, $http, $stateParams){
    $scope.classActive = false;

    $scope.active = function(){
        $scope.classActive = !$scope.classActive;

        console.log($scope.classActive );
    }
});