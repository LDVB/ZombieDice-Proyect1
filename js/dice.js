class Rolldice {
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
        

    }


    //// DICE DIFICULTY

    getTotalRollResult() {

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

    //// DICE TOTAL RESULT


    getFinalResult() {

        this.getTotalRollResult()

        for (let i = 0; i < this.finalResultNumber; i++) {
            let result = Math.floor(Math.random() * this.totalRollResult.length)
            let chosen = this.totalRollResult[result]
            this.finalResult.push(chosen)
        }

        return this.finalResult

    }

    //// DICE IMAGES
    
    getDiceImage() {

        this.getFinalResult() 

        console.log('RESULTAOOOO:', this.finalResult)
        this.finalResult.forEach((elm) => {
            const image = new Image()
            switch (elm) {
                case "pasos":
                    image.src = "images/LogoZDice.png"  //TODO
                    break;
                    
                case "disparo":
                    image.src = "images/LogoZDice.png"  //TODO
                    break;
                    
                case "mordisco":
                    image.src = "images/caca.png" //TODO
                    break;
                default:
                    console.log('Action not managed')
            }
            this.diceImages.push(image)
        })   

        console.log('IMAGESSS:', this.diceImages)

        return this.diceImages

        // this.ctx.drawImage(this.diceImages[0], 50, 50, 50, 50)
    
    }   

    draw() {
        console.log('holoooo',this.diceImages)
        this.ctx.drawImage(this.diceImages[0], 600, 550, 80, 80)
        this.ctx.drawImage(this.diceImages[1], 600, 650, 80, 80)
        this.ctx.drawImage(this.diceImages[2], 600, 750, 80, 80)
    }


    drawAllGameCenter(){

        this.getFinalResult() 
        this.drawDicePosition()


    }

    

}