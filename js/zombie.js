class Zombie {
    constructor(ctx, PosX, PosY, width) {
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.init()
    }
    init() {
        
    }

    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 400, 100, 100)
    }

    //faltan las vidas

    //faltan 




}