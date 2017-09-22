app.controller('sobreController', function($scope, $rootScope, $location, $http, $stateParams, sobre){

    $scope.itens = sobre.getSobre();
    
});
