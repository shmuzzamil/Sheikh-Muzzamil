let totalScore = 0;
let Currentquestion = 1;

function submitAnswer(score) {

    totalScore = totalScore + score;

    if (Currentquestion < 5) {
        onNextQuestion(Currentquestion)
        Currentquestion++;
    }
    else {
        showResults()
    }
}

function onNextQuestion(questionnumber) {

    const CurrentQuestion = document.getElementById('question-0' + questionnumber)
    const NextQuestion = document.getElementById('question-0' + (questionnumber + 1))

    CurrentQuestion.style.display = "none"
    NextQuestion.style.display = "block"
}

function showResults() {

    const LastQuestion = document.getElementById('question-05')
    LastQuestion.style.display = "none"

    const Results = document.getElementById('results')
    Results.style.display = "block"

    const FinalScore = document.getElementById('final-score')

    FinalScore.innerText = totalScore
}