



app.controller('indexController', function($scope,$rootScope) {


	$rootScope.login = false;

  if($scope.login==false){
      document.getElementById("login").showModal();
  }


  $scope.setUser=function(user){
    $scope.user=user.getName();
		$scope.urlImage= user.getImageUrl()
		console.log($scope.user);
		$scope.$apply();
  }





});
