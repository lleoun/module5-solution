(function () {
    "use strict";
    //angular.module('restaurant', ['public'])
    angular.module('public')
    .controller('RegistrationController2', RegistrationController2);

    RegistrationController2.$inject = ['checkDishService','$scope','$stateParams','$http','$rootScope'];

    function RegistrationController2(checkDishService, $scope, $stateParams,$http,$rootScope) {
        var reg2 = this;  
         var resultado =[];   
   
         if($rootScope.firstname)
         {
             reg2.nosingup = false;     
             reg2.haydata = true;
             
             //the user enters a dish, let's say A1, and with the replace sentence we get the just category name: A 
             $rootScope.cat = $rootScope.dish.replace(/[^a-z]/gi, '').toUpperCase(); 
             $rootScope.dishImage = $rootScope.dish.toUpperCase();
             reg2.$rootScope =$rootScope;

             //to get the info of the selected dish 
             checkDishService.checkDish($rootScope.dish).then(function(key) {
                 $scope.resultado = key;
                 //console.log($scope.resultado.name);
                 $rootScope.nombre = $scope.resultado.name;
                 $rootScope.descripcion = $scope.resultado.description;
                 



             }).catch(function (err) {
                 console.log(err);
              
            });

        }
        else
        {
            reg2.nosingup = true;     
            reg2.haydata = false;
        }



    }
})();