"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// Page Layout
let layout = undefined;
// Slideshow
let slideshow = undefined;
// Animation Effect
let animation = undefined;

// Images
let adam1 = undefined;
let adam2 = undefined;
let adam3 = undefined;
let adam4 = undefined;
let adam5 = undefined;
let adam6 = undefined;
let adam7 = undefined;
let adam8 = undefined;
let adam9 = undefined;
let adam10 = undefined;
let dq1 = undefined;
let dq2 = undefined;
let dq3 = undefined;
let dq4 = undefined;

/**
Description of preload
*/
function preload() {

  // Upload Images
  adam1 = loadImage('assets/images/Photography/adam1.png');
  adam2 = loadImage('assets/images/Photography/adam2.png');
  adam3 = loadImage('assets/images/Photography/adam9.png');
  adam4 = loadImage('assets/images/Photography/adam4.png');
  adam5 = loadImage('assets/images/Photography/adam5.png');
  adam6 = loadImage('assets/images/Photography/adam6.png');
  adam7 = loadImage('assets/images/Photography/adam7.png');
  adam8 = loadImage('assets/images/Photography/adam8.png');
  adam9 = loadImage('assets/images/Photography/adam3.png');
  adam10 = loadImage('assets/images/Photography/adam10.png');
  dq1 = loadImage('assets/images/Photography/dq1.png');
  dq2 = loadImage('assets/images/Photography/dq2.png');
  dq3 = loadImage('assets/images/Photography/dq3.png');
  dq4 = loadImage('assets/images/Photography/dq4.png');

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // General Settings
  noStroke();
  textFont(`Courier`);
  // textStyle(BOLD);
  rectMode(CENTER);
  imageMode(CENTER);

  // Layout
  let x1 = width/4 - 50;
  let y1 = height/2 - 50;
  let x2 = 3*width/4 - 80;
  let y2 = height/2 - 50;
  let x3 = width/4 - 50;
  let y3 = height/2 - 50;
  let scrollX = 4*width/5 + 40;
  let scrollX2 = 4*width/5 - 25;
  let scrollY = 44*height/50 + 10;
  layout = new Layout(x1, y1, x2, y2, x3, y3, scrollX, scrollX2, scrollY);

  // Slideshow(s)
  let x = width/2;
  let y = height/2;
  let iconX = width/12;
  let iconY = -20;
  slideshow = new Slideshow(x, y, iconX, iconY);

  // Animation Effect
  x1 = width/4;
  y1 = height/3;
  x2 = 3*width/4;
  y2 = height/3;
  let animationWidth = width/2;
  let animationHeight = height;
  animation = new Animation(x1, y1, x2, y2, animationWidth, animationHeight);
}


/**
Description of draw()
*/
function draw() {

  // Background Color
  background(254, 253, 249);

  // Display Page
  layout.update(slideshow, animation);

  // Slideshow
  slideshow.update(layout);

  // Manage Navigation Menu
  let navigationMenu = document.getElementById('navigation-menu');
  let linkedInIcon = document.getElementById('linkedIn');
  if(slideshow.active){
    navigationMenu.style.visibility = `hidden`;
    linkedInIcon.style.visibility = `hidden`;
    // Hide Other Buttons
    document.getElementById("button1").style.visibility = `hidden`;
    document.getElementById("button2").style.visibility = `hidden`;
    document.getElementById("button3").style.visibility = `hidden`;

  }
  else{
    navigationMenu.style.visibility = `visible`;
    linkedInIcon.style.visibility = `visible`;
  }

  // Animation Effect
  // animation.update();

}

// p5 Events
function mousePressed() {
  // Slideshow
  slideshow.update(layout);
  slide();

}

function slide(){
    // Slide along Images
    let d = dist(slideshow.arrowX, slideshow.arrowY, mouseX, mouseY);
    if ( d < slideshow.iconSize/2 && mouseIsPressed === true){
      slideshow.currentIndex ++;
      if (slideshow.currentIndex >= slideshow.images.length){
        slideshow.currentIndex = 0;
      }
  }
}
