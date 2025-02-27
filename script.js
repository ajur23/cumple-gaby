document.addEventListener("DOMContentLoaded", () => {
    createBackgroundElements();
});

function createBackgroundElements() {
    const background = document.createElement("div");
    background.id = "background-elements";
    document.body.appendChild(background);

    // Generar cartas cayendo
    for (let i = 0; i < 15; i++) {
        let letter = document.createElement("img");
        letter.src = "hogwarts-letter.png"; // Imagen de carta
        letter.classList.add("falling-letter");

        letter.style.left = Math.random() * window.innerWidth + "px";
        letter.style.animationDuration = (Math.random() * 3 + 2) + "s";
        letter.style.animationDelay = Math.random() * 3 + "s";

        background.appendChild(letter);
    }

    // Generar búhos volando
    for (let i = 0; i < 5; i++) {
        let owl = document.createElement("img");
        owl.src = "owl.png"; // Imagen de búho
        owl.classList.add("flying-owl");

        owl.style.top = Math.random() * window.innerHeight + "px";
        owl.style.animationDuration = (Math.random() * 5 + 5) + "s";
        owl.style.animationDelay = Math.random() * 3 + "s";

        background.appendChild(owl);
    }
}

// Mostrar la carta con animación suave
function openLetter() {
    const letter = document.getElementById("letter");
    if (letter) {
        letter.classList.add("show");
    }
}

// Cerrar la carta con animación suave
function closeLetter() {
    const letter = document.getElementById("letter");
    if (letter) {
        letter.classList.remove("show");
    }
}
