const questions = [
    {
        question: "Which country is funding India’s ‘Hunger Project’ and promote food security in Uttarakhand?",
        answers: [
            { text: "France", correct: false },
            { text: "UK", correct: false },
            { text: "Canada", correct: false },
            { text: "Norway", correct: true}
        ]
    },
    {
        question: "Who was appointed as the Director of the Special Protection Group (SPG)?",
        answers: [
            { text: "Alok Sharma", correct: true },
            { text: "Pankaj Singh", correct: false },
            { text: "R Hari Kumar", correct: false },
            { text: "Manoj Pande", correct: false }
        ]
    },
    {
        question: "What is the name of the potato disease that has caused substantial damage to potato crops across various districts of Punjab?",
        answers: [
            { text: "Downy Mildew", correct: false},
            { text: "Late Blight", correct: true},
            { text: "Powdery Mildew", correct: false},
            { text: "Verticillium Wilt", correct: false},

        ]

    },
    {
        question: "What is the name of the AI-based app recently launched by the central government for providing study materials in regional languages?",
        answers: [
            { text: "Anuvadini app", correct: true},
            { text: "Bhasini app", correct: false},
            { text: "Diksha app", correct: false},
            { text: "Bhasa sangam app", correct: false},

        ]
    },
    {
        question: "Recently, which state has filed a suit at the Supreme Court claiming that the Centre is withholding national disaster relief funds?",
        answers: [
            { text: "Karnataka", correct: false},
            { text: "Kerala", correct: false},
            { text: "Mahrashtra", correct: false},
            { text: "Tamil Nadu", correct: true},

        ]
    },
    {
        question: "Recently, which organization launched a new edition of the Girl Empowerment Mission?",
        answers: [
            { text: "DRDO", correct: false},
            { text: "ISRO", correct: false},
            { text: "NTPC", correct: true},
            { text: "BHEL", correct: false},

        ]
    },
    {
        question: "Recently, which institute signed an agreement with the Indian Register of Shipping to develop a ship trajectory prediction tool aimed at improving maritime safety?",
        answers: [
            { text: "IIT Roorkee", correct: false},
            { text: "IIT Bombay", correct: true},
            { text: "IIT Ahmedabad", correct: false},
            { text: "IIT Delhi", correct: false},

        ]
    },
    {
        question: "Recently, Indian Navy signed an MoU with which organization to promote hydrogen e-mobility?",
        answers: [
            { text: "Hindustan Aeronautics Limited", correct: false},
            { text: " Indian Oil Corporation Limited", correct: true},
            { text: "Hindustan Petroleum Corporation Limited", correct: false},
            { text: "Bharat Heavy Electricals Limited", correct: false},

        ]
    },
    {
        question: "Which institution recently launched ‘Nivahika’ web portal for data management?",
        answers: [
            { text: "NIT Calicut", correct: true},
            { text: "NIT Patna", correct: false},
            { text: "IIT Delhi", correct: false},
            { text: "IIT Kanpur", correct: false},

        ]
    },
    {
        question: "‘one nation, one election’, recently in news, is related to which committee?",
        answers: [
            { text: "Ram Nath Kovind", correct: true},
            { text: "Pratibha Patil", correct: false},
            { text: "Man Mohan Singh", correct: false},
            { text: "Radhakrishnan", correct: false},

        ]
    }
]
    


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();