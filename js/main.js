var app = angular.module('MicroGerApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $provide, $httpProvider,
    $locationProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/Login/login.html",
        controller: "LoginController"
    }).when("/estoque", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Estoque/TelaPrincipalEstoque.html",
        controller: "EstoqueController"
    }).when("/cardapio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Cardapio/TelaPrincipalCardapio.html",
        controller: "CardapioController"
    }).when("/cadastroProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Estoque/CadastroProduto.html",
        controller: "EstoqueController"
    }).when("/cadastroCompra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Cardapio/TelaPrincipalCardapio.html",
        controller: "EstoqueController"
    }).when("/tabelaProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Cardapio/TelaPrincipalCardapio.html",
        controller: "EstoqueController"
    }).when("/pessoas", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/TelaPrincipalPessoa.html",
        controller: "PessoasController"
    }).when("/cadastroCliente", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/CadastroCliente.html",
        controller: "PessoasController"
    }).when("/cadastroFuncionario", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/CadastroFuncionario.html",
        controller: "PessoasController"
    }).when("/tabelaClientes", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/TabelaClientes.html",
        controller: "PessoasController"
    }).when("/pedido", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/TabelaClientes.html",
        controller: "PedidoController"
    }).when("/despesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/TabelaClientes.html",
        controller: "DespesaController"
    }).when("/relatorio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Pessoas/TabelaClientes.html",
        controller: "RelatorioController"
    }).when("/inicio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Inicio/inicio.html",
        controller: "IndexController"
    }).otherwise({
        redirectTo: "/"
    });
});