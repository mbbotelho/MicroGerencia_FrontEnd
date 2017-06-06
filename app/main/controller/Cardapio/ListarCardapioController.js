angular.module('MicroGerApp')
    .controller('ListarCardapioController', ['$scope', '$http', function($scope, $http) {

        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.page = response.data.cardapio.principal.page;
            $scope.tabela = response.data.cardapio.principal.tabela;
            $scope.titles = response.data.cardapio.principal.titles;
        });

        $scope.itens = [{
                id: 1,
                nome: 'Porção 1',
                tipo: 'Porção',
                ingrediente: 'Frango',
                quantidade: 1,
                unidade: 'kg',
                serve: 3,
                itemExtra: '500g de Batata, 500g de Aipim',
                valor: 20
            },
            {
                id: 1,
                nome: 'Porção 1',
                tipo: 'Porção',
                ingrediente: 'Frango',
                quantidade: 1,
                unidade: 'kg',
                serve: 3,
                itemExtra: '500g de Batata, 500g de Aipim',
                valor: 20
            },
            {
                id: 1,
                nome: 'Porção 1',
                tipo: 'Porção',
                ingrediente: 'Frango',
                quantidade: 1,
                unidade: 'kg',
                serve: 3,
                itemExtra: '500g de Batata, 500g de Aipim',
                valor: 20
            }
        ];

    }]);