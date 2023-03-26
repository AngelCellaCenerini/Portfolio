"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
// Homepage
let raven = undefined;
let uncoverEffect = undefined;
let name1 =`A   N   G      E   L`;
let name2 =`C   E     L   L   A`;
let name3 =`C   E   N   E   R      I   N   I`;

/**
Preload Files
*/
function preload() {

  // Graphics
  raven = loadImage('assets/images/raven1.gif');
}


/**
Description of setup
*/
function setup() {

  // Basic SetUp
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(`Monospace`);
  noStroke();

  // Uncover Effect
  // let x1 = width/20;
  // let y1 = height/6;
  // let x2 = width/20;
  // let y2 = height/6 - 30;
  // let x3 = width/20;
  // let y3 = height/6 + 30;
  // let x4 = 2*width/3 + 100;
  // let y4 = - 8;
  // uncoverEffect = new UncoverEffect(x1, y1, x2, y2, x3, y3, x4, y4);

}

// States
function draw() {

    background(254, 253, 249);

    // Display
    push();
    fill(42);
    // Line
    rect(width/2, 2*height/3, 3*width/5, 1);
    // Text
    // Name
    textAlign(LEFT);
    textSize(20);
    // text(message, width/20, height/6);
    // Typewriter Effect
    // typewriter.update(message, width/20, height/6);
    // typewriter.update(message, width/20, height/6);
    text(name1, width/20, height/6 - 30);
    text(name2, width/20, height/6);
    text(name3, width/20, height/6 + 30);
    // fill(254, 253, 249);
    // rect(width/5, height/6, 500, 200);
    // Display Animation
    image(raven, 2*width/3 + 100, height/2 - 30, 120, 120);
    // uncoverEffect.update();
    // if(uncoverEffect.active){
    // setInterval(uncoverEffect.move, 500);
    // // this.move();
    // }
    // About
    textSize(13);
    text(`
    Computation Arts
    Concordia University`, 2*width/3, 2*height/3 - 50);
    pop();

}
