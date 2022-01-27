class Player {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.playerPos = { x: 320, y: 250 }
        this.Size = { w: width * 20, h: width * .50 }
        this.imageInstance = undefined
        this.lives = 5
        this.init()
    }

    init() {
        this.playerImage = new Image()
        this.playerImage.src = "images/survivor.png"


    }

    draw() {
        
        /*
        const survivalPlayer = new Image()
     

        */
       
        this.ctx.drawImage(this.playerImage, this.playerPos.x, this.playerPos.y, 190, 250)
        //this.ctx.drawImage('images/survivor.png', this.playerPos.x, this.playerPos.y, 100, 100)
        //this.ctx.drawImage(this.carImage, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)


    }

    

    moveLeft() {

        this.playerPos.x -= 100
        drawingApocalipsys.canWalk = false
        drawingApocalipsys.hasDoneAction = true
        console.log('un pasito pa la izquierda');

        

    }

    moveRight() {

        this.playerPos.x += 100
        drawingApocalipsys.canWalk = false
        drawingApocalipsys.hasDoneAction = true
        console.log('un pasito pa la dereha');

    }

    

    shoot(){
        
        drawingApocalipsys.zombie.lives--
        drawingApocalipsys.canShoot = false
        drawingApocalipsys.hasDoneAction = true

    }  


}
