


function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      // [START googlecredential]
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
      // [END googlecredential]
      // Sign in with credential from the Google user.
      // [START authwithcred]
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END authwithcred]
    } else {
      console.log('User already signed-in Firebase.');
      angular.element(document.getElementById('loginController')).scope().setUser(firebaseUser);
    }
  });
}
// [END googlecallback]

/**
 * Check that the given Google user is equals to the given Firebase user.
 */
// [START checksameuser]
function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}
// [END checksameuser]

/**
 * Handle the sign out button press.
 */
function handleSignOut() {
  var googleAuth = gapi.auth2.getAuthInstance();
  googleAuth.signOut().then(function() {
    firebase.auth().signOut();
  });
}




app.controller('loginController', function($scope,$rootScope,$window,userFactory) {

  $scope.setUser=function(user){
    $rootScope.user=user;
    userFactory.setUser(user);
    console.log(user.email);
    $rootScope.login=true;
    angular.element(document.getElementById('indexController')).scope().setUser(user);
    document.getElementById("login").close();

  }


  $scope.init = function () {

      var config = {
        apiKey: "AIzaSyB8ftnD0MC-GVmOg_MCckisu_6hsJDsOU0",
        authDomain: "securityhomekey.firebaseapp.com",
        databaseURL: "https://securityhomekey.firebaseio.com",
        storageBucket: "securityhomekey.appspot.com",
        messagingSenderId: "36492923646"
      };
      firebase.initializeApp(config);

      // Auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user){
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            //document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            document.getElementById('signout').disabled = false;
            //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            // [END_EXCLUDE]
          } else {
            // User is signed out.
            // [START_EXCLUDE]
            //document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
            document.getElementById('signout').disabled = true;
            //document.getElementById('quickstart-account-details').textContent = 'null';
              // [END_EXCLUDE]
          }
        });
      // [END authstatelistener]

      document.getElementById('signout').addEventListener('click', handleSignOut, false);

  }

	$scope.init();

});
