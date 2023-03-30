// Animation du logo
const logo = document.getElementById("logo");
const firstBlock = document.getElementById("firstBlock");
const firstBlockImage = document.getElementById("firstBlockImage");
const voiture = document.getElementById("voiture");
const secondBlock = document.getElementById("secondBlock");
const firstBlockText = document.getElementById("firstBlockText");
const voitureCursor = document.getElementById("voitureCursor");
const button = document.getElementById("button");
const rectangle = document.getElementById("rectangle");
const circle = document.getElementById("circle");
const buttonNitro = document.getElementById("buttonNitro");
const nitroVideo = document.getElementById("nitroVideo");
const nitroTexte = document.getElementById("NitroTexte");
const audio = document.getElementById("audio");


// Permet de savoir si l'image est centrée ou non
let isImageCentred = false;

// Permet de savoir si l'animation du second bloc a déjà été lancée
let isAnimationLaunched = false;



// Permet de faire tourner le logo en fonction de la position de la souris
firstBlock.addEventListener("mousemove", (e) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        if(isImageCentred){
            let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
            logo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translate(-50%, 0%)`;
        }
    }
});

// Permet de faire tourner le logo en fonction de la position de la souris
firstBlockImage.addEventListener("mousemove", (e) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        if(!isImageCentred){
                let xAxis = (window.innerWidth * 3/4 - e.pageX) / 15;
                let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
                logo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                //Remet l'effet de transition initial
                logo.style.transition = "none";
        }
    }
});
    

// Permet de remettre l'image normale lorsque la souris quitte le bloc
firstBlockImage.addEventListener("mouseleave", () => {
    // Si l'image est au centre, on ne fait rien
    if(isImageCentred){
        return;
    }
    logo.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Permet une transition fluide
    logo.style.transition = "all 0.5s ease";
    });


// Détection du clic sur le logo
logo.addEventListener("click", () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        // Vérification qu'il n'y a pas déjà une animation en cours
        if(logo.classList.contains("move-animation-reverse") || logo.classList.contains("move-animation")){
            return;
        }
        if(!isImageCentred){
            // On change la valeur de la variable
            isImageCentred = true;
            move();
            logo.style.width = "100%";
            // Permet de placer le logo par dessus le reste
            logo.style.zIndex = "1";
            // Permet de centrer l'image
            logo.style.transform = `translate(-50%, 0%)`;
            texteImage.style.display = "none";
            firstBlockText.style.filter = "blur(3px)";
            // On remonte la page au maximum avec une transition fluide
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            // On bloque le scroll
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                // On rend le cercle visible en augmentant son opacité
                circle.style.display = "flex";
                circle.style.opacity = "0.5";
            }, 1000);
        }
    }
});

circle.addEventListener("click", () => {
    // Vérification qu'il n'y a pas déjà une animation en cours
    if(logo.classList.contains("move-animation-reverse") || logo.classList.contains("move-animation")){
        return;
    }
    if(isImageCentred){
        // Permet de replacer l'image normale
        isImageCentred = false;
        logo.style.width = "80%";
        moveReverse();
        logo.style.zIndex = "0";
        logo.style.transform = `translate(0%, 0%)`;
        texteImage.style.display = "flex";
        circle.style.display = "none";
        // On débloque le scroll
        document.body.style.overflow = "auto";
        firstBlockText.style.filter = "blur(0px)";
    }
});

// Augmente l'opacité du cercle lorsque la souris passe dessus
circle.addEventListener("mouseover", () => {
    circle.style.opacity = "0.8";
});

// Diminue l'opacité du cercle lorsque la souris quitte le cercle
circle.addEventListener("mouseleave", () => {
    circle.style.opacity = "0.5";
});


// Fonction qui implemente l'animation move
function move() {
        logo.classList.add("move-animation");
        setTimeout(() => {
            logo.classList.remove("move-animation");
        }
        , 1000);
}


// Fonction qui implemente l'animation move reverse
function moveReverse() {
        logo.classList.add("move-animation-reverse");
        setTimeout(() => {
            logo.classList.remove("move-animation-reverse");
        }
        , 1000);

}


// Fonction pour l'animation de la voiture
function animateCar() {
    voiture.classList.add("car-animation");
    audio.play();
}

// Fonction pour l'animation du rectangle
function animateRectangle() {
    rectangle.classList.add("rectangle-animation");
}
    

// Lorsque l'on clique sur le bouton Activer la nitro, on lance l'animation de la voiture
button.addEventListener("click", (e) => {
    animateCar();
    buttonNitro.style.display = "none";
    // Place l'écran au milieu du second bloc
    window.scrollTo({
        top: secondBlock.offsetTop,
        behavior: 'smooth'
    });
    // Attends 0.7s avant de lancer l'animation du rectangle
    setTimeout(() => {
        animateRectangle();
    }, 700);
    setTimeout(() => {
        rectangle.style.display = "none";
        voiture.style.display = "none";
    }, 3100);
    // Ne réactualise pas la page
    e.preventDefault();
    // Fais apparaitre les éléments en décalé de maniere smooth
    setTimeout(() => {
        nitroVideo.style.opacity = "1";
        nitroVideo.style.transition = "all 1s ease";
    }, 2000);
    setTimeout(() => {
        nitroTexte.style.opacity = "1";
        nitroTexte.style.transition = "all 1s ease";
    }, 2500);
});





