angular.module('MicroGerApp').controller('ListarItensExtraController', ['$scope', '$http', function($scope, $http) {

    $http({
        method: 'GET',
        url: 'json/Dicionario.json'
    }).then(function successCallback(response) {
        $scope.page = response.data.cardapio.itemExtra.page;
        $scope.tabela = response.data.cardapio.itemExtra.tabela;
        $scope.titles = response.data.cardapio.itemExtra.titles;
    });

    $scope.itens = [{
            id: 1,
            produto: 'Frango',
            unidade: 'g',
            quantidade: 100
        },
        {
            id: 2,
            produto: 'Frango',
            unidade: 'g',
            quantidade: 200
        },

        {
            id: 3,
            produto: 'Frango',
            unidade: 'g',
            quantidade: 500
        }
    ];

}]);