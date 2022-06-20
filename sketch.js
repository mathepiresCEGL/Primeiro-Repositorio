
//variáveis da bolinha
let xBolinha = 300; //posição x da bolinha
let yBolinha = 200; //posição y da bolinha
let dBolinha = 13;  //diametro da bolinha

let raio = dBolinha / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;

let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let velocidadeYMinha;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140,0));

    //meu placar
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);

    //placar adversário
    fill(color(255,140,0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);

}

function draw() {
  background(0); //cor do fundo 
  incluiPlacar();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  //movimentaMinhaRaqueteAUTO();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  movimentaRaqueteOponente();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, dBolinha); // criar bolinha
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
    }
  
  if(yBolinha + raio > height || yBolinha - raio < 0) {
     velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaqueteOponente() {
    if (xBolinha - raio > xRaqueteOponente - raqueteComprimento && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente) {
        velocidadeXBolinha *= -1;
    }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente;
}

function movimentaMinhaRaqueteAUTO() {
    velocidadeYMinha = yBolinha - yRaquete - raqueteComprimento / 2 - 30;
    yRaquete += velocidadeYMinha;
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosOponente += 1;
    }
}