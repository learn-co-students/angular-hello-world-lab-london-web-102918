function MainController($scope) {
  $scope.name = 'whatever your stupid name is!';
  $scope.desc = {
    height: 'tall',
    weight: 'fat'
  }
  $scope.judgement = 'How sad for you'
}

angular
  .module('app')
  .controller('MainController', MainController)
