// création du formulaire js : d'abord la balise form puis les balises label et
// input et enfin la gestion de la soumission (le bouton de send) 
// gestion de l'évènement oninput sur les deux input 
// calcul
// affichage dans l'input concerné

// création balise form
const form = document.createElement("form");
document.body.appendChild(form);

// création balise label et input euros
const label_eur = document.createElement("label");
form.appendChild(label_eur);
label_eur.textContent = "euros : ";
const input_eur = document.createElement("input");
form.appendChild(input_eur);

// création label et input suisse
const label_sui = document.createElement("label");
form.appendChild(label_sui);
label_sui.textContent = " francs suisse : ";
const input_sui = document.createElement("input");
form.appendChild(input_sui);

// création bouton send (pas besoin de bouton)
// const button_send = document.createElement("button");
// form.appendChild(button_send);
// button_send.textContent = " Convertir ";

// gestion de l'évènement oninput 
input_eur.oninput = () => {
    input_sui.value = input_eur.value * 1.06;
}

input_sui.oninput = () => {
    input_eur.value = input_sui.value / 1.06;
}

