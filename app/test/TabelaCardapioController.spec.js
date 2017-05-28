describe('TabelaCardapioController', function() {

    beforeEach(module('MicroGerApp'));

    it('should create a `cardapio` model with 3 itens', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListController', { $scope: scope });

        expect(scope.itens.length).toBe(3);
    }));

});