
const drawingApocalipsys = {
    appName: 'Zombie Dice',
    author: 'Laura Del Valle && Guillermo Rodriguez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    player: undefined,
    zombie: undefined,
        /*
    keys: {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    },*/

    init(){
        this.setContext()
        this.setSize()
        this.drawBoard()
        this.createAll()
        this.drawAll()
        this.start() 
        this.setEventHandlers()      

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

    start(){
        setInterval (() => {
            
            this.clearScreen()
            this.drawAll() 
            
        },70)
    },

    ///// DRAW AND CLEAR

    createAll() {

        this.createPlayer()
        this.createZombie()
        this.createRollDice()

    },

    drawAll (){

        this.drawBoard()
        this.player.draw()
        this.zombie.draw()
        this.rollDice.diceImages.length === this.rollDice.finalResultNumber && this.rollDice.draw()
        
    },

   clearScreen() {

        this.ctx.clearRect(0, 0, this.gameSize.w , this.gameSize.h)

    },


    ///// DRAW BOARD

    drawBoard() {

        this.drawlowerBoard()
        this.drawUpperBoard()
        this.drawZombieToken()
        this.drawPlayerToken()
        this.drawComandImage()
                           
    },

    drawlowerBoard() {

        this.ctx.fillStyle = '#504949'
        this.ctx.fillRect(0, 500, this.gameSize.w , this.gameSize.h)
       
    },

    drawUpperBoard(){

        this.ctx.fillStyle = '#B8860B'
        this.ctx.fillRect(0, 0, this.gameSize.w , this.gameSize.h - 400)
       
    },

    ///// BOARD ELEMENTS  

    drawZombieToken(){
        const zombieToken = new Image()
        zombieToken.src = "images/tokenZombie-PhotoRoom.png"
        this.ctx.drawImage(zombieToken, 10, 530, 300, 300)
        
    },

    drawPlayerToken(){

        const playerToken = new Image()
        playerToken.src = "images/tokenPlayer-PhotoRoom.png"
        this.ctx.drawImage (playerToken,1090, 560, 360, 360)
        

    },

    drawComandImage(){

        const comandImage = new Image()
        comandImage.src = "images/controles.png"
        this.ctx.drawImage(comandImage, 760, 555, 270, 270)

    },

    ///// DRAW PLAYERS AND VILLAINS

    createRollDice(){

        this.rollDice = new RollDice(this.ctx) 
        
    },

    createPlayer(){

        this.player = new Player (this.ctx, 100, 100, 100)

    },

    createZombie(){

        this.zombie = new Zombie (this.ctx, 100, 100, 100, 100)

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

    },


   ///// MOVEMENT KEYBOARD  

   setEventHandlers() {

        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.player.moveRight(): null
            key === 'ArrowDown' ? this.rollDice.getRollDice(): null
            key === 'ArrowLeft' ? this.player.moveLeft() : null
        })
    }    

    /*
    setEventHandlers() {

        document.addEventListener ('keydown', event => {
    
            switch (event) {

                case this.keys.LEFT:
                    this.player.moveLeft()            
                break;

                case this.keys.RIGHT:
                    this.player.moveRight()
                break;

                case this.keys.DOWN:
                    this.dice.getRollDice()
                break;

            }


          
        });
      
    }
    
    */



}      

    

