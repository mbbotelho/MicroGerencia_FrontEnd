angular.module('MicroGerApp').controller('ListarItensController', ['$scope', '$http', function($scope, $http) {

    $http({
        method: 'GET',
        url: 'json/Dicionario.json'
    }).then(function successCallback(response) {
        $scope.page = response.data.cardapio.item.page;
        $scope.tabela = response.data.cardapio.item.tabela;
        $scope.titles = response.data.cardapio.item.titles;
    });

    $scope.itens = [{
            id: 1,
            nome: 'Porção 1',
            produto: 'Frango',
            unidade: 'kg',
            tipo: 3,
            quantidade: 10,
            quantidadeExtra: 3,
            valor: 30
        },
        {
            id: 2,
            nome: 'Porção 1',
            produto: 'Frango',
            unidade: 'kg',
            tipo: 3,
            quantidade: 10,
            quantidadeExtra: 3,
            valor: 30
        },

        {
            id: 3,
            nome: 'Porção 1',
            produto: 'Frango',
            unidade: 'kg',
            tipo: 3,
            quantidade: 10,
            quantidadeExtra: 3,
            valor: 30
        }
    ];

}]);