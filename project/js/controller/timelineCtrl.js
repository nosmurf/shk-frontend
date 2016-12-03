
app.controller('timelineController', function($scope, userFactory) {
	$scope.accesses= [];
	var database = firebase.database();

	var userId = userFactory.getUID();
	firebase.database().ref('/groups/' +"dUuoiStAEXgpJ7ReIhKohA2LHke2").orderByKey().once('value').then(function(snapshot) {
		var childKey = snapshot.child("accesses");
		$scope.data = childKey;
		childKey.forEach(function(childSnapshot) {
					var access={};
					childSnapshot.val().datetime= new Date(childSnapshot.val().datetime);

		    	$scope.accesses.push(childSnapshot.val());
					console.log(childSnapshot.val());
					});
		$scope.$apply();
	});
	$scope.message = 'TIMELINE';


});
