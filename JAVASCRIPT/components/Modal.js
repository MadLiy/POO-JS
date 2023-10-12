// import ManageDom from "../components/ManageDom.js";

// export default class Modal extends ManageDom {
//     constructor (modal){
//         super();
//         this.modal = modal;
//         this.dom_elements = this.render();

//     }
//     render() {
//         const section = this.createMarkup("section", "", document.body , [{class : "section"}]);
//         const div = this.createMarkup("div", "Titre modal", section, [{class : "div"}]);
//         const p = this.createMarkup("p", "text dans modal", div , [{class : "p"}]);
//         const button_close = this.createMarkup("button" , "close" , div , [{class : "btn"}]);
//         const button_save = this.createMarkup("button" , "save" , div , [{class : "btn"}]);
//         return {
//             button_close,
//             button_save,
//             p,
//             div,
//             section
//         }
//     }
//     handleEvents(){

//     }
// }

class Modal {
    constructor(modalID){
        this.modal = document.getElementById(modalId);
        this.closeBtn = this.modal.querySelector('.close');

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        this.closeBtn.addEventListener('click', this.close);

    }
    open(){
        this.modal.style.display = "block";

    }
    close(){
        this.modal.style.display = "none";
    }
}
const myModal = new Modal('myModal'); 
const openModalBTn = document.getElementById('')