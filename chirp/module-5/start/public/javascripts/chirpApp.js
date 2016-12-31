var app = angular.module('chirpApp', ['ngRoute']).run(function($rootScope){


	$rootScope.authenticated = false;
	$rootScope.current_user;


});



app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		})
});

app.controller('mainController', function($scope){
	$scope.posts = [];
	$scope.newPost = {created_by: '', text: '', created_at: ''};
	
	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};
});

app.controller('authController', function($scope, $rootScope,$location, $http){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		$http({
			method: 'GET',
			url: 'http://www.patreon.https://www.patreon.com/oauth2/authorize?response_type=code&client_id=a7e93821e29e321ab7b5de2d6e39fc12a1604686d857b7ddd4e80bed5f17057c&redirect_uri=http://forum-arnii.j.layershift.co.uk/bonus.php'

		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	};

	$scope.register = function(){
		$scope.error_message = 'registeration request for ' + $scope.user.username;
	};
});
