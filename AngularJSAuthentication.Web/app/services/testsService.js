'use strict';
app.factory('testsService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.resourcesServiceBaseUri;

    var testsServiceFactory = {};

    var _getData = function () {

        return $http.get(serviceBase + 'api/Protected').then(function (results) {
            return results;
        });
    };


    var _getTestData = function (cantidad) {

        return $http.get(serviceBase + 'api/datatests/' + cantidad).then(function (results) {
            return results;
        });
    };

    testsServiceFactory.getData = _getData;

    testsServiceFactory.getTestData = _getTestData;

    return testsServiceFactory;

}]);