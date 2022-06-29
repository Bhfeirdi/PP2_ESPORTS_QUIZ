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


//------------------------------------- QUESTIONS ARRAY----------------------------------------------------//

const questions = [
    {
        question: 'What is the name of the only team in DOTA 2 history to win "The Aegis of Champions", the highest honor in competitive Dota?',
        answers: [
          { text: 'Team OG', correct: true },
          { text: 'Gaming Galdiators', correct: false }
        ]
      },

    {
        question: 'Who is the highest earning E-Sports player in the world to date?',
        answers: [
          { text: 'Johan Sundstein', correct: true },
          { text: 'Atrioc', correct: false }
        ]
    },

    {
        question: 'Which "Super Smash Bros." title, released on the Gamecube, long-held the title as being the most lucrative competitive title in the series?',
        answers: [
          { text: 'Super Smash Bros. Brawl', correct: false },
          { text: 'Super Smash Bros. Melee', correct: true }
        ]
      },

    {
        question: 'Which world famous streamer and competitive player is most famous for "Fortnite"',
        answers: [
          { text: 'Ludwig', correct: false },
          { text: 'Ninja', correct: true }
        ]
    },

    {
        question: 'In what genre of game would you compete at "The Evolution Championship Series"?',
        answers: [
          { text: 'Fighting Games', correct: true },
          { text: 'Real Time Strategy', correct: false }
        ]
      },

    {
        question: 'Dennis Fong took the win at the 1997 "Red Annihilation" Quake tournament, one of the wolrds first major E-Sports events. What was his gamer tag?',
        answers: [
          { text: 'Thresh', correct: true },
          { text: 'Entropy', correct: false }
        ]
    },

    {
        question: 'Mang0, the well known Super Smash Bros Melee player, began his career playing as Jigglypuff, but who became his main cgaracter since 2011?',
        answers: [
          { text: 'Luigi', correct: false },
          { text: 'Fox', correct: true }
        ]
      },

    {
        question: 'What is the name of what is considered the first ever E-Sports competition held on the 19th of October 1972 at Stanford University?',
        answers: [
          { text: 'Pong Champs!', correct: false },
          { text: 'Spacewar!', correct: true }
        ]
    },

    {
        question: 'Which CS:GO team used the controversial "Olofboost" strategy at DreamHack Winter 2014',
        answers: [
          { text: 'Fnatic', correct: true },
          { text: 'Cloud9', correct: false }
        ]
      },

    {
        question: 'At The International 2, which DOTA 2 team got a team wipe with stolen spells and quick reactions in a sequence commonly refered to by fasns as "The Play"?',
        answers: [
          { text: 'NAVI', correct: true },
          { text: 'Invictus Gaming', correct: false }
        ]
    },

    {
        question: 'As of February 2022, how many Champions are there in League of Legends?',
        answers: [
          { text: '133', correct: false },
          { text: '159', correct: true }
        ]
      },

    {
        question: 'Rocket League is a remake of what other game?',
        answers: [
          { text: 'Rocket Ball', correct: false },
          { text: 'Supersonic Acrobatic Rocket-Powered Battle-Cars', correct: true }
        ]
    },

    {
        question: 'In which of these two games does PSG E-Sports NOT compete? ',
        answers: [
          { text: 'Tekken', correct: true },
          { text: 'RAINBOW 6', correct: false }
        ]
      },

    {
        question: 'What term is used to refer to a game mechanic being made less effective?',
        answers: [
          { text: 'Nerf', correct: true },
          { text: 'Downgrade', correct: false }
        ]
    },

    {
        question: 'What was the name of the original open world battle royale map in "Call of Duty Modern Warfare"?',
        answers: [
          { text: 'Rebirth Island', correct: false },
          { text: 'Verdansk', correct: true }
        ]
      },

    {
        question: 'What date was "PlayerUnknowns Battlegrounds" officiallt released?',
        answers: [
          { text: '12th November 2020', correct: false },
          { text: '20th December 2017', correct: true }
        ]
    },

    {
        question: 'In the "Halo" franchise, what does the announcer say if a player gets 10 enemy kills without dying?',
        answers: [
          { text: 'Killing Frenzy', correct: true },
          { text: 'Rampage', correct: false }
        ]
      },

    {
        question: 'In a famous "Starcraft" moment, who abandoned the game for fear of loss to an enemy illusion army?, ',
        answers: [
          { text: 'IDRA', correct: true },
          { text: 'HUK', correct: false }
        ]
    },

    {
        question: 'In the semifinal match held at Evolution Championship Series 2004 between Daigo Umehara and Justin Wong, what name was given to the sequence of perfect parries to win the round?',
        answers: [
          { text: 'Daigo Clutch', correct: false },
          { text: 'Moment #37', correct: true }
        ]
      },

    {
        question: 'Originally planned for Stokholm, where was the 10th International DOTA 2 tournament moved to last minute due to COVID-19?',
        answers: [
          { text: 'Chicago', correct: false },
          { text: 'Bucharest', correct: true }
        ]
    },

    {
        question: '',
        answers: [
          { text: '', correct: true },
          { text: '', correct: false }
        ]
      },

    {
        question: '',
        answers: [
          { text: '', correct: true },
          { text: '', correct: false }
        ]
    },

    {
        question: '',
        answers: [
          { text: '', correct: false },
          { text: '', correct: true }
        ]
      },

    {
        question: '',
        answers: [
          { text: '', correct: false },
          { text: '', correct: true }
        ]
    },

    {
        question: '',
        answers: [
          { text: '', correct: true },
          { text: '', correct: false }
        ]
      },

    {
        question: '',
        answers: [
          { text: '', correct: true },
          { text: '', correct: false }
        ]
    },

    {
        question: '',
        answers: [
          { text: '', correct: false },
          { text: '', correct: true }
        ]
      },

    {
        question: '',
        answers: [
          { text: '', correct: false },
          { text: '', correct: true }
        ]
    },

    {
        question: '',
        answers: [
          { text: '', correct: true },
          { text: '', correct: false }
        ]
      },

    {
        question: '',
        answers: [
          { text: '', correct: true },
          { text: '', correct: false }
        ]
    },
]