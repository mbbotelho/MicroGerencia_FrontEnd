angular.module('MicroGerApp')
    .controller('ListarCompraController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.page = response.data.estoque.compra.page;
            $scope.tabela = response.data.estoque.compra.tabela;
            $scope.titles = response.data.estoque.compra.titles;
        });
        $scope.itens = [{
                nome: 'Batata',
                quantidade: '10',
                unidade: 'kg',
                valor: '150',
                data: '01-01-2017',
                id: 1
            },
            {
                nome: 'Coca-Cola',
                quantidade: '10',
                unidade: 'kg',
                valor: '150',
                data: '10-01-2017',
                id: 2
            },

            {
                nome: 'Frango',
                quantidade: '10',
                unidade: 'kg',
                valor: '150',
                data: '07-01-2017',
                id: 3
            },
            {
                nome: 'Açai',
                quantidade: '10',
                unidade: 'kg',
                valor: '150',
                data: '04-01-2017',
                id: 4
            },
            {
                nome: 'Fanta',
                quantidade: '10',
                unidade: 'garrafas',
                valor: '150',
                data: '01-02-2017',
                id: 5
            }
        ];
    }]);