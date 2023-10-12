const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "ajouter un paragraphe";
const section = document.createElement("section");
document.body.appendChild(section);

button.onclick = function(){
    let p = document.createElement("p");
    p.innerHTML = "Lorem Ipsum";
    section.appendChild(p);
}


/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object[]} attributes  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
// function createMarkup(markupname, text, parent, attributes = []) {
//     const markup = document.createElement(markupname);
//     markup.textContent = text;
//     parent.appendChild(markup);
//     for (const attribute of attributes) {
//         for (let key in attribute) {
//             markup.setAttribute(key, attribute[key]);
//         }
//     }
//     return markup;
// }
// const header = createMarkup("header", "" , document.body);
// const nav = createMarkup("nav", "" , header);
// const section = createMarkup("section","", document.body);
// const p = createMarkup("p","" , section);

// const button1 = createMarkup("button", "Ajouter un paragraphe", nav);
// const consoleClick = function (event, p){
//     p.textContent = "lorem ipsum";
// }

// button1.onclick = (event) => { consoleClick(event, p)};


