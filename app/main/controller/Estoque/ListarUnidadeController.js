angular.module('MicroGerApp')
    .controller('ListarUnidadeController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.page = response.data.estoque.unidade.page;
            $scope.tabela = response.data.estoque.unidade.tabela;
            $scope.titles = response.data.estoque.unidade.titles;
        });

        $scope.itens = [{
                id: '1',
                unidade: 'kg'
            },
            {
                id: '2',
                unidade: 'unidade'
            },
            {
                id: '3',
                unidade: 'kg'
            },
            {
                id: '4',
                unidade: 'g'
            },
            {
                id: '5',
                unidade: 'garrafa'
            }
        ];
    }]);