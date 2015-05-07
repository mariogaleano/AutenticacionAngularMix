var aplicacion = angular.module('aplicacion', ['LocalStorageModule']);

aplicacion.constant('ngAuthSettings', {
    //apiServiceBaseUri: serviceBase,
    clientId: 'consoleApp'
    
});


aplicacion.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');

    //$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);



