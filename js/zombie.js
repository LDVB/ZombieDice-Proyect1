class Zombie {
    constructor(ctx, PosX, PosY, width) {
        this.ctx = ctx
        this.zombiePos = { x: 0, y: 225 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.lives = 3
        this.brain = undefined
        this.init()
    }
    
    init() {
        this.zombieImage = new Image()
        this.zombieImage.src = "images/zombie.png"
        this.createBrainImage()
       

    }

    createBrainImage() {


        this.brain = new Image ()
        this.brain.src = 'images/brain.png'

    }

    draw() {
        switch(this.lives){
            case 3:
                        this.ctx.drawImage(this.brain, 0, 508, 140, 80)

            case 2:
                        this.ctx.drawImage(this.brain, 150, 508, 140, 80)

            case 1:
                        this.ctx.drawImage(this.brain, 300, 508, 140, 80)

        }
            
        this.ctx.drawImage(this.zombieImage, this.zombiePos.x, this.zombiePos.y, 150, 283)
            
    }


    

    bite() {
        drawingApocalipsys.player.lives--
        drawingApocalipsys.hasDoneAction = true
    }

 
}