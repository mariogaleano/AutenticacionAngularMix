﻿'use strict';
app.controller('testController', ['$scope', 'testsService', function ($scope, testsService) {

    $scope.testData = [];

    testsService.getData().then(function (results) {

        $scope.testData = results.data;

    }, function (error) {
        alert(error.data.message);
    });

    testsService.getTestData(20).then(function (results) {

        $scope.dataTests = results.data;

    }, function (error) {
        alert(error.data.message);
    });


}]);