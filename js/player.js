class Player {
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
        this.playerPos.x -= 2
    }

    moveRight() {
        this.playerPos.x += 2
    }

    // shoot() {
    //     if (this.playerPos.x += 2 this.zombiePos) {

    //      zombie lost lives

    //     } else {

    //         return fail

    //     }


    // }

    //faltan las vidas
}
