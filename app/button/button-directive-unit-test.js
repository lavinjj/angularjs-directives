// taken from the book AngularJS Web Application Development

describe('button directive', function() {
    var $compile = undefined;
    var $rootScope = undefined;

    beforeEach(module('directives.button'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('adds a "btn" class to the button element', function() {
        var element = $compile('<button></button>')($rootScope);
        expect(element.hasClass('btn')).toBe(true);
    });

    it('adds size classes correctly', function() {
        var element = $compile('<button size="large"></button>')($rootScope);
        expect(element.hasClass('btn-large')).toBe(true);
    });

    it('set button type and CSS classes correctly', function() {
        var element = $compile('<button type="submit"></button>')($rootScope);
        expect(element.hasClass('btn-primary')).toBe(true);

        var element = $compile('<button type="reset"></button>')($rootScope);
        expect(element.attr('type')).toBe('reset');

        var element = $compile('<button type="warning"></button>')($rootScope);
        expect(element.hasClass('btn-warning')).toBe(true);
    });

});

