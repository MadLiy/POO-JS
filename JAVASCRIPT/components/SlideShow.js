// Créer une classe Slideshow : 1pt
// le constructeur de cette classe attend 4 paramètres : 1pt
// nb_images (le nombre d'images que va gérer le slideshow,
// width (la largeur du slideshow),
// height (la hauteur du slideshow),
// speed (la vitesse de changement d'images en millisecondes).
// Dans le constructeur, vous initialisez 5 propriétés : 1pt
// nb_images (number)
// images (array)
// width (number)
// height (number)
// speed (number)
// puis, toujours dans le constructeur, vous faites appel à trois méthodes
// feedSlideshow (// remplissage du tableau d'images "images"): 2pts

// Pour créer des images (élément du DOM "img"), vous utiliserez la méthode suivante :

// createImage() {   // création d'une image    
//    const img = document.createElement("img");  
//    img.setAttribute("src",`https://picsum.photos/${this.width}/${this.height}?id=${Math.random()*1000}`);    
//    return img; 
// }
// render (rendu du slideshow) : 2pts

// animateSs(animation du slideshow) : 2pts



// Trouver un moyen (css/js) pour que les images défilent ou apparaissent les unes après les autres : 3pts

// Trouver un moyen pour que le clic sur une image stoppe/démarre le diaporama : 3pts

export default class SlideShow {
    constructor(nb_images, width, height, speed){ // constructeur avec les 4 paramètres
        // 5 propriétés initier 
        this.nb_images = nb_images;
        this.images = [];
        this.width = width;
        this.height = height;
        this.speed = speed;


        this.createImage();
        this.feedSlideshow();

        // this.dom_elements = this.render();
        // this.animateSs();
        
    }
    
    createImage() {   // création d'une image    
        const img = document.createElement("img");  
        img.setAttribute("src",`https://picsum.photos/${this.width}/${this.height}?id=${Math.random()*1000}`);
        return img;
    }
    
    feedSlideshow() { // remplir le tab abec les images
        for (let i = 0; i < this.nb_images; i++){
            this.images[i] = this.createImage();
        }

        console.log(this.images);
    }
    // render(){
    //     this.feedSlideshow();

    //     // container pour le Carousel 
    //     const SsContainer = document.createElement("div");
    //     // class css   SsContainer.classList.add("slideshow-container");

    //     //add image au conteneur 
    //     this.image.forEach((image , index) => {
    //         const slide = document.createElement("div");
    //         // mettre classe pour le CSS 
    //         slide.appendChild(image);
    //         SsContainer.appendChild(slide);
    //     });

    //     //add container du diappo a la page
    //     document.body.appendChild(SsContainer);

    //     startSlideShow()
    // }

    // startSlideShow(){
    //     let index = 0;
    //     const SsInterval = setInterval(() => {
    //         this.image.forEach(image => (image.style.display = "none"));

    //         this.image[index].style.display = "block";

    //         index = (index + 1)% this.image.length;
    //     }, this.speed)
        
    // }

    // animateSs(){
    //     let Index = 0;
    //     const SsInterval = setInterval(() => {
    //         this.image.forEach(image => (image.style.display = "none"));

    //         this.image[Index].style.display = "block";

    //         Index = (Index + 1)% this.image.length;
    //     })
    // }
     
}


