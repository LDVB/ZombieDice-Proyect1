
const drawingApocalipsys = {
    appName: 'Zombie Dice',
    author: 'Laura Del Valle && Guillermo Rodriguez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    player: undefined,
    zombie: undefined,
    init(){
        this.setContext()
        this.setSize()
        this.drawBoard()
        this.createPlayer()
        this.createZombie()
        this.drawAll()
        this.allDiceResult()

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
                           
    },

    drawlowerBoard() {

        this.ctx.fillStyle = '#B8860B'
        this.ctx.fillRect(0, 500, this.gameSize.w , this.gameSize.h)
       
    },

    drawUpperBoard(){

        this.ctx.fillStyle = '#A9A9A9'
        this.ctx.fillRect(0, 0, this.gameSize.w , this.gameSize.h -400)
       

    },

    ///// DRAW BOARD ELEMENTS  

    addZombieToken(){
        



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


    //// ALL DICE MOVEMENTS    




   ///// MOVEMENT KEYBOARD      


    

}