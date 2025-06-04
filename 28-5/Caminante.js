class Caminante{
    constructor(){
        this.x= int(random(margen, width-margen));
        this.y= int(random(margen, height-margen));
        this.t = 100;
        this.distancia = 50;
        this.miColor = color(0, 255, 0);
        //this.vel = 2;
        //this.dir = radians( 30 );
    }
    dibujar(){ // hay q cambiarlo x la img
        fill(this.miColor); 
        strokeWeight(5);
        ellipse(this.x, this.y, this.t, this.t);
    }
    //interacciones
    mayorAmpl(){ //auenta el tamaño 
        this.t += 50;
    }
    menorAmpl(){
        this.t -= 50;
    }
    mayorFrec(){ // mas agudo
        this.x += this.distancia;
        this.y += this.distancia;

        //sistema toroidal
        //         condicion      valor-si       valor-no
        this.x = ( this.x>width ? this.x-width : this.x ); 
        this.x = ( this.x<0 ? this.x+width : this.x ); 
        this.y = ( this.y>height ? this.y-height : this.y );
        this.y = ( this.y<0 ? this.y+height : this.y );
    }
    menorFrec(){ // mas grave
        this.x -= this.distancia;
        this.y -= this.distancia;

        this.x = ( this.x>width ? this.x-width : this.x ); 
        this.x = ( this.x<0 ? this.x+width : this.x ); 
        this.y = ( this.y>height ? this.y-height : this.y );
        this.y = ( this.y<0 ? this.y+height : this.y );
    }
    mayorDurac(){ // aumenta la distancia recorrida
        this.distancia += 10;
    }
    menorDurac(){
        this.distancia -= 10;
    }
    sinInterac(){
        // el fondo y el caminante se dibujan en escala de grises
        this.miColor = color(200);
    }
}