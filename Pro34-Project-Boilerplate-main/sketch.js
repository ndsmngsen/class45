//matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variables
var database
var gameState;
var form
var player
var playerCount;
var allPlayers=[];

function preload(){



}



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
//gameState
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.end();
  }

}

