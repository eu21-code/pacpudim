var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["38071b7c-ce01-4ecf-8957-cabe568b2d21","a23eae7b-d9a0-4d16-96c4-6400768c4b92"],"propsByKey":{"38071b7c-ce01-4ecf-8957-cabe568b2d21":{"sourceSize":{"x":128,"y":128},"frameSize":{"x":128,"y":128},"frameCount":1,"frameDelay":4,"name":"pudim","sourceUrl":"assets/v3/animations/NCq67KXHpWX2gT86K7qrU226kOL1GMM7u5asitRqj4E/38071b7c-ce01-4ecf-8957-cabe568b2d21.png","size":7053,"version":"JagXoqpRYCMmxyYoYu87fW4Mi.3w8aEx","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/NCq67KXHpWX2gT86K7qrU226kOL1GMM7u5asitRqj4E/38071b7c-ce01-4ecf-8957-cabe568b2d21.png"},"a23eae7b-d9a0-4d16-96c4-6400768c4b92":{"sourceSize":{"x":128,"y":128},"frameSize":{"x":128,"y":128},"frameCount":1,"frameDelay":4,"name":"colher","sourceUrl":"assets/v3/animations/NCq67KXHpWX2gT86K7qrU226kOL1GMM7u5asitRqj4E/a23eae7b-d9a0-4d16-96c4-6400768c4b92.png","size":5564,"version":"40AuZnjJNddbXTi6L39qscwPzE1DnHQ9","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/NCq67KXHpWX2gT86K7qrU226kOL1GMM7u5asitRqj4E/a23eae7b-d9a0-4d16-96c4-6400768c4b92.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pudim = createSprite(200,325,10,10);
pudim.setAnimation("pudim");
pudim.scale = 0.3;

var colher = createSprite(200,70,10,10);
colher.setAnimation("colher");
colher.scale = 0.3;

var paredes = createGroup();
var parede1 = createSprite(50,180,100,5);
var parede2 = createSprite(50,220,100,5);
var parede3 = createSprite(350,180,100,5);
var parede4 = createSprite(350,220,100,5);
var parede5 = createSprite(100,117,5,130);
var parede6 = createSprite(100,283,5,130);
var parede7 = createSprite(300,117,5,130);
var parede8 = createSprite(300,283,5,130);
var parede9 = createSprite(200,50,200,5);
var parede10 = createSprite(200,350,200,5);
var parede11 = createSprite(200,200,5,100);
var parede12 = createSprite(200,200,100,5);
var parede13 = createSprite(200,100,100,5);
var parede14 = createSprite(200,300,100,5);

paredes.add(parede1);
paredes.add(parede2);
paredes.add(parede3);
paredes.add(parede4);
paredes.add(parede5);
paredes.add(parede6);
paredes.add(parede7);
paredes.add(parede8);
paredes.add(parede9);
paredes.add(parede10);
paredes.add(parede11);
paredes.add(parede12);
paredes.add(parede13);
paredes.add(parede14);

var tp1 = createSprite(1,200,1,100);
var tp2 = createSprite(399,200,1,100);
tp1.shapeColor = "black";
tp2.shapeColor = "black";

var estado="inicio";

var pontos=0;

function draw() {
  background("black");
  
  pudim.bounce(paredes);
  colher.bounce(paredes);

  pudim.setCollider("circle",0,0,50);
  colher.setCollider("circle",0, 0, 50);
  // colher.debug = true;
  // pudim.debug = true;
  
  
  fill("white");
  text("github.com/eu21-code",150,15);
  
  if(pudim.isTouching(tp1)){
    pudim.x = 380;
    pudim.y = 200;
  }
  if(pudim.isTouching(tp2)){
    pudim.x = 20;
    pudim.y = 200;
  }
  if(colher.isTouching(tp1)){
    colher.x = 380;
    colher.y = 200;
  }
  if(colher.isTouching(tp2)){
    colher.x = 20;
    colher.y = 200;
  }
  if(estado==="inicio"){
    fill("white");
    text("Press 'Space' to play", 155, 270);
    text("Press 'p' to pause", 165, 290);
    
    if(keyDown("space")){
      estado="jogar";
    }
  }
  
  if(estado==="jogar"){
    move();
  }
  if(estado==="jogar" || estado==="parado"){
    fill("white");
    text("Score: "+pontos, 15,25);
  }
  if(keyDown("p")){
    estado="parado";
  }
  if(estado==="parado"){
    fill("white");
    text("Paused game", 170,370);
    text("Press 't' to display", 165, 380);
    if(keyDown("t")){
      estado="jogar";
    }
  }
  if(colher.isTouching(pudim)){
    pontos++;
    colher.x=200;
    colher.y=70;
    pudim.x=200;
    pudim.y=325;
  }
  drawSprites();
}

function move(){
  //pudim
  if(keyDown("up")){
    pudim.y -=4;
  }
  if(keyDown("down")){
    pudim.y +=4;
  }
  if(keyDown("left")){
    pudim.x -=4;
  }
  if(keyDown("right")){
    pudim.x +=4;
  }
  //colher
  if(keyDown("w")){
    colher.y -=4;
  }
  if(keyDown("s")){
    colher.y +=4;
  }
  if(keyDown("a")){
    colher.x -=4;
  }
  if(keyDown("d")){
    colher.x +=4;
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
