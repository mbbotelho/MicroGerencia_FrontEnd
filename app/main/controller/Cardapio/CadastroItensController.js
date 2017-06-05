angular.module('MicroGerApp')
    .controller('CadastroItensController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.titulo = response.data.cardapio.item;
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
            },
            {
                nome: 'Prato Feito',
                id: 5
            }
        ];

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