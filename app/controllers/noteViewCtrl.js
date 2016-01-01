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
		











	}]);//end of controller	