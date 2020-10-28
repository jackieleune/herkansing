// JavaScript Document

// Microinteractie - favoriet


var deDerdeP

deDerdeP = document.querySelector("section:nth-of-type(1) p");

deDerdeP.addEventListener("click", veranderMezelf);

function veranderMezelf() {
  deDerdeP.classList.add("anders");

}

