var startBtn = document.getElementById('start-btn')
var pEl = document.getElementById('p')
var titleEl = document.getElementById('title')
var quizContainer = document.getElementsByClassName('quizContainer')

var answerEl = document.getElementsByClassName('btn')

startBtn.addEventListener('click', startQuiz)

function startQuiz () {
startBtn.style.display='none'
pEl.style.display='none'
titleEl.style.display='none'
quizContainer.style.display='block'
}


function selectAnswer () {

}

function timerEl () {

}

function storeScore () {
    
}