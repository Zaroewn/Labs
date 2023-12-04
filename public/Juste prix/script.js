// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.getElementById("formulaire");
let instructions = document.getElementById("instructions")
let coups = 0;
let nombreChoisi;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
console.log(nombreAleatoire)

// Etape 3.5 - Créer la fonction vérifier
function verifier(nombre) {

    let instruction = document.createElement("div");

    if (nombre < nombreAleatoire) {
        instruction.textContent = "#" + coups + " (" + nombreChoisi + ") C'est plus !";
        instruction.classList.add("plus", "instruction")
        instructions.prepend(instruction);
    }

    else if (nombre > nombreAleatoire) {
        instruction.textContent = "#" + coups + " (" + nombreChoisi + ") C'est moins !";
        instruction.classList.add("moins", "instruction")
        instructions.prepend(instruction);
    }

    else {
        instruction.textContent = "#" + coups + " (" + nombreChoisi + "), Félicitations ! Vous avez trouvé le Juste Prix.";
        instruction.classList.add("fini", "instruction")
        instructions.prepend(instruction);
        input.disabled = true;
    }
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre (keyup nous permets de regarder à la lettre près, ce que l'utilisateur rentre dans l'input).
input.addEventListener("keyup", () => {
    if (isNaN(input.value)) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
    e.preventDefault(); // Annule l'événement par défaut

    if ((isNaN(input.value)) || (input.value == "")) {
        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
});

