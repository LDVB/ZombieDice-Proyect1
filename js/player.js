class Player {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.PlayerPos = { x: 250, y: 450 }
        this.PlayerSize = { w: width * 20, h: width * .50 }
        this.PlayerImage = undefined
        this.init()
        this.drawPlayer()
    }
    init() {



    }
    drawPlayer() {

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
