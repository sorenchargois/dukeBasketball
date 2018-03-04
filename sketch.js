let table;
let bubbles_w;
let bubbles_l;

function preload(){
    table = loadTable('dukebball.csv','header');
    fontRegular = loadFont('garamond3/Garamond3LTStd.otf'); 
    img = loadImage("cc_cropped.jpg");
}

function setup(){
    createCanvas(windowWidth, 600);
    loadData();
}

function draw(){
    background(img);

    for(let i=0; i<bubbles_w.length; i++){
        bubbles_w[i].display();
    }
    for(let i=0; i<bubbles_l.length; i++){
        bubbles_l[i].display();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function loadData(){

    bubbles_w = [];
    bubbles_l = [];

    for(let i=0; i<table.getRowCount(); i++){
        let row = table.getRow(i);
        let opponent = row.get("opp");
        let wins = row.get("num_won");
        let losses = row.get("num_lost");

        bubbles_w[i] = new BubbleWins(random(75, width-75), random(75, 500), wins*20, opponent);
        bubbles_l[i] = new BubbleLosses(random(75, width-75), random(75, 500), losses*20, opponent);
    }
}

class BubbleWins{
        constructor(tempX, tempY, tempWon, tempOpp){
        this.x = tempX;
        this.y = tempY;
        this.opp = String(tempOpp);
        this.num_won = Number(tempWon);
    }

    display(){
        fill("#001A57");
        ellipse(this.x, this.y, this.num_won, this.num_won);
        textSize(25);
        textFont(fontRegular);
        fill("white");
        textAlign((CENTER));
        text(this.opp, this.x, this.y);
    }
}

class BubbleLosses{
    constructor(tempX, tempY, tempLost, tempOpp){
        this.x = tempX;
        this.y = tempY;
        this.opp = String(tempOpp);
        this.num_lost = Number(tempLost);
    }

    display(){
        fill(0);
        ellipse(this.x, this.y, this.num_lost, this.num_lost);
        textSize(15);
        textFont('Comic Sans MS');
        fill("white");
        textAlign((CENTER));
        text(this.opp, this.x, this.y);
        fill(0);
        // text(this.opp, this.x, this.y-10);
    }
}