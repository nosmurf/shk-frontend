
app.controller('timelineController', function($scope, userFactory) {
	$scope.accesses= [];
	var database = firebase.database();

	var userId = userFactory.getUID();
	firebase.database().ref('/groups/' +"dUuoiStAEXgpJ7ReIhKohA2LHke2").orderByKey().once('value').then(function(snapshot) {
		var childKey = snapshot.child("accesses");
		$scope.data = childKey;
		childKey.forEach(function(childSnapshot) {
					var access={};

					var date = new Date(childSnapshot.val().datetime);
					//childSnapshot.val().datetime= .toDateString();
					//childSnapshot.val().datetime =;
						access["date"]=date.toString();
						access["face"]=childSnapshot.val().face;
						access["nfc"]=childSnapshot.val().nfc;
					console.log(access);
		    	$scope.accesses.push(access);
					console.log(childSnapshot.val());
					});
		$scope.$apply();
	});
	$scope.message = 'TIMELINE';


});
