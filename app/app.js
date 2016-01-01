var app = angular.module("QuizApp", ["ngRoute", "firebase", "angular.filter", "ui.validate"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
      when('/QuizApp/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }).
      when('/QuizApp/main', {
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
      }).
      when('/QuizApp/books', {
        templateUrl: 'templates/bookView.html',
        controller: 'bookCtrl'
      }).
      when('/QuizApp/notes', {
        templateUrl: 'templates/notes.html',
        controller: 'noteCtrl'
      }).
      when('/QuizApp/quiz', {
        templateUrl: 'templates/quiz.html',
        controller: 'quizCtrl'
      }).
      when('/QuizApp/noteView', {
      	templateUrl: 'templates/noteView.html',
      	controller: 'noteViewCtrl'
      })
      .otherwise({
        redirectTo: '/QuizApp/login'
      });

}]);//end of config