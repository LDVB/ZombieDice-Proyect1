class Zombie {
    constructor(ctx, PosX, PosY, width) {
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.bites = undefined
        this.lives = 3
        this.init()
    }
    init() {
        
    }

    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 400, 100, 100)
    }

    moves () {

        
    }
    /*
    *****bites () {

        player.lives --

    }
    */

    createBrainImage() {
        const brainImage = new Image()
        brainImage.src = "images/brain.png"
        this.ctx.drawImage(brainImage, -5, 508, 140, 80)
        this.ctx.drawImage(brainImage, 150, 508, 140, 80)
        this.ctx.drawImage(brainImage, 300, 508, 140, 80)
    }

}