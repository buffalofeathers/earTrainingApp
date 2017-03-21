angular.module('AudioApp', ['ngResource', 'ngRoute', 'AudioApp.controllers', 'AudioApp.factories', 'AudioApp.services'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/welcome', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);