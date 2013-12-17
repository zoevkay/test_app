var bulletinApp = angular.module('bulletinApp', ['ngResource']);
bulletinApp.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);

  bulletinApp.controller('PostsCtrl', ['$scope', 'Post', function($scope, Post) {
    $scope.welcome_text = 'Welcome to the bulletin board. LOSER.';
    $scope.posts = Post.query();
  }]);

  bulletinApp.factory('Post', ['$resource', function($resource) {
    return $resource('/posts');
  }]);