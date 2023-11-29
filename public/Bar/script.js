const closed = document.getElementById("closed");
const open = document.getElementById("open");
const itemlist = document.getElementById("itemcontainer");
const okbutton = document.getElementById("okbutton");
const nomproduit = document.getElementById("produit");
const valeurprix = document.getElementById("prix");
const qte = document.getElementById("quantite");
const validlist = document.getElementById("validitems");
const validContainer = document.getElementById("validcontainer");
const grandTotalContainer = document.getElementById("grandtotal");



let calculGainTotal = 0;






okbutton.addEventListener("click", () => {

    if(nomproduit.value ==="" || valeurprix.value ==="") {
        alert("Veuillez rentrer des valeurs valides");
    }

    else{

    let saisieproduit = nomproduit.value;
    let saisieprix = valeurprix.value;

    //création div principale
    let itemrow = document.createElement("div");
    itemrow.classList.add("items");

    //création div text
    let divText = document.createElement("div");
    divText.textContent = nomproduit.value;

    //création div prix
    let divPrix = document.createElement("div");
    divPrix.textContent = valeurprix.value;

    //création bouton supprimer
    let supress = document.createElement("img");
    supress.src ="../pictures/trash-bin.png";
    supress.classList.add("trash");

    itemrow.appendChild(divText);
    itemrow.appendChild(divPrix);
    itemrow.appendChild(supress);

    itemlist.appendChild(itemrow);

    nomproduit.value ="";
    valeurprix.value="";

    //création écouteur événement suprrimer
    supress.addEventListener("click", (e) => {

        itemrow.remove();
        e.stopPropagation();
    })







    

    //création écouteur événement ajout ligne paiement
    itemrow.addEventListener("click", () => {


        //création div principale
        let validrow = document.createElement("div");
        validrow.classList.add("items");

        //création div text 
        let validText = document.createElement("div");
        validText.textContent = divText.textContent;

        //création div prix
        let validPrix = document.createElement("div");
        validPrix.textContent = divPrix.textContent;

        // calcul grand total
        calculGainTotal += parseFloat(validPrix.textContent);

        //création bouton supprimer
        let validSupress = document.createElement("img");
        validSupress.src = "../pictures/trash-bin.png";
        validSupress.classList.add("trash");

        //création div total
        grandTotalContainer.setAttribute("style", "margin: 10px", "background-color: red");
        grandTotalContainer.textContent = "Total : " + calculGainTotal.toString();

        validrow.appendChild(validText);
        validrow.appendChild(validPrix);
        validrow.appendChild(validSupress);

        validlist.appendChild(validrow);

        //création écouteur événement suprrimer
    validSupress.addEventListener("click", () => {

        calculGainTotal -= parseFloat(validSupress.parentElement.childNodes[1].innerHTML);
        grandTotalContainer.textContent = "Total : " + calculGainTotal;
        validrow.remove();

    })

    })
}
})

