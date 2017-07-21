angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSlideBoxDelegate,$ionicTabsDelegate) {

  $scope.tabs=[
    {name:'tabs1'},
    {name:'tabs2'},
    {name:'tabs3'},
    {name:'tabs4'}
  ];
  $scope.slideChanged = function(index) {
    $ionicTabsDelegate._instances[1].select(index);//slide索引改变tabs改变
  };
  $scope.selectedTab = function (index) {
    $ionicSlideBoxDelegate.slide(index);

  };
  $scope.$on('$ionicView.afterEnter', function () {
    $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());//默认选择tabs1
  });
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
