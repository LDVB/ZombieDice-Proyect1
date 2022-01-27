class Player {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.playerPos = { x: 200, y: 400 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.lives = 5
        this.init()
    }

    init() {



    }

    draw() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, 100, 100)

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

    moveShoot(){

        this.zombie.lives --

    }
    
    lives (){

        this.lives -= this.zombie.bites

    }

    createHeartImage() {
        const heartImage = new Image()
        heartImage.src = "images/heart.png"
        this.ctx.drawImage(heartImage, 990, 500, 90, 90)
        this.ctx.drawImage(heartImage, 1070, 500, 90, 90)
        this.ctx.drawImage(heartImage, 1150, 500, 90, 90)
        this.ctx.drawImage(heartImage, 1240, 500, 90, 90)
        this.ctx.drawImage(heartImage, 1330, 500, 90, 90)
    }



}
