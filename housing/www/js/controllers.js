angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $resource) {
    $scope.result = entry.get(function(data){

  });

  $scope.foo = 'bar';

  var entry = $resource('http://ec2-52-88-245-162.us-west-2.compute.amazonaws.com:8081/mock/api/v1/xmlparse/search.json');
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };




})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});




