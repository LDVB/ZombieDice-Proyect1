
const drawingApocalipsys = {
    appName: 'Zombie Dice',
    author: 'Laura Del Valle && Guillermo Rodriguez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    player: undefined,
    zombie: undefined,
    //Rolldice: [], // antes diceRoll

    init(){
        this.setContext()
        this.setSize()
        this.drawBoard()
        this.createPlayer()
        this.createZombie()
        this.rollDice = new RollDice(this.ctx) // antes diceRoll
        //this.rollDice.getDiceImage() // antes diceRoll
        //this.rollDice.draw() // antes diceRoll
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
                           
    },

    drawlowerBoard() {

        this.ctx.fillStyle = '#504949'
        this.ctx.fillRect(0, 500, this.gameSize.w , this.gameSize.h)
       
    },

    drawUpperBoard(){

        this.ctx.fillStyle = '#B8860B'
        this.ctx.fillRect(0, 0, this.gameSize.w , this.gameSize.h - 400)
       
    },

    ///// DRAW BOARD ELEMENTS  

    drawZombieToken(){
        const zombieToken = new Image()
        zombieToken.src = "images/tokenZombie-PhotoRoom.png"
        this.ctx.drawImage(zombieToken, 300, 0, 200, 200)
        
    },

    drawPlayerToken(){

        const playerToken = new Image()
        playerToken.src = "images/tokenPlayer-PhotoRoom.png"
        this.ctx.drawImage (playerToken,0, 300, 200, 200)
        

    },

    drawComandImage(){

        const comandImage = new Image()
        comandImage.src = "images/controles.png"
        comandImage.onload = () => this.ctx.drawImage(comandImage, 0, 0, 200, 200)

    },

    ///// DRAW PLAYERS AND VILLAINS

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
        key === 'ArrowRight' ? this.player.moveRight() : null
        key === 'ArrowUp' ? this.dice.moveLeft() : null
        key === 'ArrowDown' ? this.rollDice.moveRight() : null
        key === 'ArrowLeft' ? this.player.moveLeft() : null
    })

}

    

}