app.controller("loginCtrl", ["$scope", "$firebaseAuth", "$location",

	function ($scope, $firebaseAuth, $location) {

   
   $scope.login = function (loginEmail, pwd) {

    console.log("Login working");
    var ref = new Firebase("https://co-read-quiz.firebaseio.com/");
      ref.authWithPassword({
        email    : loginEmail,
        password : pwd
        }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          ref.child("/users").push({"userID" :authData.uid});
          $location.path('/QuizApp/books');
          $scope.$apply();
          
          }
      });


   };

   $scope.register = function (loginEmail, pwd) {
         console.log("register working");
        var ref = new Firebase("https://co-read-quiz.firebaseio.com/");
        ref.createUser({
          email    : loginEmail,
          password : pwd
        }, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
          }
        });



   };
   $scope.googleLogin = function () {
      console.log("google works")
      var ref = new Firebase("https://co-read-quiz.firebaseio.com/");
        ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {

            console.log("Authenticated successfully with payload:", authData.uid);
                ref.child("/users").push({"userID" :authData.uid});
                $location.path('/QuizApp/books');
                $scope.$apply();
          }
        });

   };

	console.log("contoller is linked");
	


}]); //end of contoller