app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/components/Home/home.view.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl: 'app/components/404/404.view.html',
    controller: '404Ctrl'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);
