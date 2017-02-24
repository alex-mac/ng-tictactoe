app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.status = ['', '', '', '', '', '', '', '', ''];
  let currentSymbol = 'O';

  let hasWinner = function(board) {
    if (
        // check rows
        ($scope.status[0] === $scope.status[1] && $scope.status[1] === $scope.status[2] && $scope.status[1] !== '') ||
        ($scope.status[3] === $scope.status[4] && $scope.status[4] === $scope.status[5] && $scope.status[4] !== '') ||
        ($scope.status[6] === $scope.status[7] && $scope.status[7] === $scope.status[8] && $scope.status[7] !== '') ||
        // check columns
        ($scope.status[0] === $scope.status[3] && $scope.status[3] === $scope.status[6] && $scope.status[3] !== '') ||
        ($scope.status[1] === $scope.status[4] && $scope.status[4] === $scope.status[7] && $scope.status[4] !== '') ||
        ($scope.status[2] === $scope.status[5] && $scope.status[5] === $scope.status[8] && $scope.status[5] !== '') ||
        // check diagonals
        ($scope.status[0] === $scope.status[4] && $scope.status[4] === $scope.status[8] && $scope.status[4] !== '') ||
        ($scope.status[2] === $scope.status[4] && $scope.status[4] === $scope.status[6] && $scope.status[4] !== '')
    ) {
      return true;
    } else {
      return false;
    }
  };

  $scope.check = function(index) {
    if ($scope.status[index] === '') {
      $scope.status[index] = currentSymbol;
      currentSymbol = currentSymbol === 'O' ? 'X' : 'O';
      if (hasWinner($scope.status)) {
        console.log($scope.status);
        alert('game over!');
      } else {
        let nextInt = Math.floor(Math.random() * 9);
        while ($scope.status[nextInt] !== '') {
          nextInt = Math.floor(Math.random() * 9);
        }
        $scope.status[nextInt] = currentSymbol;
        if (hasWinner($scope.status)) {
          console.log($scope.status);
          alert('game over!');
        }
        currentSymbol = currentSymbol === 'O' ? 'X' : 'O';

      }
    }
  }
}]);
