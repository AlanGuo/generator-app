'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular.module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'view/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'view/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
