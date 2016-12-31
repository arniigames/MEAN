//chirpAng-apppp.js
var app = angular.module('ng-app', []);

app.controller('mainController', function($scope){

    $scope.posts = [];
    $scope.newPost = {created_by: '', text: '', created_at: ''};

    $scope.post = function(){
        $scope.newPost.created_at = Date.now();
        $scope.posts.push($scope.newPost);

        //reset
        $scope.newPost = {created_by: '', text: '', created_at: ''};

    };


});

app.controller('authController', function($scope){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    postService.getAll().success(function(data){
        $scope.posts = data;
    });

    $scope.login = function(){
        //placeholder until authentication is implemented
        $scope.error_message = 'login request for ' + $scope.user.username;
    };

    $scope.register = function(){
        //placeholder until authentication is implemented
        $scope.error_message = 'registration request for ' + $scope.user.username;
    };
});