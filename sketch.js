var canvas;
var backgroundImage;

var gameState=0;
var playerCount = 0;
var database;
var form;
var game;
var player;



function setup(){

  createCanvas(500,500);

  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
}
  

function draw(){
  background("white");
  
    
  
}

