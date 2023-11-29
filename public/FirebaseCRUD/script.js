import {
    ajouterUnObjet,
    obtenirTouteLaCollection,
    trouverDocumentsAvecValeur,
    mettreAJourUnDocument,
    supprimerUnDocument,
    supprimerTousLesDocumentsDeLaCollection,
    mettreAJourDocumentsAvecValeurParticulière} from "./firebaseConfig.js"

let film = {
    nom: "Saving private Ryan",
    annee: 1994,
    acteurprincipal: "Tom Hanks",
}

ajouterUnObjet(film, "film")

