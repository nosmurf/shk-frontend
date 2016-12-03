

app.factory('userFactory', [ '$http', '$q', function( $http, $q) {
      var user;
      var uid;
  return {

      getUsers: function(){
        var deferred = $q.defer();

        $http.get('API_QUE_ME_TIENE_QUE_DAR_EL_PUTO_DANI').success(function(data) {
          deferred.resolve(data);
        });
        return deferred.promise;
      },

      setUser: function(userData){
        user=userData
      },
      getUser: function(){
        return user;
      },
      setUID: function(Uid){
        uid=Uid
      },
      getUID: function(){
        return uid;
      }
    }


}]);
