
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
    playerPos: undefined,
    ZombiePos: undefined,
    


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
        this.drawBrainImage()
        this.drawHeartImage()

                           
    },

    drawlowerBoard() {

        this.ctx.fillStyle = '#98949a'
        this.ctx.fillRect(0, 500, this.gameSize.w , this.gameSize.h)
       
    },

    drawUpperBoard(){

        const fondoApocalipsis = new Image()
        fondoApocalipsis.src = 'images/fondo-apocalipsis.jpg'
        this.ctx.drawImage(fondoApocalipsis, 0, 0, 1500, 500)
       
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

    drawBrainImage() {
        const brainImage = new Image()
        brainImage.src = 'images/brain.png'
        this.ctx.drawImage(brainImage, -5, 508, 140, 80)
        this.ctx.drawImage(brainImage, 150, 508, 140, 80)
        this.ctx.drawImage(brainImage, 300, 508, 140, 80)
    },


    drawHeartImage() {
            const heartImage = new Image()
            heartImage.src = 'images/heart.png'
            this.ctx.drawImage(heartImage, 990, 500, 90, 90)
            this.ctx.drawImage(heartImage, 1070, 500, 90, 90)
            this.ctx.drawImage(heartImage, 1150, 500, 90, 90)
            this.ctx.drawImage(heartImage, 1240, 500, 90, 90)
            this.ctx.drawImage(heartImage, 1330, 500, 90, 90)
    },
   
    //// CONTROL GAME    


    setEventHandlers() {

        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' && this.canWalk ? this.player.moveRight(): null
            key === 'ArrowDown' && this.canRoll ? this.rollDice.getRollDice(): null 
            key === 'ArrowLeft' && this.canWalk ? this.player.moveLeft() : null
            key === 'ArrowUp'&& this.canShoot ? this.player.shoot() : null
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
                                
                            } else {
                                this.goToNextAction(arr, elm, idx)
                            }
                            break;
                        case "mordisco":
                            if (!this.hasDoneAction) {
                                this.zombie.bite()
                                console.log ("player lost lives")
                            } else {
                                this.goToNextAction(arr, elm, idx)
                            }
                            break;
                        case "disparo":
                            if (!this.hasDoneAction) {
                                this.canShoot = true
                                console.log ("zombie lost lives")
                            } else {
                                this.goToNextAction(arr, elm, idx)
                            }
                            break; 
                        default:
                            console.log('Action not managed')
                    }

                }
            })
        }
        
    },


}