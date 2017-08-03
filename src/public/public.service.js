(function () {
    'use strict';

    angular.module('public')
    .service('checkDishService', checkDishService);

    checkDishService.$inject = ['$http','$q', '$timeout']
    function checkDishService($http,$q, $timeout) {
        var service = this;
        var items = [];

        service.checkDish = function (shortName) {
       
            var deferred = $q.defer();
            $http.get('https://llion.herokuapp.com/menu_items/'+shortName.toUpperCase()+'.json').success(function(data) {
                service.items = data;
                // Wait 2 seconds before returning
                $timeout(function () {
                    deferred.resolve(data);
                    }, 400);
            })
            .error(function() {
                
                deferred.reject("No such menu number exists");
            });
            //console.log(deferred.promise);
            return deferred.promise;
        };
    }

    

})();
