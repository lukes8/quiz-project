function QuizController($scope) {

    $scope.isSubmitted = false;
    $scope.success = false;
    $scope.strQuestionAdded = "";

    $scope.quiz = {
        "Id": 1,
        "name": "Asp.Net Quiz",
        "description": "Asp.Net Quiz (contains webform, mvc, web API, etc.)"
    };
    $scope.questions = [{
        "Id": 1,
        "Name": "ASP.NET webform separates the" +
        "HTML output from program logic using a feature named as", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, 
            "Name": "Exception", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, 
            "Name": "Code-behind", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, 
            "Name": "Code-front", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, 
            "Name": "None of the above", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 2,
        "Name": "The feature in ASP.NET 2.0 that is used to" +         
        "fire a normal postback to a different page in the application is called", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, 
            "Name": "Theme", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, 
            "Name": "Code-front", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, 
            "Name": "Cross Page Posting", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, 
            "Name": "None of the above", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": 
        "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 3,
        "Name": "The feature in ASP.NET 2.0 that is used to" +         
        "fire a normal postback to a different page in the application is called", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, 
            "Name": "Theme", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, 
            "Name": "Code-front", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, 
            "Name": "Cross Page Posting", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, 
            "Name": "None of the above", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": 
        "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 4,
        "Name": "The feature in ASP.NET 2.0 that is used to" +         
        "fire a normal postback to a different page in the application is called", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, 
            "Name": "Theme", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, 
            "Name": "Code-front", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, 
            "Name": "Cross Page Posting", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, 
            "Name": "None of the above", "IsAnswer": false }],
        "QuestionType": { "Id": 1, "Name": 
        "Multiple Choice", "IsActive": true }
    }];
    $scope.totalItems = 4;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
    $scope.question = "";
    $scope.answer = "";

    
    $scope.isUndefined = function (thing) {
        return (typeof thing === "undefined");
    }

    $scope.loadQuiz = function() {
        //todo http.get
        // $scope.filteredQuestions = $scope.questions;
        var begin = ($scope.currentPage - 1) * $scope.itemsPerPage;
        var end = begin + $scope.itemsPerPage;
        $scope.filteredQuestions = $scope.questions.slice(begin, end);
    }   

    $scope.submit = function() {
        $scope.isSubmitted = true;
        $scope.success = true;
        $scope.questions.forEach(function(q) {
            console.log(q);
            q.Options.forEach(function(o) {
                console.log(o.answer)
                if ($scope.isUndefined(o.answer) && o.IsAnswer === true) {
                    console.log("LOG");
                    $scope.success = false;
                }
                else if (!$scope.isUndefined(o.answer) && o.IsAnswer !== o.answer) {
                    $scope.success = false;
                }
            }, this);
        }, this);

    }

    //TODO pridat getLastId() a jestli je multiplechoice
    $scope.addNewQuestion = function() {
        $scope.strQuestionAdded = "Question was added";
        $scope.questions.push({
            "Id": 1,
            "Name": $scope.question, 
            "QuestionTypeId": 1,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, 
                "Name": $scope.answer, "IsAnswer": false }],
            "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
        });
    }

    $scope.resetQuestion = function() {
        $scope.strQuestionAdded = "Question was reset";
        $scope.question = "";
        $scope.answer = "";
    }

    $scope.loadQuiz();

}