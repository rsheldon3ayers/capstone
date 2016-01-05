app.controller("noteViewCtrl", ["$scope", "$firebaseAuth", "$location", "$firebaseArray", "getBookObj",

	function ($scope, $firebaseAuth, $location, $firebaseArray, getBookObj) {

		var bookID = getBookObj.getBookID();
		var noteRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/notes");
		var detailRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/noteDetail");
		// var auth = $firebaseAuth(ref);
		// $scope.userID = auth.$getAuth().uid;
		// console.log($scope.userID);
		$scope.notes = $firebaseArray(noteRef);
		$scope.detail = $firebaseArray(detailRef);
		console.log($scope.notes);
		console.log($scope.detail);
		

		$scope.remove = function (detail, note) {

			console.log(detail, note);
			var noteRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/notes/" + note.$id);
			var detailRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/noteDetail/" + detail.$id);
			
			console.log(noteRef);
			noteRef.remove();
			detailRef.remove();
		};



		$scope.edit = function (detail, note) {
		
			
			getBookObj.setDetailID(detail.$id);
			getBookObj.setNoteID(note.$id);
			$location.path('/QuizApp/editNote');
		}






	}]);//end of controller	