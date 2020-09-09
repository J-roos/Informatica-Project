/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

var x = 0;
var y = 0;

function draw() {
clear();
y = y + 1;
x = x +1;

if (x > 1280){
    x = x - 1;
}

if (x < 0){
    x = x + 1;
}

if (y > 720){
    y = y - 1;
}

if (y < 0){
    y = y + 1;
}


  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x,y,80,80);
}