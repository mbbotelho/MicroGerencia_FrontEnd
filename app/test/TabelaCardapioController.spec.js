describe('TabelaCardapioController', function() {

    beforeEach(module('MicroGerApp'));

    it('should create a `phones` model with 3 phones', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('TabelaCardapioController', { $scope: scope });

        expect(scope.itens.length).toBe(3);
    }));

});