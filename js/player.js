class Player {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.PlayerPos = { x: 250, y: 450 }
        this.PlayerSize = { w: width * 20, h: width * .50 }
        this.PlayerImage = undefined
        this.init()
        drawPlayer()
    }
    init() {
    }
    drawPlayer() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(50, 0, 100, 100)
    }
    moveLeft() {
        this.CarPos.x -= 20
    }
    moveRight() {
        this.CarPos.x += 20
    }
}