
const drawingApocalipsys = {
    appName: 'Zombie Dice',
    author: 'Laura Del Valle && Guillermo Rodriguez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    player: undefined,
    zombie: undefined,
    diceRoll: [],
    init(){
        this.setContext()
        this.setSize()
        this.drawBoard()
        this.createPlayer()
        this.createZombie()
        this.drawAll()
        this.diceRoll = new Rolldice(this.ctx)
        this.diceRoll.getDiceImage()
        this.diceRoll.draw()
        

    },
    setContext() {

        this.ctx = document.querySelector('#canvas').getContext('2d')

    },


    setSize(){

        this.gameSize = {

            w: 1425,
            h: 900
            
        }
        
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)

    },

    ///// DRAW BOARD

    drawBoard() {

        this.drawlowerBoard()
        this.drawUpperBoard()
        this.addZombieToken()
        this.addPlayerToken()
                           
    },

    drawlowerBoard() {

        this.ctx.fillStyle = '#504949'
        this.ctx.fillRect(0, 500, this.gameSize.w , this.gameSize.h)
       
    },

    drawUpperBoard(){

        this.ctx.fillStyle = '#B8860B'
        this.ctx.fillRect(0, 0, this.gameSize.w , this.gameSize.h -400)
       

    },

    ///// DRAW BOARD ELEMENTS  

    addZombieToken(){
        const img = new Image()
        img.src = "images/tokenZombie.png"
        this.ctx.drawImage(img, 0, 0)

    },

    addPlayerToken(){



    },

    addComandImage(){


    },

    ///// DRAW PLAYERS AND VILLAINS


    createPlayer(){

        this.player = new Player (this.ctx, 100, 100, 100, 100)

    },

    createZombie(){

        this.zombie = new Zombie (this.ctx, 100, 100, 100, 100)

    },


    ///// DRAW AND CLEAR


    drawAll (){

        this.ctx.clearRect(0, 0,this.gameSize.w, this.gameSize.h) 
        this.drawBoard()
        this.player.draw()
        this.zombie.draw()

   },

   clearScreen() {

        this.ctx.clearRect(0, 0 , this.gameSize.w, this.gameSize.h)

   },


    //// CONTROL GAME    

    controlGameActions(actionsArray) {

     actionsArray.forEach((action) => {
         switch (action) {
             case action === "pasos":
                 this.player
                 //acciones player se mueve/zombie avanza hacia el jugador
                 this.
                 break;

             case diceRoll.includes ("mordisco"):
                 //acciones Player pierde una vida si esta cerca del zombie (distancia de dos pasos)
                 //imagen de dado mostrada en pantalla   
                 break;

             case diceRoll.includes ("disparo"):
                 //acciones zombie pierde una vida si está cerca del player (distancia de tres pasos)
                 //imagen de dado mostrada en pantalla
                 break;
             default:
                console.log('Action not managed')
            }
        })

    }


   ///// MOVEMENT KEYBOARD      


    

}