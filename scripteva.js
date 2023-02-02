


function setup(){ 
  createCanvas(400,400) 
  Game.addCommonBalloon() 
} 
 
function draw(){ 
  background(12, 13, 54) 
  for (const balloon of Game.balloons){ 
    balloon.display() 
    balloon.move(Game.score) 
 
    if(balloon.y <= balloon.size/2 && balloon.color != "black" && balloon.color != "red"){ 
      noLoop() 
      Game.balloons.length = 0 
      background(28, 21, 51) 
      let score = Game.score 
      Game.score = "" 
 
      textSize(54) 
      fill('white') 
      textAlign(0, 0) 
      text("FINISH", 88, 200) 
      textSize(34) 
      text("balance($): " + score, 88, 250 ) 
    } 
  } 
 
  textSize(33) 
  fill("white") 
  text(Game.score, 20, 40) 
 
  if (frameCount % 90 == 0){ 
    Game.addCommonBalloon() 
  } 
 
  if (frameCount % 140 == 0){ 
    Game.addUniqBalloon() 
  } 
 
  if (frameCount % 200 == 0){ 
    Game.addAngryBalloon() 
  } 

  if (frameCount % 280 == 0){ 
    Game.addPresentBalloon() 
    Game.addBadBalloon()
    Game.addNotbadBalloon()
  }
} 
 
function mousePressed(){ 
  if(!isLooping()){ 
    loop() 
    Game.score = 0 
  } 
  Game.checkIfBalloonBurst() 
} 

 
class Game { 
  static balloons = [] 
  static score = 0 
 
 
  static addCommonBalloon(){ 
    let balloon = new CommonBalloon("yellow" , 50 ) 
    this.balloons.push(balloon) 
  } 
 
  static addUniqBalloon(){ 
    let balloon = new UniqBalloon("white", 30 ) 
    this.balloons.push(balloon) 
  } 
 
  static addAngryBalloon(){ 
    let balloon = new AngryBalloon("black", 50 ) 
    this.balloons.push(balloon) 
  } 
 
  static addPresentBalloon(){ 
    let balloon = new PresentBalloon("red", 16 ) 
    this.balloons.push(balloon) 
  } 

  static addBadBalloon(){ 
    let balloon = new BadBalloon("red", 16 ) 
    this.balloons.push(balloon)
  }

  static addNotbadBalloon (){ 
    let balloon = new NotbadBalloon ("red", 16 ) 
    this.balloons.push(balloon) 
  } 

  
 
  static checkIfBalloonBurst(){ 
    this.balloons.forEach((balloon, index) => { 
      let distance = dist(balloon.x, balloon.y, mouseX, mouseY) 
      if (distance <= balloon.size / 2){ 
        balloon.burst(index) 
      } 
    }) 
  } 
} 
 
class CommonBalloon { 
  constructor(color, size){ 
    this.x = random(width) 
    this.y = random(height - 10, height + 50) 
    this.color = color 
    this.size = size 
  } 
 
 
  display(){ 
    fill(this.color) 
    ellipse(this.x, this.y, this.size) 
    line(this.x, this.y + this.size / 2, this.x, this.y + 2 * this.size) 
  } 
 
  move(score){ 
  if (score < 100){ 
   this.y -= 1 
  }else if (score > 100 && score < 200){ 
    this.y -= 1.5 
  }else{ 
   this.y -= 2 
  } 
   
  } 
 
  burst(index){ 
    Game.balloons.splice(index, 1) 
    Game.score += 1 
  } 
} 
 
class UniqBalloon extends CommonBalloon{ 
  constructor(color, size){ 
    super(color, size) 
  } 
  burst(index){ 
    Game.balloons.splice(index, 1) 
    Game.score += 10 
  } 
   
} 
 
 
class AngryBalloon extends CommonBalloon{ 
  constructor(color, size){ 
    super(color, size) 
  } 
  burst(index){ 
    Game.balloons.splice(index, 1) 
    Game.score -= 10 
  } 
   
}

class PresentBalloon extends CommonBalloon{ 
  constructor(color, size){ 
    super(color, size) 
  } 
  burst(index){ 
    Game.balloons.splice(index, 1) 
    Game.score += 50 
  } 
   
}

class BadBalloon extends CommonBalloon{ 
  constructor(color, size){ 
    super(color, size) 
  } 
  burst(index){ 
    Game.balloons.splice(index, 1) 
    Game.score -= 40 
  } 
   
}

class NotbadBalloon extends CommonBalloon{ 
  constructor(color, size){ 
    super(color, size) 
  } 
  burst(index){ 
    Game.balloons.splice(index, 1) 
    Game.score -= 25 
  } 
   
}