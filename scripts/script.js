// JavaScript Document

// Microinteractie - favoriet

var fav = document.querySelector("p6");

fav.addEventListener("click", veranderen);

function veranderen() {
    fav.classList.toggle("favoriet");
}