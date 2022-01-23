
const drawingApocalipsys = {

    appName: 'Zombie Dice',
    author: 'Laura Del Valle && Guillermo Rodriguez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,

    init(){

        this.setContext()
        this.setSize()
        this.createPlayer ()
        this.createZombies ()
        this.drawAll()
    

    },

    setContext(){

        this.ctx = document.querySelector('#canvas').getContext('2d')
        
    },

    setSize(){

        this.gameSize = {

            w: 1425,
            h: 900
            
        }
        
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)

    },

    createPlayer(){

        this.player.push (

            new Player (this.ctx, 0, 70, 100, 5, this.gameSize)

        )


    },

    createZombies(){

        this.zombies.push (

            new Zombie (this.ctx, 0, 170, 100, 5, this.gameSize)

        )

    },


    drawAll (){

        setInterval(() => {

          this.clearScreen()
          this.player.forEach(element => {

              element.move()
              element.draw()
                
           });

           this.zombies.forEach(element => {

               element.draw()
                
           });
    
       }, 40);

   },

   clearScreen() {

        this.ctx.clearRect(0, 0 , this.gameSize.w, this.gameSize.h)

   }


 ///faltan los comando de movimiento

}