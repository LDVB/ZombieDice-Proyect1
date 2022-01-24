class Zombies {
    constructor(ctx, PosX, PosY, width) {
        this.ctx = ctx
        this.ZombiePos = { x: 250, y: 450 }
        this.ZombieSize = { w: width * 20, h: width * .50 }
        this.ZombieImage = undefined
        this.init()
        this.drawZombies()
    }
    init() {
        
    }

    drawZombies() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 400, 100, 100)
    }

    




}