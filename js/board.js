
const drawingApocalipsys = {
    appName: 'Zombie Dice',
    author: 'Laura Del Valle && Guillermo Rodriguez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    player: undefined,
    zombie: undefined,
    canRoll: true,
    canWalk: false,
    canShoot: false,
    hasDoneAction: false,
    


    init(){
        this.setContext()
        this.setSize()
        this.drawBoard()
        this.createAll()
        this.drawAll()
        this.start() 
        this.setEventHandlers()    
        // this.generateActions()  
        // this.controlGameActions()

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
            this.controlGameActions(this.rollDice.finalArray)
            
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

        this.ctx.fillStyle = '#ccc1c1'
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
        this.ctx.drawImage(zombieToken, 10, 580, 300, 300)
        
    },

    drawPlayerToken(){

        const playerToken = new Image()
        playerToken.src = "images/tokenPlayer-PhotoRoom.png"
        this.ctx.drawImage (playerToken,1090, 540, 360, 360)
        

    },

    drawComandImage(){

        const comandImage = new Image()
        comandImage.src = "images/controles.png"
        this.ctx.drawImage(comandImage, 600, 535, 350, 350)

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


    setEventHandlers() {

        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' && this.canWalk ? this.player.moveRight(): null
            key === 'ArrowDown' && this.canRoll ? this.rollDice.getRollDice(): null 
            key === 'ArrowLeft' && this.canWalk ? this.player.moveLeft() : null
            key === 'ArrowUp'&& this.canShoot ? this.player.moveShoot() : null
        })
    
    },  

    goToNextAction(arr, elm, idx) {
        elm.canExecute = false
        this.hasDoneAction = false
        if (idx < arr.length - 1) arr[idx + 1].canExecute = true
        else if (idx === arr.length - 1) this.rollDice.emptyAllResults()
    },
    
    controlGameActions(arr) {
        
        if (arr.length === 3) {

            this.canRoll = false
    
            arr.forEach((elm, idx) => {
                if (elm.canExecute) {

                    switch (elm.action) {
                        case "pasos":
                            if (!this.hasDoneAction) {
                                this.canWalk = true
                                console.log('pasooos sinhaber hecho la accioón');
                            }
                            else {
                                console.log('pasooos con la accioón hcha');
                                this.goToNextAction(arr, elm, idx)
                            }
                            break;
        
                        case "mordisco":
                            console.log('mordiscoooo')
                            // if (posPlayer - posZombie < 2 ) {
                            // this.player.live -- 
                            // } else {
                            //     return null
                            // }
                            break;
        
                        case "disparo":
                            console.log('disparooooo')

                            // this.canShoot = true
                            // if (posPlayer - posZombie < 3 ) {
                            // this.Zombie.live -- 
                            // } else {
                            //     return null
                            // }   
                            break;
        
                        default:
                            console.log('Action not managed')
                    }
        
                    // this.canWalk = false
                    // this.canShoot = false

                }
            })
    
            // this.canRoll = true

        }
        
    },


   ///// MOVEMENT KEYBOARD  

   /*
   setEventHandlers() {

      

          document.addEventListener('keydown', event => {
                const { key } = event
                key === 'ArrowRight' ? this.controlGameActions('right'): null
                key === 'ArrowDown' && this.canRoll ? this.rollDice.getRollDice(): null /// no puedes darle dos veces seguidas
                key === 'ArrowLeft'  ? this.controlGameActions('left') : null
                key === 'ArrowUp' ? this.controlGameActions('shoot') : null
        })
    


    }    
    */
}