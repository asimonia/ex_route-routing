"use strict";

var app = angular.module("RouteRoutingApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.when('/bigsur', {
		templateUrl: 'partials/bigsur.html',
		controller: 'bigsurCtrl'
	})
	.when('/furkapass', {
		templateUrl: 'partials/furkapass.html',
		controller: 'furkapassCtrl'
	})
	.otherwise('/');
});