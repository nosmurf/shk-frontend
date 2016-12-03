
app.controller('timelineController', function($scope, userFactory) {

	var database = firebase.database();

	var userId = userFactory.getUID();
	return firebase.database().ref('/groups/' +userId).once('value').then(function(snapshot) {
	  var username = snapshot.val().parentEmail;
	  console.log(username);
	});
	$scope.message = 'TIMELINE';

});
