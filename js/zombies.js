class Zombies {
    constructor(ctx, PosX, PosY, width, height) {
        this.ctx = ctx
        this.Zombie.PosX = { x: 250, y: 450 }
        this.Zombie.Size = { w: width * 20, h: width * .50 }
        this.Zombie.Image = undefined
        this.init()
        drawZombies()
    }
    init() {
    }
    drawZombies() {
        this.ctx.fillStyle = 'green' 
        this.ctx.fillRect(50, 0, this.gameSize.w - 55, this.gameSize.h - 75)
    }
}