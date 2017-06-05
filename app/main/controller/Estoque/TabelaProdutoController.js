 angular.module('MicroGerApp')
     .controller('TabelaProdutoController', function($scope, $http) {
         $http({
             method: 'GET',
             url: 'json/Dicionario.json'
         }).then(function successCallback(response) {
             $scope.page = response.data.estoque.principal.page;
             $scope.tabela = response.data.estoque.principal.tabela;
             $scope.titles = response.data.estoque.principal.titles;
         });

         $scope.itens = [{
                 nome: 'Frango',
                 quantidade: '100',
                 unidade: 'Kg'
             },
             {
                 nome: 'Refrigerante',
                 quantidade: '11',
                 unidade: 'unidade'
             },

             {
                 nome: 'Batata',
                 quantidade: '20',
                 unidade: 'kg'
             }
         ];
     });