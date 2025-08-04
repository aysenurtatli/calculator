const display = document.getElementById("output")

function appendToDisplay(input){
    display.textContent += input;
}

function clearDisplay(){
    display.textContent = ""
}

function deleteLast(){
    display.textContent = display.textContent.slice(0, -1);
}

function calculate(){
    try{
         display.textContent =  Function(`"use strict";return (${document.getElementById('output').textContent})`)();
    } catch (err){
        display.textContent = "Error";
    }
}