app = angular.module('MicroGerApp');

app.controller('CadastroItensExtraController', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'json/Dicionario.json'
    }).then(function successCallback(response) {
        $scope.titulo = response.data.cardapio.itemExtra;
    });


}]);