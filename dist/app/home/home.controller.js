app.controller('listPost', function($scope, $rootScope, $location, $http, $stateParams, posts){
    $scope.post = [];
    var id = $stateParams.id;
    var voltar;
    var avancar;
    var atual;

    $scope.post = posts.getPosts();
   
    $scope.postId = function(id){
        $scope.post = posts.getPostsId(id);
        console.log(posts.getPostsId(id));
    }

    $scope.adicionaItem = function (){
    	$scope.itens.push({
    		produto: $scope.item.produto,
    		quantidade: $scope.item.quantidade,
    		comprado: false
    	});
    };

    $scope.avancar = function (index){
        console.log("clickou");
        atual = index;
        proximo = atual++;
        voltar = atual--;

        $scope.postId(proximo);

    }
});
