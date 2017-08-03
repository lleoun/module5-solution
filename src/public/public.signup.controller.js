(function () {
    "use strict";
    //angular.module('restaurant', ['public'])
    angular.module('public')
    .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['checkDishService','$scope','$stateParams','$http','$rootScope'];

    function RegistrationController(checkDishService, $scope, $stateParams,$http,$rootScope) {
        var reg = this;     
        var rdo =[];

  
            reg.submit = function () {   
            $rootScope.firstname = $scope.reg.user.firstname;
            $rootScope.lastname = $scope.reg.user.lastname;
            $rootScope.email = $scope.reg.user.email;
            $rootScope.phone = $scope.reg.user.phone
            $rootScope.dish= $scope.reg.user.dish;

            if(reg.nonumber==false)
            {
                reg.completed = true;     
            }   
            else
            {
                reg.completed = false;     
            }    

        };//end of submit

       
        reg.checkDish = function(shortName){
            if(shortName)
            {   
                checkDishService.checkDish(shortName).then(function(key) {
                    $scope.rdo = key;
                    //console.log($scope.rdo);
                    reg.nonumber = false;

                }).catch(function (err) {
                    //console.log(err);
                     reg.nonumber = true;
                });

            }

        };
        
        
        
        

    }
})();