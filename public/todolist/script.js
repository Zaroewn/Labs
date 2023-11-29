const saisieutilisateur = document.getElementById("taskwritter");
const button = document.getElementById("button");
const list = document.getElementById("tasklist");

button.addEventListener("mouseenter", () => {
    button.setAttribute("style", "box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", "transition: 0.5s");
}) 

button.addEventListener("mouseout", () => {
    button.setAttribute("style", "box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);", "transition: 1s")
})

button.addEventListener("click", () => {
      ajoutertache()
    
})

saisieutilisateur.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        ajoutertache()
    }
})

function ajoutertache() {
    // récupére la valeur du champs de saisie
        let saisie = saisieutilisateur.value;

    // donne une condition (écrire quelque chose)   
    if (saisie === "") {
                alert("You must enter a new task.");
            }

    else{
        //création de la div principale
            let listitem = document.createElement("div");
            listitem.classList.add("listitem");
    

        //création de la div pour le texte
            let divText = document.createElement("div");
            divText.textContent = saisie;

        //création fonction bouton supprimer
            let suppress = document.createElement("img");
            suppress.src ="pictures/trash-bin.png"
            suppress.classList.add("img");

        listitem.appendChild(divText);
        listitem.appendChild(suppress);

        list.appendChild(listitem);
        

            saisieutilisateur.value = "";

        //creation fonction suppression
        suppress.addEventListener("click", () => {

            // creation barriere
            let glass = document.createElement("div")
            glass.classList.add("glass")
            document.body.appendChild(glass)

            //création div cancel checkbox
                let warning = document.createElement("div");

            // importation d'une class CSS à la variable warning
                warning.classList.add("warning");

            //création du bouton Ok
                let okbutton = document.createElement("div");

            // importattion d'une class CSS à la variable okbutton
                okbutton.classList.add("checkbutton");

            //ajout de texte à la constante okbutton
                okbutton.textContent="Delete";

            //hover bouton ok
                okbutton.addEventListener("mouseenter", () => {
                    okbutton.setAttribute("style", "box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", "transition: 0.5s");
                }) 

                okbutton.addEventListener("mouseout", () => {
                    okbutton.setAttribute("style", "box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);", "transition: 1s")
                })

            //ajout écouteur événement bouton ok
                okbutton.addEventListener("click", () => {

                    listitem.remove();
                    okbutton.parentElement.remove();
                    glass.remove()
                })

            //création du bouton annuler
                let cancelButton = document.createElement("div");

            //importation d'une class CSS à la constante cancelButton
                cancelButton.classList.add("checkbutton");

            // Ajout de texte à la constante cancelButton
                cancelButton.textContent ="Cancel";

            //hover bouton cancel
                cancelButton.addEventListener("mouseenter", () => {
                    cancelButton.setAttribute("style", "box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", "transition: 0.5s");
                }) 

                cancelButton.addEventListener("mouseout", () => {
                    cancelButton.setAttribute("style", "box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);", "transition: 1s")
                })


            //ajout écouteur événement bouton annuler
                cancelButton.addEventListener("click",()=>{

                    cancelButton.parentElement.remove();
                    glass.remove()
                    return;

                })
            
            
            warning.appendChild(okbutton)
            warning.appendChild(cancelButton);

            document.body.appendChild(warning)
  
        })
        }
}