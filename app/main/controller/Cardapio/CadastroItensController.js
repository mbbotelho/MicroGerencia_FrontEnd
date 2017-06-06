angular.module('MicroGerApp')
    .controller('CadastroItensController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.page = response.data.cardapio.cadItem.page;
        });

        $scope.tipoItens = [{
                nome: 'Bebida',
                id: 1
            },
            {
                nome: 'Porção',
                id: 2
            },

            {
                nome: 'Açai',
                id: 3
            },
            {
                nome: 'Lanche',
                id: 4
            }
        ];

        $scope.produtos = [{
                nome: 'Frango (kg)',
                id: 1
            },
            {
                nome: 'Frango (g)',
                id: 2
            },
            {
                nome: 'Açai (ml)',
                id: 3
            },
            {
                nome: 'Açai (L)',
                id: 5
            },
            {
                nome: 'Batata (g)',
                id: 4
            },
            {
                nome: 'Refrigerante (garrafa)',
                id: 7
            },
            {
                nome: 'Refrigerante (lata)',
                id: 8
            }
        ]

        $scope.qtItens = [{
                nome: '1',
                id: 1
            },
            {
                nome: '2',
                id: 2
            },

            {
                nome: '3',
                id: 3
            },
            {
                nome: '4',
                id: 4
            }
        ];

        $scope.salvar = function() {

        };

        $scope.openModal = function() {
            $scope.modal = app.modalConfig($scope.modal);
        }
    }]);