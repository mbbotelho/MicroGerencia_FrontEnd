var app = angular.module('MicroGerApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/main/views/Login/login.html",
        controller: "LoginController"
    }).when("/estoque", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/TelaPrincipalEstoque.html",
        controller: "EstoqueController"
    }).when("/cardapio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Cardapio/TelaPrincipalCardapio.html",
        controller: "CardapioController"
    }).when("/cadastroProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/CadastroProduto.html",
        controller: "CadastroProdutoController"
    }).when("/cadastroCompra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/CadastroCompra.html",
        controller: "CadastroCompraController"
    }).when("/tabelaProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/TabelaProduto.html",
        controller: "TabelaProdutoController"
    }).when("/pessoas", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/TelaPrincipalPessoa.html",
        controller: "PessoasController"
    }).when("/cadastroCliente", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/CadastroCliente.html",
        controller: "PessoasController"
    }).when("/cadastroFuncionario", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/CadastroFuncionario.html",
        controller: "PessoasController"
    }).when("/tabelaClientes", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/TabelaClientes.html",
        controller: "PessoasController"
    }).when("/pedido", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Pessoas/TabelaClientes.html",
        controller: "PedidoController"
    }).when("/despesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Despesa/TelaPrincipalDespesa.html",
        controller: "DespesaController"
    }).when("/cadastroTipoDespesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Despesa/CadastroTipoDespesa.html",
        controller: "CadastroDespesaController"
    }).when("/cadastroDespesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Despesa/CadastroDespesa.html",
        controller: "CadastroDespesaController"
    }).when("/tabelaDespesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Despesa/TabelaDespesa.html",
        controller: "TabelaDespesaController"
    }).when("/inicio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Inicio/inicio.html",
        controller: "IndexController"
    }).when("/relatorio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Relatorio/TelaPrincipal.html",
        controller: "IndexController"
    }).otherwise({
        resolve: {
            "check": function($location, $rootScope) {
                if ($rootScope.loggedIn) {
                    $location.path('/inicio');
                } else {
                    $location.path('/');
                }
            }
        }
    });
}]);