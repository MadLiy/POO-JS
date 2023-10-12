import ManageDom from "./../components/ManageDom.js";
export default class Task extends ManageDom {
  constructor(label) {
    super();
    this.label = label;
    this.dom_elements = this.render();
    // appel de la méthode qui gère les événement
    this.manageEvents();
  }
  render() {
    const section = this.createMarkup("section", "", document.body, [{ class: "task" },]);

    const h2 = this.createMarkup("h2", this.label, section);

    // Création du bouton valider

    const button_validate = this.createMarkup("button", "Valider", section);

    // Création du bouton supprimer

    const button_delete = this.createMarkup("button", "Supprimer", section);

    // Renvoie de la référence vers les deux boutons

    return { section, h2, button_delete, button_validate };
  }
  manageEvents() {
    // Gestion du click sur supprimer
    this.dom_elements.button_delete.onclick = (event) => {
      this.dom_elements.section.remove();
    };

    // Gestion du click sur valider

    this.dom_elements.button_validate.onclick = (event) => {
        this.dom_elements.h2.classList.toggle("strike");
        if (this.dom_elements.button_validate.innerText === "Valider"){
            this.dom_elements.button_validate.innerText = "Invalider";
        }else {
            this.dom_elements.button_validate.innerText = "Valider"
        }
    };
  }
}
