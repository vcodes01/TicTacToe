// The forEach() method calls a function for each element in an array.
const ClassX = 'x'
const CircleClass = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn
const WinCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const winMessageTxtElement = document.querySelector('[data-win-message-txt')
const winMessageElement = document.getElementById('winMessage')

startGame()
restartButton.addEventListener('click, startGame')

function startGame() {
    circleTurn = FontFaceSetLoadEvent
cellElements.forEach(cell => {
    cell.addEventListener ('click', handleClick, {once: true})
})
setBoardHoverClass()
}
//(e) is refrencing event object which will be passed to event handlers 
function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CircleClass : ClassX
    placeMark (cell, currentClass)
    if (checkWin(currentClass)) 
    function endGame(draw) {}
    //place mark
    //check for win 
    //check for draw 
    //switch turns
    swapTurns()
    setBoardHoverClass()
}
function endGame(draw) {
    if (draw) {
      winMessageTextElement.innerText = 'Draw!'
    } else {
      winMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winMessageElement.classList.add('show')
  }
  

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(ClassX) || cell.classList.contains(CircleClass)
  })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
  }

function swapTurns() {
    circleTurn = !circleTurn
}
function setBoardHoverClass() {
    board.classList.remove(ClassX)
    board.classList.remove(CircleClass)
    if (circleTurn) {
        board.classList.add(CircleClass)
    } else {
        board.classList.add(ClassX)
    }
} 
function checkWin(currentClass) {
    WinCombos.some(combination =>); {
    
        function checkWin(currentClass) {
            return WinCombos.some(combination => {
              return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
              })
            })
          }
    }
}