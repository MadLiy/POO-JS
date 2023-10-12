// import Modal from "../JAVASCRIPT/components/Modal.js";
// new Modal();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// le button "afficher la modal box" ouvre le dialogue 
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// le button "Fermer" ferme le dialog 
closeButton.addEventListener("click", () => {
    dialog.close();
    
});
