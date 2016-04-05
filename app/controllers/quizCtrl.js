app.controller("quizCtrl", ["$scope", "$firebaseAuth", "$firebaseArray", "$location", "getBookObj",
    function($scope, $firebaseAuth, $firebaseArray, $location, getBookObj) {
        var randomWord;
        var bookID = getBookObj.getBookID();
        console.log("bookID in quizCtrl", bookID);

        var ref = new Firebase('https://co-read-quiz.firebaseio.com/' + bookID + "/noteDetail");

        var notes = $firebaseArray(ref);
        var keepWords = ["am", "A", "are", "is", "was", "were", "be", "being", "been",
            "have", "has", "had", "shall", "will", "do", "does", "did",
            "may", "must", "might", "can", "can't", "could", "would", "should",
            "a", "an", "the", "and", "or", "some", "here", "who", "what",
            "when", "where", "how", "why", "in", "There", "When", "This"
        ];
        notes.$loaded(

            function findWord(notes) {

                var newArray = [];

                $scope.newNotes = {};

                console.log($scope.newNotes);
                console.log(notes[0].$value);


                for (var i = 0; i < notes.length; i++) {

                    var filterNotes = notes[i].$value;

                    var stringArray = filterNotes.split(" ");

                    // var randomWord = stringArray[Math.floor(Math.random() * stringArray.length)];



                    stringArray.forEach(function(stringArrayWord, index, stringArray) {

                        if (keepWords.includes(stringArrayWord) || stringArray.includes('____')) {


                            //do nothing at all



                        } else {
                            randomWord = stringArray[index];
                            console.log("use this to check answer", randomWord)
                            stringArray[index] = '____';
                            var newString = stringArray.join();

                            var noComma = newString.replace(/,/g, " ");
                            console.log(noComma);
                            newArray.push({ noComma, randomWord });
                            console.log(newArray);


                            return $scope.newNotes = newArray;
                            console.log("next up!")

                        }
                    })


                };
                $scope.wrongAnswer = false;
                $scope.correctAnswer = false;





            })
        $scope.noteIndex;
        $scope.checkAnswer = function(userAnswer, randomWord) {

            console.log("check works");


            if (userAnswer === randomWord) {

                $scope.correctAnswer = true;
                $scope.wrongAnswer = false;
                // $location.path('/QuizApp/notes');


            } else {

                $scope.wrongAnswer = true;
                $scope.correctAnswer = false;

                console.log("if/else works, right answer");
            }
        }

        $scope.onSubmit = function() {

            $location.path('/QuizApp/notes');
        };
        $scope.onView = function() {

            $location.path('/QuizApp/noteView');
        };

    }
]); //end of contoller
