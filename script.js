const tileDisplay = document.querySelector('.tile-container')
//selected div (tile-container)

const keyboard = document.querySelector('.key-container')
//selected div (key-container)

const messageDisplay = document.querySelector('.message-container')
//selected div (message-container)

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
let isGameOver = false

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

const handleClick = (letter) => {
  console.log('clicked', letter)
  if (letter === '«') {
    deleteLetter ()
    return
  }
  if (letter === 'ENTER') {
    checkRow ()
    return
  }
  addLetter(letter)
}
//when key gets clicked it goes to function addLetter

const addLetter = (letter) => {
  if (currentTile < 5 && currentRow < 6) {
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = letter
    guessRows[currentRow][currentTile] = letter
    tile.setAttribute('data' , letter)
    currentTile++
    console.log('guessRows',guessRows)
  }
}
//add letter to box after click & add letter to box

const deleteLetter = () => {
  if (currentTile > 0) {
    currentTile--
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = ''
    guessRows[currentRow][currentTile] = ''
    tile.setAttribute('data', '')
  }
}
//deltes previous tile

const checkRow = () => {
  const guess = guessRows[currentRow].join('')

  if (currentTile === 5) {
    if(wordle === guess) {
      showMessage('Magnificent!')
      isGameOver = true
      return
    } else {
      if (currentRow >= 5) {
        isGameOver = false
        showMessage('Game Over')
        return
      }
      if (currentRow < 5) {
        currentRow++
        currentTile = 0
      }
    }
  }
}

const showMessage = (message) => {
  const messageElement = document.createElement('p')
  messageElement.textContent = message
  messageDisplay.append(messageElement)
  setTimeout(() => messaageDisplay.removeChild(messageElement), 2000)
}