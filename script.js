
// bouton hamburger
const boutonMenu = document.querySelector ("#bouton-menu");
const nav = document.querySelector ("nav");

boutonMenu.addEventListener("click", ouvreFermeMenu);

function ouvreFermeMenu(){
nav.classList.toggle("closed");
}