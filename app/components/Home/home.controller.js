app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.status = ['', '', '', '', '', '', '', '', ''];

  let currentSymbol = 'O';
  $scope.check = function(index) {
    if ($scope.status[index] === '') {
      $scope.status[index] = currentSymbol;
      currentSymbol = currentSymbol === 'O' ? 'X' : 'O';
    }
  }
}]);
