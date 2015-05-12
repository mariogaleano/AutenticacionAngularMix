aplicacion.factory('datafactory', ['$http', '$q', 'localStorageService',function ($http, $q, localStorageService) {

    
    var serviceBase = 'https://localhost:44304/api';

    var dataServiceFactory = {};

    var getData = function (cantidad) {

        return $http.get(serviceBase + '/datatests/' + cantidad).then(function (results) {
            return results;
        });
    };

    var _authentication = {
        isAuth: false,
        userName: "",
        useRefreshTokens: false
    };

    var _login = function (loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password + "&client_id=consoleApp&client_secret=123@abc";

        //grant_type=password&username=pruebasistecredito&password=pruebasistecredito&client_id=consoleApp&client_secret=123@abc

        var deferred = $q.defer();

        $http.post('https://localhost:44303/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            if (loginData.useRefreshTokens) {
                localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
            }
            else {
                localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: "", useRefreshTokens: false });
            }

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;
            _authentication.useRefreshTokens = loginData.useRefreshTokens;

            deferred.resolve(response);

        }).error(function (err, status) {

            if (err)
                deferred.reject(err);
        });

        return deferred.promise;

    };

    dataServiceFactory.getData = getData;
    dataServiceFactory.login = _login;
    return dataServiceFactory;

}]);