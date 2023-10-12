/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object[]} attributes  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
function createMarkup(markupname, text, parent, attributes = []) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (const attribute of attributes) {
    for (let key in attribute) {
      markup.setAttribute(key, attribute[key]);
    }
  }
  return markup;
}
const header = createMarkup("header", "", document.body);
const h1 = createMarkup("h1", "Titre de niveau 1", header);
const nav = createMarkup("nav", "", h1);
// const button1 = createMarkup("button","Item 1", nav);
// const button2 = createMarkup("button","Item 2", nav);
// const button3 = createMarkup("button","Item 3", nav);
// const button4 = createMarkup("button","Item 4", nav);
// document.querySelector("button").style.color = "red";

// button1.style.color = "red";

const buttons = ["Item 1", "Item 2", "Item 3", "Item 4"];

for (let i = 0; i < buttons.length; i++) {
  const button = createMarkup("button", buttons[i], nav);
  // si l'index est le dernier (0) alors je fais appel à la propriété style.color
}
document.querySelector("button").style.color = "red";

