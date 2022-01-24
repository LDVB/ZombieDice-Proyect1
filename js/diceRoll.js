
// Dice Array

const allDice = []

//greenDice

this.greenDice = {
  options: ['pasos', 'pasos', 'pasos', 'mordisco', 'disparo', 'disparo'],
  rollNumber: 6
}

for (let i = 0; i < this.greenDice.rollNumber; i++) {
  let result = Math.floor(Math.random() * this.greenDice.options.length)
  let greenValue = greenDice[result]
  allDice.push(greenValue)
}

//yellowDice

this.yellowDice = {
  options: ['pasos', 'pasos', 'mordisco', 'mordisco', 'disparo', 'disparo'],
  rollNumber: 4

}

for (let i = 0; i < this.yellowDice.rollNumber; i++) {
  let result = Math.floor(Math.random() * this.yellowDice.options.length)
  let yellowValue = yellowDice[result]
  allDice.push(yellowValue)
}

//redDice

this.redDice = {
  
  options: ['mordisco', 'mordisco', 'pasos', 'mordisco', 'mordisco', 'disparo'],
  rollNumber: 3

}

for (let i = 0; i < this.redDice.rollNumber; i++) {
  let result = Math.floor(Math.random() * this.redDice.options.length)
  let redValue = redDice[result]
  allDice.push(redValue)
}

//allDice

const diceRoll = []

for (let i=0; i<3; i++) {
  let result = Math.floor(Math.random() * (12 + 1))
  let chosen= allDice[result]
  diceRoll.push(chosen)

}

console.log(diceRoll)






