const quizdisplay = document.getElementById("display");
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let wrapper = document.getElementById("wrapper");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 15;
let countdown;
let name = ""

const quizArray = [
    {
        id: "0",
        question: "Чи можна використовувати операцію привласнення для зміни значення змінної?",
        options: ["Так", "Ні"],
        correct: "Так"
    },
    {
        id: "1",
        question: "Чи можна використовувати операцію привласнення для створення нової змінної?",
        options: ["Так", "Ні"],
        correct: "Так"
    },
    {
        id: "2",
        question: "Чи можна використовувати операцію привласнення для копіювання значення змінної?",
        options: ["Так", "Ні"],
        correct: "Так"
    },
    {
        id: "3",
        question: "Чи можна використовувати операцію привласнення для присвоєння значення змінної іншій змінній?",
        options: ["Так", "Ні"],
        correct: "Так"
    },
    {
        id: "4",
        question: "Чи можна використовувати операцію привласнення для присвоєння значення константі?",
        options: ["Так", "Ні"],
        correct: "Ні"
    },
    {
        id: "5",
        question: "Чи можна використовувати операцію привласнення для присвоєння значення виразу?",
        options: ["Так", "Ні"],
        correct: "Так"
    },
    {
        id: "6",
        question: "Чи можна використовувати операцію привласнення для зміни розміру масиву?",
        options: ["Так", "Ні"],
        correct: "Так"
    },
    {
        id: "7",
        question: "Чи можна використовувати операцію привласнення для видалення змінної?",
        options: ["Так", "Ні"],
        correct: "Ні"
    }
];

restart.addEventListener("click", () => {
    inital();
    wrapper.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        questionCount += 1;
        if (questionCount == quizArray.length) {
            wrapper.classList.add("hide");
            scoreContainer.classList.remove("hide");
            userScore.innerHTML =
                name + ", ви дали " + scoreCount + " правильних відповідей із " + questionCount + ", ваша оцінка - " + scoreCount / 1.6 + " балів";
        } else {
            countOfQuestion.innerHTML =
                "Питання " + (questionCount + 1) + " із " + quizArray.length;
            quizDisplay(questionCount);
            count = 15;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}сек`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container_mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);
    for (let i of quizArray) {
        let div = document.createElement("div");
        div.classList.add("container_mid", "hide");
        countOfQuestion.innerHTML = 1 + " із " + quizArray.length + " запитань";
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        div.innerHTML += `
<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
<button class="option-div" onclick="checker(this)">${i.options[1]}</button>
`;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container_mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("inCorrect");
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function inital() {
    name = prompt("Введіть ваше ім`я")
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    clearInterval(countdown);
    count = 15;
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    wrapper.classList.remove("hide");
    inital();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    wrapper.classList.add("hide");
};
