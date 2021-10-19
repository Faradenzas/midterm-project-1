// define our data and state objects
export const quizQuestions = [
    {
        questionText: "What is the capital of Ireland?",
        answerOptions: ["New York", "Dublin", "Madrid", "Paris"],
        answer: "Dublin"
    },
    {
        questionText: "Luke Skywalker is a character from which film series",
        answerOptions: [
            "The Lion King",
            "Harry Potter",
            "Star Wars",
            "Lord of the Rings"
        ],
        answer: "Star Wars"
    },
    {
        questionText: "How many days are in September",
        answerOptions: ["28", "29", "30", "31"],
        answer: "30"
    }
];

export let currentQuestion = 0; //computers start counting from zero remember!
export let currentScore = 0;

// get our elements from the dom
//const quizContainer = document.querySelector(".quiz-container");
export const questionDisplay = document.querySelector(".question");
export const answerList = document.querySelector(".answer-list");
export const score = document.querySelector(".quiz-score");

// helper methods to create our elements
export const createQuizQuestion = quizQuestion => {
    createQuestionText(quizQuestion.questionText);
    createAnswerButtons(quizQuestion.answerOptions);
};

export const createQuizScore = () => {
    questionDisplay.style.display = "none";
    answerList.style.display = "none";
    // show the score
    score.style.display = "block";
    score.textContent =
        "You scored " + currentScore + " out of " + quizQuestions.length;
};

export const createQuestionText = questionText => {
    // append our div to our answer list
    questionDisplay.textContent = "Q)" + questionText;
};

export const createAnswerButtons = answerOptions => {
    //clear our answer list before creating new answer buttons
    answerList.innerHTML = "";

    // our answerOptions is an array, so we map over it to
    // create a list of answer buttons
    answerOptions.map(answerOption => {
        // create an answer item div and give it a class
        const answerItemDiv = document.createElement("div");
        answerItemDiv.className = "answer-item";

        //create a button
        const answerButton = document.createElement("button");
        answerButton.textContent = answerOption;

        // add an eventlistener to this button to check if answer is correct or not
        //handleAnswerButtonClick();

        answerButton.addEventListener("click", () => {
            // get our currentQuestion
            const question = quizQuestions[currentQuestion];
            // compare the answer the user selected to the correct answer
            if (question.answer === answerButton.textContent) {
                currentScore += 1;
            }

            // move on to the next question
            currentQuestion += 1;

            // display questions if we still have them,
            // otherwise display the scores
            if (quizQuestions[currentQuestion]) {
                createQuizQuestion(quizQuestions[currentQuestion]);
            } else {
                createQuizScore();
            }
        });

        // append button to our div
        answerItemDiv.appendChild(answerButton);

        // append our div to our answer list
        answerList.appendChild(answerItemDiv);
    });
};



(function() {
    createQuizQuestion(quizQuestions[0]);
})();
