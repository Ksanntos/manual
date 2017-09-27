var app = angular.module('app', ['ui.router', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home/');

	$stateProvider

	.state('home', {
		templateUrl: 'src/app/template/index.html'
   	})

	.state('home.list',{
		url: '/home/',
		templateUrl: 'src/app/home/home.html'
	})

	.state('home.post',{
		url: '/post/:id',
		templateUrl: 'src/app/posts/posts.html'
	})

	.state('home.sobre',{
		url: '/sobre',
		templateUrl: 'src/app/sobre/sobre.html'
	});
});
