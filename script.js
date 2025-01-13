
var btn = document.querySelector("#start-quiz button");

let questions = [
    { 
        question: "Richest man in the world 2024?", 
        options: ["a) Elon Musk", "b) MrBeast", "c) Mark Zuckerberg"], 
        answer: "a) Elon Musk" 
    },
    { 
        question: "Capital of France?", 
        options: ["a) Berlin", "b) Paris", "c) Madrid"], 
        answer: "b) Paris" 
    },
    { 
        question: "Fastest animal in the world?", 
        options: ["a) Peregrine Falcon", "b) Cheetah", "c) Sailfish"], 
        answer: "a) Peregrine Falcon" 
    },
    { 
        question: "Largest planet in the Solar System?", 
        options: ["a) Earth", "b) Jupiter", "c) Saturn"], 
        answer: "b) Jupiter" 
    },
    { 
        question: "Who discovered gravity?", 
        options: ["a) Albert Einstein", "b) Isaac Newton", "c) Galileo Galilei"], 
        answer: "b) Isaac Newton" 
    }
];

let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

btn.addEventListener("click", function () {
    if (btn.innerHTML === "Start Quiz" || btn.innerHTML === "Restart Quiz") {
        resetQuiz();
    } else if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
});

function resetQuiz() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    btn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    document.querySelector("#welcome h1").innerHTML = `Question ${currentQuestionIndex + 1}`;
    document.querySelector(".question h1").innerHTML = currentQuestion.question;

    let optionContainer = document.querySelector("#option");
    optionContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(optionText => {
        let option = document.createElement("button");
        option.innerHTML = optionText;
        option.addEventListener("click", () => checkAnswer(optionText, currentQuestion.answer, option));
        optionContainer.appendChild(option);
    });

    document.querySelector("#result h1").innerHTML = ""; // Clear result
    currentQuestionIndex++;
}

function checkAnswer(selected, correct, button) {
    let result = document.querySelector("#result h1");
    if (selected === correct) {
        result.innerHTML = "Correct answer!";
        button.style.backgroundColor = "#45a049";
        correctCount++;
    } else {
        result.innerHTML = "Wrong answer!";
        button.style.backgroundColor = "#dc3545";
        highlightCorrectAnswer(correct);
        incorrectCount++;
    }
}

function highlightCorrectAnswer(correct) {
    document.querySelectorAll("#option button").forEach(button => {
        if (button.innerHTML === correct) {
            button.style.backgroundColor = "#45a049";
        }
    });
}

function showFinalResult() {
    document.querySelector("#welcome h1").innerHTML = "Quiz Completed!";
    document.querySelector(".question h1").innerHTML = `Correct: ${correctCount}, Incorrect: ${incorrectCount}`;
    document.querySelector("#option").innerHTML = "";
    document.querySelector("#result h1").innerHTML = "";
    btn.innerHTML = "Restart Quiz";
}
