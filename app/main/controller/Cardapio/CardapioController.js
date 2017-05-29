app = angular.module('MicroGerApp');


app.controller('CardapioController', ['$scope', function($scope) {

}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/cardapio/cadastrarItens", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/CadastroItensCardapio.html",
        controller: "CadastroItensController"
    }).when("/cardapio/cadastrarExtra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/CadastroItensExtraCardapio.html",
        controller: "CadastroItensExtraController"
    }).when("/cardapio/listar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/TabelaCardapio.html",
        controller: "TabelaCardapioController"
    })

}]);