class Zombie {
    constructor(ctx, PosX, PosY, width) {
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.lives = 3
        this.init()
    }
    init() {
        
    }

    draw() {
        const zombiePlayer = new Image()
        zombiePlayer.src = 'images/zombie.png'
        this.ctx.drawImage(zombiePlayer, 0, 283, 200, 225)
    }

    

    bite() {
        drawingApocalipsys.player.lives--
        drawingApocalipsys.hasDoneAction = true
    }

    
        
 
}