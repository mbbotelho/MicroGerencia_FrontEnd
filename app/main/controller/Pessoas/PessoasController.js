app = angular.module('MicroGerApp');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/cadastroCliente", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/CadastroCliente.html",
        controller: "PessoasController"
    }).when("/cadastroFuncionario", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/CadastroFuncionario.html",
        controller: "PessoasController"
    }).when("/tabelaClientes", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/TabelaClientes.html",
        controller: "PessoasController"
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

app.controller('PessoasController', ['$scope', function($scope) {

}]);