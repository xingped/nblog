var app = angular.module('NBlog', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html'
	})
	.state('admin', {
		url: '/admin/dashboard',
		templateUrl: 'views/admin/dashboard.html'
	})

	//$locationProvider.html5Mode(true);
}]);