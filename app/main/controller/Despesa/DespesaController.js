 app = angular.module('MicroGerApp');
 app.config(['$routeProvider', function($routeProvider) {
     $routeProvider
         .when("/cadastroTipoDespesa", {
             resolve: {
                 "check": function($location, $rootScope) {
                     if (!$rootScope.loggedIn) {
                         $location.path('/login');
                     }
                 }
             },
             templateUrl: "app/main/views/Despesa/CadastroTipoDespesa.html",
             controller: "CadastroDespesaController"
         })
         .when("/cadastroDespesa", {
             resolve: {
                 "check": function($location, $rootScope) {
                     if (!$rootScope.loggedIn) {
                         $location.path('/login');
                     }
                 }
             },
             templateUrl: "app/main/views/Despesa/CadastroDespesa.html",
             controller: "CadastroDespesaController"
         })
         .when("/tabelaDespesa", {
             resolve: {
                 "check": function($location, $rootScope) {
                     if (!$rootScope.loggedIn) {
                         $location.path('/login');
                     }
                 }
             },
             templateUrl: "app/main/views/Despesa/TabelaDespesa.html",
             controller: "TabelaDespesaController"
         }).otherwise({
             resolve: {
                 "check": function($location, $rootScope) {
                     if ($rootScope.loggedIn) {
                         $location.path('/');
                     } else {
                         $location.path('/login');
                     }
                 }
             }
         });
 }]);

 app.controller('DespesaController', function($scope, $http) {

 });