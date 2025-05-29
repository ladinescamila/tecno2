class Caminante{
    constructor(){
        this.x= int(random(margen, width-margen));
        this.y= int(random(margen, height-margen));
        this.t = 150;
        this.miColor = color(0, 255, 0);
        //this.vel = 2;
        //this.dir = radians( 30 );
    }
    dibujar(){
        fill(this.miColor); 
        strokeWeight(5);
        ellipse(this.x, this.y, this.t, this.t);
    }
    mayorAmpl(){
        this.t += 50;
    }
    menorAmpl(){
        this.t -= 50;
    }
    mayorFrec(){ // mas agudo
        this.x += 50;
    }
    menorFrec(){ // mas grave
        this.x -= 50;
    }
    sinInterac(){
        // el fondo y el caminante se dibujan en escala de grises
        this.miColor = color(200);
    }
}