var app = angular.module('MicroGerApp', ['ngRoute', 'ngResource', 'modal']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Inicio/inicio.html",
        controller: "IndexController"
    }).when("/login", {
        templateUrl: "app/main/views/Login/login.html",
        controller: "LoginController"
    }).when("/estoque", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/TelaPrincipalEstoque.html",
        controller: "EstoqueController"
    }).when("/cardapio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/TelaPrincipalCardapio.html",
        controller: "CardapioController"
    }).when("/pessoas", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/TelaPrincipalPessoa.html",
        controller: "PessoasController"
    }).when("/pedido", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/TabelaClientes.html",
        controller: "PedidoController"
    }).when("/despesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Despesa/TelaPrincipalDespesa.html",
        controller: "DespesaController"
    }).when("/relatorio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Relatorio/TelaPrincipal.html",
        controller: "IndexController"
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

app.modalConfig = function(modal) {
    if (modal === true)
        modal = false;
    else {
        modal = true;
    }
    return modal;
};