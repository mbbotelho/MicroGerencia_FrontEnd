 angular.module('MicroGerApp')
     .controller('LoginController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
         $scope.submit = function() {
             if ($scope.usuario == 'admin' && $scope.senha == 'admin') {
                 $rootScope.loggedIn = true; //set no banco que o usuario esta logado
                 $location.path("/inicio");
             } else {
                 alert("Usuário ou Senha Inválidos");
             }

         }
     }]);