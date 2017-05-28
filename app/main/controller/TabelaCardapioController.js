angular.module('MicroGerApp')
    .controller('TabelaCardapioController', ['$scope', '$http', function($scope, $http) {

        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.page = response.data.cardapio.page;
            $scope.tabela = response.data.cardapio.tabela;
            $scope.titles = response.data.cardapio.titles;
        });

        $scope.itens = [{
                nome: 'Porção 1',
                serve: 3,
                itemExtra: '500g de Batata, 500g de Aipim'
            },
            {
                nome: 'Porção 2',
                serve: 1,
                itemExtra: '1 Lata de refrigerante'
            },

            {
                nome: 'Porção de Batata',
                serve: 1,
                itemExtra: 'nada'
            }
        ];

    }]);