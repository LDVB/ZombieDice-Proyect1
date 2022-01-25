class Rolldice {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.init()
    }
    init() {



    }
    draw() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(300, 400, 100, 100)

    }
    moveLeft() {

        this.PlayerPos.x -= 50
    }
    moveRight() {
        
        this.PlayerPos.x += 20
    }
}


/* class Rolldice {

    constructor (ctx, posX, posY, width){
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.init()

    }

    init() {



    }

    this.greenDice{
        //aqui falta por declarar algo
        this.greenDice = {
        options: ['pasos', 'pasos', 'pasos', 'mordisco', 'disparo', 'disparo'],
        rollNumber: 6
        }

        for (let i = 0; i < this.greenDice.rollNumber; i++) {
            let result = Math.floor(Math.random() * this.greenDice.options.length)
            let greenValue = greenDice[result]
            allDice.push(greenValue)
        }

        

    },

    this.yellowDice{


        this.yellowDice = {
        options: ['pasos', 'pasos', 'mordisco', 'mordisco', 'disparo', 'disparo'],
        rollNumber: 4

        }

        for (let i = 0; i < this.yellowDice.rollNumber; i++) {
            let result = Math.floor(Math.random() * this.yellowDice.options.length)
            let yellowValue = yellowDice[result]
            allDice.push(yellowValue)
        }
    },


    this.redDice {

        this.redDice = {
  
         options: ['mordisco', 'mordisco', 'pasos', 'mordisco', 'mordisco', 'disparo'],
         rollNumber: 3

        }

        for (let i = 0; i < this.redDice.rollNumber; i++) {
            let result = Math.floor(Math.random() * this.redDice.options.length)
            let redValue = redDice[result]
            allDice.push(redValue)
        }
    }

    this.allDice{

        const diceRoll = []

        for (let i=0; i<3; i++) {
            let result = Math.floor(Math.random() * (12 + 1))
            let chosen= allDice[result]
            diceRoll.push(chosen)

        }

    }


    this.roll{
            //opcion 1
       diceRoll.forEach((elm){

            if (diceRoll.includes ("pasos")){

                //acciones player se mueve/zombie avanza hacia el jugador
                //imagen de dado mostrada en pantalla

            } if else (diceRoll.includes ("mordisco")) {

                    //acciones Player pierde una vida si esta cerca del zombie (distancia de dos pasos)
                    //imagen de dado mostrada en pantalla  

            } if else (diceRoll.includes ("disparo")) {
                    //acciones zombie pierde una vida si está cerca del player (distancia de tres pasos)
                    //imagen de dado mostrada en pantalla


            }

        //opcion 2

        diceRoll.forEach((elm){
            switch (diceRoll) {
                case  diceRoll.includes ("pasos"):
                    //acciones player se mueve/zombie avanza hacia el jugador
                    //imagen de dado mostrada en pantalla
                [break;]

                case diceRoll.includes ("mordisco"):
                    //acciones Player pierde una vida si esta cerca del zombie (distancia de dos pasos)
                    //imagen de dado mostrada en pantalla   
                [break;]

                case diceRoll.includes ("disparo"):
                    //acciones zombie pierde una vida si está cerca del player (distancia de tres pasos)
                    //imagen de dado mostrada en pantalla
                [break;]

            }



       })

    }

}
*/