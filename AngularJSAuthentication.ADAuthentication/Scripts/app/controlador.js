aplicacion.controller('controlador',['$scope', 'datafactory','user', function ($scope, datafactory,user) {


    $scope.Cargar = function () {

        $scope.data = [];


        //console.log(user.clientId);

        datafactory.getData($scope.cantidad).then(function (results) {

            $scope.data = results.data;

        }, function (error) {

            if (error.description)
                $scope.message = error.description;

            if(error)
                $scope.message = error;

            $scope.data = null;
        });
    };


    $scope.loginData = {
        userName: user.clientId,
        password: "pruebasistecredito",
        useRefreshTokens: false
    };

    $scope.message = "";

    $scope.login = function () {


        

        datafactory.login($scope.loginData).then(function (response) {

            //$location.path('/orders');

            $scope.message = "OK";

        },
         function (err) {

             if (err.error_description) {
                 $scope.message = err.error_description;
             } else {
                 $scope.message = "Error - ";
                 $scope.message += err;
             }
             
         });
    };

    $scope.Limpiar = function() {

        $scope.data = null;
    };

    $scope.login();


}]);