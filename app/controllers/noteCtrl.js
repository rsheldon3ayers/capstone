app.controller("noteCtrl", ["$scope", "$firebaseAuth", "$location", "$firebaseArray", "getBookObj",

	function ($scope, $firebaseAuth, $location, $firebaseArray, getBookObj) {
		

		$scope.bookNotes = "";
		$scope.noteDetail = "";
		var bookID = getBookObj.getBookID();
		console.log(bookID);
 		var ref = new Firebase('https://co-read-quiz.firebaseio.com/' + bookID + "/notes");
		console.log("ref is this:")
		var auth = $firebaseAuth(ref);
		$scope.userID = auth.$getAuth().uid;
		$scope.books = $firebaseArray(ref);

		console.log($scope.books);
		
		$scope.saveNotes = function (bookNotes, noteDetail) {

			console.log(bookID)
			var ref = new Firebase('https://co-read-quiz.firebaseio.com/' + bookID + '/notes');
			var Detailref = new Firebase('https://co-read-quiz.firebaseio.com/' + bookID + '/noteDetail');
			// getBookObj.setBookID(book.$id);
			// console.log(getBookObj.setBookID(book.$id));

			Detailref.push(noteDetail);
			ref.push(bookNotes);

			$location.path('/QuizApp/noteView');

		

		}

		






}]); //end of contoller