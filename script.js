"use strict";
window.addEventListener("load", start());

function start() {
    console.log("Hello World!");
    }

const scene = {
    title: "The Beginning",
    text: <p>You find yourself at the entrance of a mysterious cave.</p>,
    choices: [
        "Enter the cave without hesitation", 
        "Explore the area around the cave entrance before entering"
    ]
}