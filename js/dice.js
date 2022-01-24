class dice {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.Pos = { x: 250, y: 450 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.init()
    }
    init() {



    }
    draw() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(300, 400, 100, 100)

    }
    moveLeft() {

        this.PlayerPos.x -= 50
    }
    moveRight() {
        
        this.PlayerPos.x += 20
    }
}
