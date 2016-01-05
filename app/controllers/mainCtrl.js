app.controller("mainCtrl", ["$scope", "$firebaseAuth", "$location", "$firebaseArray",

	function ($scope, $firebaseAuth, $location, $firebaseArray) {

		

	console.log("Main controller linked")
	
	$scope.addBook = function(userISBN, bookTitle) {	



		var ref = new Firebase("https://co-read-quiz.firebaseio.com/");
		

		var auth = $firebaseAuth(ref);
		var userID = auth.$getAuth().uid;
		console.log();


		console.log(ref);
		 
	
		console.log("Inside addBook, = ", bookTitle, userISBN, userID);
		
		ref.push({

			"title": bookTitle,
			"userID": userID,
			"userISBN": userISBN
			
				});

		$location.path('/QuizApp/books');
          

	};
	$scope.viewBook = function () {
		
		$location.path('/QuizApp/books');
	}








}]); //end of contoller