app.factory("getBookObj", [function () {

	var bookID = "";
	return { 
		getBookID: function () {

			return bookID;
		},
		setBookID: function (value) {
			bookID = value;
			return bookID;

		}


	}
	





}]);//end of factory
