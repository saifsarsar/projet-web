const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Quel est l'attribut à inclure dans la balise BODY pour changer la couleur des liens?",
    answers: [
      { text: 'LINK', correct: true },
      { text: 'VLINK', correct: false },
      { text: 'ALINK', correct: false },
      { text: 'TEXT', correct: false }
    ]
  },
  {
    question: "Que veut dire le mot HTML?",
    answers: [
      { text: 'Home Tool Markup Language', correct: false },
      { text: 'Home Tool Markup Language', correct: false },
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Hyper Text machine Language', correct: false}
   
    ]
  },
  {
    question: "La partie HEAD d'un fichier HTML contient",
    answers: [
      { text: "Toutes les balises d'un fichier HTML", correct: false },
      { text: 'Les balises du BODY', correct: false },
      { text: 'La balise TITLE', correct: true},
      { text: 'Aucune de ces réponses', correct: false }
    ]
  },
  {
    question: 'Dans quelle paire de balises HTML place-t-on le texte qui doit apparaître dans la barre colorée bleue des navigateurs?',
    answers: [
      { text: '<HTML> et </HTML>', correct: false },
      { text: '<BODY> et </BODY>', correct: true},
      { text: '<HEAD> et </HEAD>', correct: false },
      { text: '<TITLE> et </TITLE>', correct: false }
    ]
  },
  {
    question: "Quelle balise permet de souligner du texte?",
    answers: [
      { text: "<B>", correct: false },
      { text: '<S>', correct: false },
      { text: '<I>', correct: true},
      { text: '<U>', correct: false }
    ]
  }

]