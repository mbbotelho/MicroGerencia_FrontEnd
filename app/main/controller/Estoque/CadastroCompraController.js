angular.module('MicroGerApp')
    .controller('CadastroCompraController', ['$scope', function($scope) {
        $scope.tipoProduto = [{
                nome: 'Batata',
                id: 1
            },
            {
                nome: 'Coca-Cola',
                id: 2
            },

            {
                nome: 'Frango',
                id: 3
            },
            {
                nome: 'Açai',
                id: 4
            },
            {
                nome: 'Fanta',
                id: 5
            }
        ];
    }]);