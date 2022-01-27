class RollDice {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.greenDice = {
            options: ['pasos', 'pasos', 'pasos', 'mordisco', 'disparo', 'disparo'],
            rollNumber: 6
        }
        this.yellowDice = {
            options: ['pasos', 'pasos', 'mordisco', 'mordisco', 'disparo', 'disparo'],
            rollNumber: 4
        }
        this.redDice = {
            options: ['mordisco', 'mordisco', 'pasos', 'mordisco', 'mordisco', 'disparo'],
            rollNumber: 3
        }
        this.finalResultNumber = 3
        this.totalRollResult = []
        this.finalResult = []
        this.diceImages = []
        this.finalArray = []

    }

    emptyAllResults() {
        this.totalRollResult = []
        this.finalResult = []
        this.diceImages = []
        this.finalArray = []
        drawingApocalipsys.canRoll = true
    }


    getTotalRollResult() {

        this.totalRollResult = []

        for (let i = 0; i < this.greenDice.rollNumber; i++) {
            let result = Math.floor(Math.random() * this.greenDice.options.length)
            let greenValue = this.greenDice.options[result]
            this.totalRollResult.push(greenValue)
        }

        for (let i = 0; i < this.yellowDice.rollNumber; i++) {
            let result = Math.floor(Math.random() * this.yellowDice.options.length)
            let yellowValue = this.yellowDice.options[result]
            this.totalRollResult.push(yellowValue)
        }

        for (let i = 0; i < this.redDice.rollNumber; i++) {
            let result = Math.floor(Math.random() * this.redDice.options.length)
            let redValue = this.redDice.options[result]
            this.totalRollResult.push(redValue)
        }

        return this.totalRollResult

    }


    getFinalResult() {

        this.finalResult = []

        for (let i = 0; i < this.finalResultNumber; i++) {
            let result = Math.floor(Math.random() * this.totalRollResult.length)
            let chosen = this.totalRollResult[result]
            this.finalResult.push(chosen)
        }

        this.finalArray = [
            {action: this.finalResult[0], canExecute: true},
            {action: this.finalResult[1], canExecute: false},
            {action: this.finalResult[2], canExecute: false}
        ]
  
        return this.finalResult

    }

    
    getDiceImage() {

        this.diceImages = []

        this.finalResult.forEach((elm) => {
            const image = new Image()
            switch (elm) {
                case "pasos":
                    image.src = "images/greenDiceWalk.png"  
                    break;
                    
                case "disparo":
                    image.src = "images/yellow-dice.jpg"  
                    break;
                    
                case "mordisco":
                    image.src = "images/redDiceBite.png"
                    break;
                default:
                    console.log('Action not managed')
            }
            this.diceImages.push(image)
        })   

        return this.diceImages
    
    }   

    draw() {
        
        this.ctx.drawImage(this.diceImages[0], 500, 550, 80, 80)
        this.ctx.drawImage(this.diceImages[1], 500, 650, 80, 80)
        this.ctx.drawImage(this.diceImages[2], 500, 750, 80, 80)

    }

    getRollDice() {

        this.getTotalRollResult()
        this.getFinalResult()
        this.getDiceImage()
        this.draw()
        drawingApocalipsys.controlGameActions(this.finalResult)

    }


    
}