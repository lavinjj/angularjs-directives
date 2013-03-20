// taken from the book AngularJS Web Application Development

angular.module('directives.button', []).
    directive('button', function() {
       return {
           restrict: 'E',
           compile: function(element, attributes) {
               element.addClass('btn');

               if(attributes.type === 'submit' ||
                   attributes.type === 'primary') {
                   element.addClass('btn-primary');
               } else if (angular.isDefined(attributes.type) &&
                   attributes.type !== 'reset') {
                   element.addClass('btn-' + attributes.type);
               }
               if (attributes.size) {
                   element.addClass('btn-' + attributes.size);
               }
           }
       };
    });
