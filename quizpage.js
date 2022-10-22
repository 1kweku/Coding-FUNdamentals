const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('answer-text'));
const rightorWrong = document.getElementById('rightorWrong');
const progress = document.getElementById('progress');


let time = 60;
const timeLeft = document.getElementById('countdown');

var obj = setInterval(updateCountdown, 1000);
function updateCountdown () {
    timeLeft.innerHTML = time,
    time--;
    if (time == -1) {
        clearInterval(obj);
    }
}

let currentQuestion = {};
acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let questionsLeft = [];

let questions = [
    {
        question: "What is used to define a hyperlink?",
        choice1: " 1. <div>",
        choice2: " 2. <a>",
        choice3: " 3. <script>",
        choice4: " 4. <html>",
        answer: 2
    },

    {
        question: "Which of these languages is used to create the framework of an application?",
        choice1: " 1. JQuery",
        choice2: " 2. Javascript",
        choice3: " 3. HTML",
        choice4: " 4. VS Code",
        answer: 3
    },

    {
        question: "Which of the following commands is used to display the current working directory?",
        choice1: " 1. git origin branch",
        choice2: " 2. git add -A",
        choice3: " 3. git origin master",
        choice4: " 4. git status",
        answer: 4
    },

    {
        question: "What does CSS stand for?",
        choice1: " 1. Creative Style Sheet",
        choice2: " 2. Content Selector Sheet",
        choice3: " 3. Cascading Style Sheet",
        choice4: " 4. Content Style Sheet",
        answer: 3
    },

    {
        question: "What is the correct syntax for referencing an external script?",
        choice1: " 1. <script src= >",
        choice2: " 2. <script href= >",
        choice3: " 3. <script= >",
        choice4: " 4. <script html= >",
        answer: 1
    },

    {
        question: "What does CSS stand for?",
        choice1: " 1. Creative Style Sheet",
        choice2: " 2. Content Selector Sheet",
        choice3: " 3. Cascading Style Sheet",
        choice4: " 4. Content Style Sheet",
        answer: 3
    },
]
const availableQuestions = [ ...questions];
let questionIndex = Math.floor(Math.random() * availableQuestions.length) 

const numberofQuestions = 5;

startGame = () => {
    
    questionCounter = 0;
    nextQuestion();
};

let questionNumber = 5
nextQuestion = () => { 
    if(questionNumber===0) {
        localStorage.setItem('mostRecentScore' , time);
        return window.location.assign("endpage.html")
    }
    
    questionCounter++;
    progress.innerText = questionCounter + '/' + '5';
    questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    questionNumber--;

    acceptingAnswers = true;
}   

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(availableQuestions[questionIndex].answer)  
        console.log(selectedAnswer)

       if (selectedAnswer == availableQuestions[questionIndex].answer) {
            rightorWrong.textContent = "Right";
          } else {
            rightorWrong.textContent = "Wrong"
            time -= 10 
          };
       
      
        availableQuestions.splice(questionIndex, 1);
        nextQuestion()
    })
});

startGame();
updateCountdown();











