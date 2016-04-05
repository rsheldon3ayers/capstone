app.factory("getBookObj", [function() {

    var bookID = "";
    return {
        getBookID: function() {

            return bookID;
        },
        setBookID: function(value) {
            bookID = value;
            return bookID;

        },
        setDetailID: function(value) {
            detailID = value;
            return detailID;
        },
        getDetailID: function() {
            return detailID;
        },
        setNoteID: function(value) {
            noteID = value;
            return noteID;
        },
        getNoteID: function() {
            return noteID;
        }



    }
}]); //end of factory
