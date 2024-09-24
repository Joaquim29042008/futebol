class Placar {
    constructor(c) {
        this.c = c;
        this.direita = this.c.canvas.width;;
        this.margem = 10;
        this.margemDireita = 50;
        this.largura = 100;
       
    }

        draw(){
            this.c.font = "70px arial";
            this.c.fillStyle = "blue";
            this.c.fillText(pontoJogador1, this.margem, this.margem + 70, this.largura);
            this.c.fillText(pontoJogador2, this.direita-this.margemDireita, this.margem + 70, this.largura);

        }

    }