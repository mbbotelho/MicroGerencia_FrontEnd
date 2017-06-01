 angular.module('MicroGerApp')
     .controller('ListarEstoqueController', function($scope, $http) {
         $http({
             method: 'GET',
             url: 'json/Dicionario.json'
         }).then(function successCallback(response) {
             $scope.page = response.data.estoque.page.principal;
             $scope.tabela = response.data.estoque.principal.tabela;
             $scope.titles = response.data.estoque.principal.titles;
         });

         $scope.itensEstoque = [{
                 nome: 'Frango',
                 quantidade: '10',
                 unidade: 'kg'
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