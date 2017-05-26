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
    }).when("/cadastroItensCardapio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Cardapio/CadastroItensCardapio.html",
        controller: "CadastroItensController"
    }).when("/cadastroItensExtraCardapio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Cardapio/CadastroItensExtraCardapio.html",
        controller: "cadastroItensExtraController"
    }).when("/tabelaCardapio", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Cardapio/TabelaCardapio.html",
        controller: "TabelaCardapioController"
    }).when("/cadastroProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Estoque/CadastroProduto.html",
        controller: "CadastroProdutoController"
    }).when("/cadastroCompra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Estoque/CadastroCompra.html",
        controller: "CadastroCompraController"
    }).when("/tabelaProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Estoque/TabelaProduto.html",
        controller: "TabelaProdutoController"
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
        templateUrl: "views/Despesa/TelaPrincipalDespesa.html",
        controller: "DespesaController"
    }).when("/cadastroTipoDespesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Despesa/CadastroTipoDespesa.html",
        controller: "CadastroDespesaController"
    }).when("/cadastroDespesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Despesa/CadastroDespesa.html",
        controller: "CadastroDespesaController"
    }).when("/tabelaDespesa", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "views/Despesa/TabelaDespesa.html",
        controller: "TabelaDespesaController"
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
});