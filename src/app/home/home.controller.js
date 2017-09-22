app.controller('listPost', function($scope, $rootScope, $location, $http, $stateParams, posts){
    $scope.post = [];
    // var id = $stateParams.id;
    $scope.atual = 1;
    $scope.proximo = 1;
    $scope.voltar;
    $scope.Json = posts.getPosts();
    $scope.cont = $scope.Json.length;
    $scope.post = posts.getPostsId($scope.atual);

    $scope.postId = function(id){
        $scope.post = posts.getPostsId(id);
    }

    $scope.avancar = function (index){
        $scope.atual = index;
        $scope.proximo = $scope.atual + 1;
        $scope.atual = $scope.proximo;

        if ( $scope.proximo > 0 && $scope.proximo <= $scope.cont ) {
            $scope.postId($scope.proximo);
        }else{
            $scope.postId(1);
        }
    }

    $scope.voltarPost = function (index){
        $scope.atual = index;

        if ( $scope.atual == 1 ) {
            $scope.postId($scope.cont);
        }else{
            $scope.voltar = $scope.atual - 1;
            $scope.atual = $scope.voltar;
            $scope.postId($scope.voltar);
        }
    }

    $scope.adicionaItem = function (){
    	$scope.itens.push({
    		produto: $scope.item.produto,
    		quantidade: $scope.item.quantidade,
    		comprado: false
    	});
    };

});
