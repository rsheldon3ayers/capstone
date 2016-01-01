app.controller("bookCtrl", ["$scope", "$firebaseAuth","$firebaseArray", "$location", "getBookObj",

	function ($scope, $firebaseAuth, $firebaseArray, $location, getBookObj) {
		var ref = new Firebase("https://co-read-quiz.firebaseio.com/");
		var auth = $firebaseAuth(ref);
		$scope.userID = auth.$getAuth().uid;
		console.log($scope.userID);
		$scope.books = $firebaseArray(ref);
		
		$scope.userISBN = "";

		$scope.myShow = false;
		$scope.myNotes = false;

		$scope.hide = function(book) {


				console.log("book from hide", book.notes)

				getBookObj.setBookID(book.$id);

				//use this to make sure book has notes

				// if(book.notes === undefined){
				// 	console.log("good thinking, Roger");
				// }
				
				 $scope.myShow = true;
				 $scope.myNotes = false;
				 $location.path('/QuizApp/quiz');
				 // $scope.userISBN = userISBN;
				 // console.log($scope.myShow, $scope.userISBN);


		};
		$scope.show = function() {

				
				 $scope.myNotes = true;
				 $scope.myShow = false;
				 // $scope.userISBN = userISBN;
				 // console.log($scope.myShow, $scope.userISBN);


		};

		$scope.addNotes = function (book, userNotes) {

			console.log(book);

			var ref = new Firebase('https://co-read-quiz.firebaseio.com/' + book.$id + '/notes');
			getBookObj.setBookID(book.$id);
			console.log(getBookObj.setBookID(book.$id));

			ref.push(userNotes);

		
			
			
			
		};
		$scope.onView = function (book) {
			getBookObj.setBookID(book.$id);
		  $location.path('/QuizApp/quiz');
	};


		$scope.go = function ( path ) {
  		$location.path( path );
  		console.log("works");
		};


	console.log($scope.books);

}]); //end of contoller
