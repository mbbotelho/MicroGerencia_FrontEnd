 angular.module('MicroGerApp')
     .controller('ListarProdutoController', function($scope, $http) {
         $http({
             method: 'GET',
             url: 'json/Dicionario.json'
         }).then(function successCallback(response) {
             $scope.page = response.data.estoque.produto.page;
             $scope.tabela = response.data.estoque.produto.tabela;
             $scope.titles = response.data.estoque.produto.titles;
         });

         $scope.itens = [{
                 id: '1',
                 nome: 'Frango',
                 unidade: 'kg'
             },
             {
                 id: '2',
                 nome: 'Refrigerante',
                 unidade: 'unidade'
             },
             {
                 id: '3',
                 nome: 'Batata',
                 unidade: 'kg'
             },
             {
                 id: '4',
                 nome: 'Açai',
                 unidade: 'kg'
             },
             {
                 id: '5',
                 nome: 'Hambúrguer',
                 unidade: 'kg'
             }
         ];
     });