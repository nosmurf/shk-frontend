

app.factory('userFactory', [ '$http', '$q', function( $http, $q) {
  return {

         getUsers: function(){
           var deferred = $q.defer();

           $http.get('API_QUE_ME_TIENE_QUE_DAR_EL_PUTO_DANI').success(function(data) {
               deferred.resolve(data);
           });
           return deferred.promise;
         }


     }


}]);
