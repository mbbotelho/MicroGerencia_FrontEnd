app = angular.module('MicroGerApp');


app.controller('CardapioController', ['$scope', function($scope) {

}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/cardapio/cadastrarItens", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/CadastroItensCardapio.html",
        controller: "CadastroItensController"
    }).when("/cardapio/listarItens", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/ListarItens.html",
        controller: "ListarItensController"
    }).when("/cardapio/cadastrarExtra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/CadastroItensExtraCardapio.html",
        controller: "CadastroItensExtraController"
    }).when("/cardapio/listarExtra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/ListarItensExtra.html",
        controller: "ListarItensExtraController"
    }).when("/cardapio/listar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/ListarCardapio.html",
        controller: "ListarCardapioController"
    })

}]);