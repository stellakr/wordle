const tileDisplay = document.querySelector('.tile-container')
//selected div (tile-container)

const keyboard = document.querySelector('.key-container')
//selected div (key-container)

const wordle = 'SUPER'

const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'ENTER',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '«',
]

let currentRow = 0
let currentTile = 0

const guessRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
]

guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement('div')
  rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
  guessRow.forEach((_guess, guessIndex) => {
      const tileElement = document.createElement('div')
      tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
      tileElement.classList.add('tile')
      rowElement.append(tileElement)
  })
  tileDisplay.append(rowElement)
})
//creates columns and rows (individual box per row)

keys.forEach(key => {
  const buttonElement = document.createElement('button')
  buttonElement.textContent = key
  buttonElement.setAttribute('id', key)
  buttonElement.addEventListener('click', () => handleClick(key))
  keyboard.append(buttonElement)
})
//button for each key (button with keys as text content)

const handleClick = (key) => {
  console.log('clicked', key)
  addLetter(key)
}
//when key gets clicked it goes to function addLetter

const addLetter = (letter) => {
  const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
  tile.textContent = letter
  currentTile++
}
//add letter to box after click