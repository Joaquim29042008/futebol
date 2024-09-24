class Jogador{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=0;
        this.y=0;
        this.vel=5;
        this.dinosaur = new Image ();
        this.dinosaur.src = "assets/dinosaur.png";
        this.dinosaur.width=150;
        this.dinosaur.height=150;
        this.dinosaur.addEventListener('load',()=>{
           this.draw()
        })

    }
    management(){
        if (this.keyboard.esquerda) 
            if (this.x > 0)
                this.x-=this.vel;
        if (this.keyboard.direita) 
            if (this.x < this.c.canvas.width-this.dinosaur.width){
                this.x+=this.vel;
            }
        if (this.keyboard.cima) 
            if (this.y > 0)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.dinosaur.height) 
                this.y+=this.vel;
    }
    draw(){
        this.management();
        this.c.drawImage(this.dinosaur, this.x, this.y, this.dinosaur.width, this.dinosaur.height);
    }
}







/*
management(){
    if (this.keyboard.esquerda) 
        if (this.x > 0)
            this.x-=this.vel;
    if (this.keyboard.direita) 
        if (this.x < this.c.canvas.width-this.dinosaur.width){
            this.x+=this.vel;
        }
    if (this.keyboard.cima) 
        if (this.y > 0)
            this.y-=this.vel;
    if (this.keyboard.baixo)
        if (this.y < this.c.canvas.height-this.dinosaur.height) 
            this.y+=this.vel;
}

*/