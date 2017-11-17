//// Sprites
var eratoaster;
var toast;

//// Eratoaster
var posE; //Oui, j'aurai aussi pu faire un objet de Erathostène mais nique, btw Ici c'est sa position

//// Les trucs utiles
var toasts = [];
var score;

//// Les constantes pour niquer le game
var delta = 3;
var gravity = 1;
var probaToast = 0.03;

//// Préchargement des Sprites
function preload() {
  eratoaster = loadImage("testMiniJeu/assets/eratoaster.png");
  toast = loadImage("testMiniJeu/assets/toast.png");
}


////Tout est dans le nom du truc, exécuté automatiquement dès l'appel du script, avant draw()
function setup() {
  createCanvas(windowWidth, windowHeight);
  posE = windowWidth/2;
  frameRate(60); // de base c'est 60 mais si on est des gros PGM on peut bourrer à 144
  console.log("setUp");
  loop(); //draw() sera répété en boucle, son contraire c'est noLoop(), pour le débug c'est utile
}

//// Un objet Toast, qui l'eut cru
function Toast(posX) {
  this.posX = posX;
  this.posY = windowHeight - eratoaster.height/2;
  this.speed = -30;
  this.number = Math.floor(Math.random() * 100);
  this.afficher = function() {
    image(toast, this.posX, this.posY);
  }
  this.physics = function() {
    this.speed += gravity;
    this.posY += this.speed;
  }
}

//// C'est ici que les choses se passent
function draw() {
  console.log(toasts); //n'oubliez pas, console.log pour le débug, c'est pété
  if (posE < 0 || posE > (windowWidth-eratoaster.width)) {
    delta = -delta;
  }
  posE += delta;
  clear(); //vire tout les éléments graphiques du canvas
  background(42); ///255 shades of Gay, btw c'est juste la couleur du background, /!\ qd on appelle background ça recouvre juste tout dans la couleur indiquée

  if (Math.random() < probaToast) {
    toasts.push(new Toast(posE));
  }

  posE += delta;
  image(eratoaster, posE, windowHeight - 0.8 * eratoaster.height);

  for (i = 0; i < toasts.length; i++) {
    toasts[i].physics();
    toasts[i].afficher();
    if (toasts[i].posY > windowHeight) {
      toasts.splice(i, 1); // c'est comme ça qu'on supprime un élément i d'un array, btw, JavaScript a un ramasse Miette, comme JAva, pas besoin de destructeur
    }
  }
}
