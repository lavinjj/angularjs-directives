describe('i18n filter', function() {
    var filter;
    var localize;

    beforeEach(function () {

        localize = {
            getLocalizedString: function (value) {
                if (value === 'TEST_ITEM1') {
                    return 'This is a test response.';
                } else if (value === 'TEST_ITEM2') {
                    return 'This is a multi replace test response {0} {1}';
                } else {
                    return '';
                }
            }
        };

        module('localize.service', function ($provide) {
            $provide.value('localize', localize);
        });
    });

    beforeEach(module('localize.filters'));

    beforeEach(inject(function($filter) {
        filter = $filter('i18n');
    }));

    it('should return text', function () {
        expect(filter('TEST_ITEM1')).toBe('This is a test response.');
    });

    it('should not replace placeholders', function () {
        expect(filter('TEST_ITEM2')).toBe('This is a multi replace test response {0} {1}');
    });

});
