angular.module('MicroGerApp')
    .controller('CadastroUnidadeController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/Dicionario.json'
        }).then(function successCallback(response) {
            $scope.titulo = response.data.estoque.unidade.page;
        });

        $scope.tipoUnidades = [{
                nome: 'Unidade',
                id: 1
            },
            {
                nome: 'Kg',
                id: 2
            },

            {
                nome: 'g',
                id: 3
            },
            {
                nome: 'Lata',
                id: 4
            },
            {
                nome: 'Garrafa',
                id: 5
            }
        ];
    }]);