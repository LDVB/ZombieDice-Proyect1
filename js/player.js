class Player {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.playerPos = { x: 300, y: 400 }
        this.Size = { w: width * 20, h: width * .50 }
        this.Image = undefined
        this.init()
    }

    init() {



    }
    
    draw() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, 100, 100)

    }

    moveLeft() {

        this.playerPos.x -= 20

    }

    moveRight() {

        this.playerPos.x += 20
        
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
