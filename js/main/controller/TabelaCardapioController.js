angular.module('MicroGerApp')
    .controller('TabelaCardapioController', ['$scope', function($scope) {
        $scope.page = "Cardapio";
        $scope.titles = [
            "Produto", "Serve Quantas Pessoas", "Item Extra", "Ações"
        ];
        $scope.tabela = "Itens Cadastrados no Cardápio";
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