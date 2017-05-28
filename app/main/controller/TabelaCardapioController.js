angular.module('MicroGerApp')
    .controller('TabelaCardapioController', ['$scope', '$http', function($scope, $http) {
        $http.get('json/Dicionario.json').success(function(data) {
            $scope.dicionario = data;
        });

        $scope.page = dicionario.cardapio.tabela;
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