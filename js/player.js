class Player {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.playerPos = { x: 220, y: 250 }
        this.Size = { w: width * 20, h: width * .50 }
        this.imageInstance = undefined
        this.lives = 5
        this.heart = undefined
        this.init()
    }

    init() {
        this.playerImage = new Image()
        this.playerImage.src = "images/survivor.png"
        this.createHeartImage()


    }

    createHeartImage() {


        this.heart = new Image ()
        this.heart.src = 'images/heart.png'

    }

    draw() {
            
        this.ctx.drawImage(this.playerImage, this.playerPos.x, this.playerPos.y, 200, 250)
        switch(this.lives) {
            case 5:       
                 this.ctx.drawImage(this.heart, 990, 500, 90, 90)
            case 4:        
                this.ctx.drawImage(this.heart, 1070, 500, 90, 90)
            case 3:        
                this.ctx.drawImage(this.heart, 1150, 500, 90, 90)
            case 2:        
                this.ctx.drawImage(this.heart, 1230, 500, 90, 90)
            case 1:        
                this.ctx.drawImage(this.heart, 1310, 500, 90, 90)
        }
       
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
