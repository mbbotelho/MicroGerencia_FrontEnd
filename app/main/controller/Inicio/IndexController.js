 angular.module('MicroGerApp')
     .controller('IndexController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
         $scope.showSideBar = true;
         if ($rootScope.loggedIn) {
             $scope.showSideBar = true;
         }
     }]);