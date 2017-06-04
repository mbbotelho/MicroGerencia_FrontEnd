app = angular.module('MicroGerApp')
    .controller('EstoqueController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.cadProduto = response.data.estoque.cadProduto.page;
            $scope.cadCompra = response.data.estoque.cadCompra.page;
            $scope.cadUnidade = response.data.estoque.cadUnidade.page;
            $scope.compra = response.data.estoque.compra.page;
            $scope.produto = response.data.estoque.produto.page;
            $scope.unidade = response.data.estoque.unidade.page;
            $scope.principal = response.data.estoque.principal.page;
        });
    }]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/estoque/produto/cadastrar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/CadastroProduto.html",
        controller: "CadastroProdutoController"
    }).when("/estoque/compra/cadastrar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/CadastroCompra.html",
        controller: "CadastroCompraController"
    }).when("/estoque/produto/listar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/ListarProduto.html",
        controller: "TabelaProdutoController"
    }).when("/estoque/listar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/ListarEstoque.html",
        controller: "ListarEstoqueController"
    }).when("/estoque/compra/listar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/ListarCompra.html",
        controller: "ListarCompraController"
    }).when("/estoque/unidade/cadastrar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/CadastroUnidade.html",
        controller: "CadastroUnidadeController"
    }).when("/estoque/unidade/listar", {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/login');
                }
            }
        },
        templateUrl: "app/main/views/Estoque/ListarUnidade.html",
        controller: "ListarUnidadeController"
    });

}]);