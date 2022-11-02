const ticContainer =  document.querySelector('.container')
const blocks = document.querySelectorAll('.block')
const result = document.querySelector('.result')
const restart = document.querySelector('button')
const STATUS = document.querySelector('.status')
const X_CLASS = 'X'
const O_CLASS = 'O'
let circleTurn 
let currentClass 
// All winning combinations
const winningCombination = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]
const drawArray = Array.from(blocks)
// trigger event once when any block is clicked
blocks.forEach(block => {
  block.addEventListener('click',() => {
    // toggle the currnet class 
   currentClass = circleTurn ? O_CLASS : X_CLASS
  //  show the current class inside the cliked blocks 
    block.classList.add(currentClass)
    // toggle from X to O and viseversa
    circleTurn = !circleTurn
    console.log(currentClass)
    // check for winner 
    if(checkForWinner(currentClass)){
      STATUS.innerText = `${currentClass} is the winner !`
      result.classList.add('show')
    }
    // check for draw
    else if (isDraw()){
      STATUS.innerText = "DRAW!"
      result.classList.add('show')
    }
    

  },{once:true})
})
// refresh the page 
restart.addEventListener('click',() => {
  location.reload()
})
// Is Draw when all blocks containes wetheir X or O class 
const isDraw = () =>   { 
  return drawArray.every (block => {
    return block.classList.contains(O_CLASS) || block.classList.contains(X_CLASS)
  })
}
const checkForWinner = (currentClass) => {
  // return True for first met combination 
  return winningCombination.some(combination => {
    // return true if all indices  of the currnet combination have same current class
    return combination.every(index => {
  
      return blocks[index].classList.contains(currentClass)
    })
  })
} 