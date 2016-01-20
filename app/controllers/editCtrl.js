app.controller("editCtrl", ["$scope", "$firebaseAuth","$firebaseObject", "$location", "getBookObj",

	function ($scope, $firebaseAuth, $firebaseObject, $location, getBookObj) {

		
	

		var bookID = getBookObj.getBookID();
		var noteID = getBookObj.getNoteID();
		var detailID= getBookObj.getDetailID();

		var noteRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/notes/" + noteID);
		var detailRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/noteDetail/" + detailID);
		$scope.note = $firebaseObject(noteRef);
		$scope.detail = $firebaseObject(detailRef);
		console.log("note", $scope.note, $scope.detail);
		$scope.note.$loaded().then(function(){
			$scope.userEdits = $scope.note.$value;
			console.log($scope.userEdits);
		});
		$scope.detail.$loaded().then(function(){
			$scope.userDetail = $scope.detail.$value;
			console.log($scope.userEdits);
		});
		
		

		$scope.update = function (userEdits, userDetail) {
			
			var noteRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/notes/" + noteID);
			var detailRef = new Firebase("https://co-read-quiz.firebaseio.com/" + bookID + "/noteDetail/" + detailID);
			console.log(userEdits, userDetail);
			noteRef.set(userEdits);
			detailRef.set(userDetail);

			$location.path('/QuizApp/noteView');
		}
}]);
