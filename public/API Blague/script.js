//URL de l'api : https://bridge.buddyweb.fr/api/blagues/blagues
const getBlagues = async () => {
    const response = await fetch('https://bridge.buddyweb.fr/api/blagues/blagues');
    const data = await response.json();
    return [...data];
}

let indexBlague = 0;

const updateBlague = async (indexBlague) => {
    //on récupère la liste de blagues dans un tableau
    const tableau = await getBlagues();
    console.log(tableau);

    const blagueTexte = document.getElementById("blagueTexte");
    blagueTexte.textContent = tableau[indexBlague].blagues;
}

updateBlague(indexBlague);