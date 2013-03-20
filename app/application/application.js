'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('mySampleApp.constants', []);
Application.Services = angular.module('mySampleApp.services', ['mySampleApp.constants']);
Application.Controllers = angular.module('mySampleApp.controllers', ['mySampleApp.constants']);
Application.Filters = angular.module('mySampleApp.filters', []);
Application.Directives = angular.module('mySampleApp.directives', ['mySampleApp.services']);

angular.module('mySampleApp', ['directives.button', 'ui-gravatar', 'localize.service', 'localize.directives', 'mySampleApp.filters', 'mySampleApp.services', 'mySampleApp.directives', 'mySampleApp.constants', 'mySampleApp.controllers'])