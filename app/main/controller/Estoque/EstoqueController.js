app = angular.module('MicroGerApp')
    .controller('EstoqueController', ['$scope', function($scope) {

    }]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/cadastroProduto", {
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
    }).when("/listarProduto", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/TabelaProduto.html",
        controller: "TabelaProdutoController"
    }).when("/listarEstoque", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/TabelaEstoque.html",
        controller: "ListarEstoqueController"
    }).when("/listarCompra", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/TabelaCompra.html",
        controller: "TabelaCompraController"
    }).when("/listarUnidade", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/ListarUnidade.html",
        controller: "ListarUnidadeController"
    });

}]);