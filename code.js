var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","89b8ea57-c96c-4e9b-b419-27fae30e5b91","16afe2f7-189e-4857-9402-69c2a19a87fd","917bd736-3adf-48ec-9182-2545a73dd457","521da8a2-c4bc-48f9-9e4c-b7e58fcd3857","4ecf0aad-5fd6-4430-b1df-82554766222c"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":3,"version":"65AMYgve7k07ivI16BTC6qFLDDK10p71","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"banana0","sourceUrl":null,"frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"klKW85EeWHwpYsysqzC1xkh4yDyiAsTq","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone0","sourceUrl":null,"frameSize":{"x":312,"y":312},"frameCount":1,"looping":true,"frameDelay":12,"version":"mjMpe9IPsZn8CMJROJIZrDGi76jgEF3l","loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":312},"rootRelativePath":"assets/33841f90-7a53-4346-b956-e51d1961959b.png"},"89b8ea57-c96c-4e9b-b419-27fae30e5b91":{"name":"Stone1","sourceUrl":null,"frameSize":{"x":312,"y":312},"frameCount":1,"looping":true,"frameDelay":12,"version":"bhwCEv81UHJ5Pjl0WnYhRZOcQUAg7C6u","loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":312},"rootRelativePath":"assets/89b8ea57-c96c-4e9b-b419-27fae30e5b91.png"},"16afe2f7-189e-4857-9402-69c2a19a87fd":{"name":"sunshine_showers_1","sourceUrl":null,"frameSize":{"x":1000,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"I0AmK.OLn4f53d7j26plp3NWKUEtLkSX","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":600},"rootRelativePath":"assets/16afe2f7-189e-4857-9402-69c2a19a87fd.png"},"917bd736-3adf-48ec-9182-2545a73dd457":{"name":"restart","sourceUrl":"assets/v3/animations/Jqn8IeTR-LNVPa9BM7avFmltpr_lmlA5y54vi13MAzk/917bd736-3adf-48ec-9182-2545a73dd457.png","frameSize":{"x":155,"y":157},"frameCount":1,"looping":true,"frameDelay":4,"version":"BVNHbXjIOly3kg98QWF0HgXcIy2Zu4tT","loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":157},"rootRelativePath":"assets/v3/animations/Jqn8IeTR-LNVPa9BM7avFmltpr_lmlA5y54vi13MAzk/917bd736-3adf-48ec-9182-2545a73dd457.png"},"521da8a2-c4bc-48f9-9e4c-b7e58fcd3857":{"name":"over","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"vvQDb69EqUv8Hi9EeSRttwz10fm8VNwN","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/521da8a2-c4bc-48f9-9e4c-b7e58fcd3857.png"},"4ecf0aad-5fd6-4430-b1df-82554766222c":{"name":"monkey1","sourceUrl":null,"frameSize":{"x":580,"y":684},"frameCount":1,"looping":true,"frameDelay":12,"version":"OB8TgdV0F72.Pd8kochzQJKki.wfrNW_","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":684},"rootRelativePath":"assets/4ecf0aad-5fd6-4430-b1df-82554766222c.png"}}};
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

var score = 0;

var bg = createSprite(200,199);
bg.setAnimation("sunshine_showers_1");
bg.scale = 1;
bg.velocityX = -3;

var monkey = createSprite(40,360);
monkey.setAnimation("monkey");
monkey.scale = 0.1;
monkey.x = 50;

var invisible = createSprite(200,398,300,30);
invisible.visible = false;

var restart = createSprite(200,300);
restart.setAnimation("restart");
restart.scale = 0.45;
restart.visible = false;

var gameOver = createSprite(200,160);
gameOver.setAnimation("over");
gameOver.scale = 0.45;
gameOver.visible = false;


var obstaclesGroup = createGroup();
var bananasGroup = createGroup();

var PLAY = 1;
var END = 0;
var gameState = PLAY;

textSize(18);
textFont("Georgia");
textStyle(BOLD);



function draw() {
  background("white");
  text("Score: "+ score, 180, 20);
   monkey.collide(invisible);
    if (gameState===PLAY)
    {
      bg.velocityX = -(4+3*score/100);
      if(bg.x <20)
      {
     bg.x = bg.width/2;
      }
      score = score + Math.round(World.frameRate/60);
      if (keyWentDown("space") && monkey.y >=309)
      { 
        monkey.velocityY = -14;
         playSound("assets/category_accent/puzzle_game_accent_a_01.mp3",false);
      }  
      monkey.velocityY = monkey.velocityY + 0.8;
      if (score >0 && score % 100 ===0)
      {
      playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3",false);
      }
      
      spawnobstacles();
      spawnbanana();
      if (bananasGroup.isTouching(monkey))
      {
      playSound("assets/category_collect/clicky_crunch.mp3",false);
      bananasGroup.destroyEach();
      }
      
      if (obstaclesGroup.isTouching(monkey))
      {
         gameState = END;
         bg.velocityX = 0;
         monkey.velocityY = 0;
         obstaclesGroup.setVelocityXEach(0);
         bananasGroup.setVelocityXEach(0);
         obstaclesGroup.setLifetimeEach(-1);
         bananasGroup.setLifetimeEach(-1);
         monkey.setAnimation("monkey1");
      }
       restart.visible = false; 
       gameOver.visible = false;
  }else if (gameState===END)
  {
    restart.visible = true;
    gameOver.visible = true;
  }
  if (mousePressedOver(restart))
  {
    reset();
  }
  
  drawSprites();
  
}
function spawnobstacles() {
  if (World.frameCount % 60 === 0){
  var obstacle = createSprite(400,350);
  obstacle.velocityX = -(7+4*score/100);
  obstacle.scale = 0.27;
  obstacle.setCollider("rectangle",0,0,25,obstacle.height);
  var r = randomNumber(0,1);
  obstacle.setAnimation("Stone" + r);
  obstacle.lifetime = 70;
  obstaclesGroup.add(obstacle);
  }
}
function spawnbanana() { 
  if (World.frameCount % 60 === 0){
  var banana = createSprite(400);
  banana.velocityX = -(5+3*score/100);
  banana.scale = 0.05;
  banana.y = randomNumber(250,280);
  banana.lifetime = 70;
  banana.setAnimation("banana0");
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  bananasGroup.add(banana);  
  }
}
function reset() {
  gameState = PLAY;
  restart.visible = false;
  gameOver.visible = false;
  obstaclesGroup.destroyEach();
  bananasGroup.destroyEach();
  monkey.setAnimation("monkey");
  score = 0;
   if(bg.x <20)
   {
     bg.x = bg.width/2;
   }
   bg.velocityX = -3;
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
