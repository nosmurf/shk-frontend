


app.controller('userController', function($scope) {
	$scope.users=[];


	$scope.obtainUsers=function() {
		firebase.database().ref('/groups/' +"dUuoiStAEXgpJ7ReIhKohA2LHke2").once('value').then(function(snapshot) {
			var childKey = snapshot.child("users");
			childKey.forEach(function(childSnapshot) {
							var user={};
							user["name"]=childSnapshot.val().name;
							user["email"]=childSnapshot.val().email;
							user["role"]=childSnapshot.val().role;
							$scope.users.push(user);
			});
			$scope.$apply();

		});

	}

	$scope.obtainUsers();

	$scope.message = 'This is Show orders screen';

});
