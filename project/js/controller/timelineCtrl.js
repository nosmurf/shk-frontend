
app.controller('timelineController', function($scope, userFactory) {
	$scope.accesses= [];
	$scope.users=[];


	$scope.contains=function( obj) {
    for (var i = 0; i < $scope.users.length; i++) {
        if ($scope.users[i].uid == obj) {
            return $scope.users[i].name;
        }
    }
    return "User not found";
	}


	$scope.obtainUsers=function() {
		firebase.database().ref('/groups/' +"dUuoiStAEXgpJ7ReIhKohA2LHke2").once('value').then(function(snapshot) {
			var childKey = snapshot.child("users");
			childKey.forEach(function(childSnapshot) {
							var user={};
							user["name"]=childSnapshot.val().name;
							user["uid"]=childSnapshot.key;
							$scope.users.push(user);
			});
			$scope.$apply();
			init();
		});

	}

	function init() {
		$scope.accesses=[];
		var userId = userFactory.getUID();
			firebase.database().ref('/groups/' +userId).orderByKey().once('value').then(function(snapshot) {
				var childKey = snapshot.child("accesses");
				childKey.forEach(function(childSnapshot) {
							var access={};

							var date = new Date(childSnapshot.val().datetime);
								access["date"]=date.toString();
								access["user"] = $scope.contains(childSnapshot.val().uid);
								access["face"]=childSnapshot.val().face;
								access["nfc"]=childSnapshot.val().nfc;
								$scope.accesses.push(access);

							});
				$scope.accesses.reverse();
				$scope.$apply();
			});

	}

	$scope.obtainUsers();

	firebase.database().ref('/groups/' +userFactory.getUID() +"/accesses").on('child_changed', function(data) {
		$scope.accesses=[];
		init();
	});

	firebase.database().ref('/groups/' +userFactory.getUID() +"/accesses").on('child_added', function(data) {
		var access={};

			var date = new Date(data.val().datetime);
			access["date"]=date.toString();
			access["user"] = $scope.contains(data.val().uid);
			access["face"]=data.val().face;
			access["nfc"]=data.val().nfc;
			console.log(access);
			$scope.accesses.reverse();
			$scope.accesses.push(access);
			$scope.accesses.reverse();
			$scope.$apply();

	});

	$scope.message = 'TIMELINE';


});
