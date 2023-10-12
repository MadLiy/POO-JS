class Slideshow {
  constructor(nb_images, width, height, speed) {
    // Initialisez les propriétés
    this.nb_images = nb_images;
    this.images = [];
    this.width = width;
    this.height = height;
    this.speed = speed;
    
    // Créez le diaporama
    this.createSlideshow();
  }

  // Méthode pour créer une image
  createImage() {
    const img = document.createElement("img");
    img.setAttribute("src", `https://picsum.photos/${this.width}/${this.height}?id=${Math.random() * 1000}`);
    return img;
  }

  // Méthode pour remplir le tableau d'images
  feedSlideshow() {
    for (let i = 0; i < this.nb_images; i++) {
      const image = this.createImage();
      this.images.push(image);
    }
  }

  // Méthode pour créer le diaporama
  createSlideshow() {
    this.feedSlideshow();
    
    // Créez un conteneur pour le diaporama
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");
    
    // Ajoutez chaque image au conteneur
    this.images.forEach((image, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.appendChild(image);
      slideshowContainer.appendChild(slide);
    });
    
    // Ajoutez le conteneur du diaporama à la page
    document.body.appendChild(slideshowContainer);
    
    // Démarrez le diaporama
    this.startSlideshow();
  }

  // Méthode pour démarrer le diaporama
  startSlideshow() {
    let currentIndex = 0;

    const slideshowInterval = setInterval(() => {
      // Masquez toutes les images
      this.images.forEach(image => (image.style.display = "none"));
      
      // Affichez l'image actuelle
      this.images[currentIndex].style.display = "block";

      // Passez à l'image suivante
      currentIndex = (currentIndex + 1) % this.images.length;
    }, this.speed);
  }
}

// Créez une instance de Slideshow avec les paramètres spécifiés
const mySlideshow = new Slideshow(3, 400, 300, 2000); // Exemple : 3 images, largeur 400px, hauteur 300px, vitesse de 2 secondes
