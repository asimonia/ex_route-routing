"use strict";

app.controller("furkapassCtrl", function($scope, $location) {
	$scope.highwayName = "Furka Pass";
	$scope.highwayDescription = "A high mountain pass in the Swiss Alps connecting Gletsch, Valais with Realp, Uri. The Furka Pass was used as a location in the James Bond film Goldfinger.";

	$scope.myUrl = $location.absUrl();
});