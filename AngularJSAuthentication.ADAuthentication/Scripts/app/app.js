var aplicacion = angular.module('aplicacion', ['LocalStorageModule']);


//URL SERVICIO DE AUTENTICACIÓN
var serviceBase = 'http://localhost:44303/';
//var serviceBase = 'http://angular.tests.com/api/';

//URL SERVICIO DE DATOS
var resourcesServiceBase = 'http://localhost:44304/';
//var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';

aplicacion.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'consoleApp',
    resourcesServiceUri: resourcesServiceBase
    
});


aplicacion.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
}]);



