const userScore = document.getElementById('final-score');
const userName = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

userScore.textContent = mostRecentScore

username.addEventListener('keyup', () => {
saveScore.disabled = !userName.value;
})

saveHighScore = e => {
   e.preventDefault();
   const score = {
      score: mostRecentScore,
      name: userName.value
   };

   highScores.push(score);
   highScores.sort( (a,b) => b.score - a.score);
   highScores.splice(5);

   localStorage.setItem('highScores', JSON.stringify(highScores));
};
