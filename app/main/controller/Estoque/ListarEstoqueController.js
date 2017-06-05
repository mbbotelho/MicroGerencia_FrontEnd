 angular.module('MicroGerApp')
     .controller('ListarEstoqueController', function($scope, $http) {
         $http({
             method: 'GET',
             url: 'json/Dicionario.json'
         }).then(function successCallback(response) {
             $scope.page = response.data.estoque.principal.page;
             $scope.tabela = response.data.estoque.principal.tabela;
             $scope.titles = response.data.estoque.principal.titles;
         });

         //"Código", "Produto", "Quantidade", "Unidade", "Última Compra", "Precisa Repor?"
         $scope.itens = [{
                 nome: 'Batata',
                 quantidade: '10',
                 unidade: 'kg',
                 data: '01-01-2017',
                 repor: 'SIM',
                 id: 1
             },
             {
                 nome: 'Coca-Cola',
                 quantidade: '10',
                 unidade: 'kg',
                 data: '10-01-2017',
                 repor: 'SIM',
                 id: 2
             },

             {
                 nome: 'Frango',
                 quantidade: '10',
                 unidade: 'kg',
                 data: '07-01-2017',
                 repor: 'NAO',
                 id: 3
             },
             {
                 nome: 'Açai',
                 quantidade: '10',
                 unidade: 'kg',
                 data: '04-01-2017',
                 repor: 'NAO',
                 id: 4
             },
             {
                 nome: 'Fanta',
                 quantidade: '10',
                 unidade: 'garrafas',
                 data: '01-02-2017',
                 repor: 'NAO',
                 id: 5
             }
         ];
     });