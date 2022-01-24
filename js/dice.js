
// Dice Array

const allDice = []

for (let i=0; i< 3; i++) {

    let result = Math.floor(Math.random() * (13 - 1 + 1) + 1)
    let allDiceValue = greenValue + yellowValue + redValue
    return allDiceValue


}

//greenDice
const greenDice = ['pasos', 'pasos', 'pasos', 'mordisco', 'disparo', 'disparo']
for (let i = 0; i < 6; i++) {
  let result = Math.floor(Math.random() * (6 - 1 + 1) + 1)
  let greenValue = greenDice[result]
  allDice.push(greenValue)
}

//yellowDice
const yellowDice = ['pasos', 'pasos', 'mordisco', 'mordisco', 'disparo', 'disparo']
for (let i = 0; i < 4; i++) {
  let result = Math.floor(Math.random() * (4 - 1 + 1) + 1)
  let yellowValue = yellowDice[result]
  allDice.push(yellowValue)
}

//redDice
const redDice = ['mordisco', 'mordisco', 'pasos', 'mordisco', 'mordisco', 'disparo']
for (let i = 0; i < 3; i++) {
  let result = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  let redValue = redDice[result]
  allDice.push(redValue)
}





