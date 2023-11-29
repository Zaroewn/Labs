const textleft = document.getElementById("textleft");
const valueleft= document.getElementById("valueleft");
const textright = document.getElementById("textright");
const valueright = document.getElementById("valueright");
const addbuttonleft = document.getElementById("addbuttonleft");
const addbuttonright = document.getElementById("addbuttonright");
const listvalueleft = document.getElementById("listleft");
const listvalueright = document.getElementById("listright");
const gaintotal = document.getElementById("gaintotal");
const spendingtotal = document.getElementById("spendingtotal");
const gtotal = document.getElementById("grandtotal");

//Ecouter événement button ADD Droite et Gauche
//variables globlale

let calculGainTotal =0;
let calculDepenseTotal =0;
let calculGrandTotal =0;

addbuttonleft.addEventListener("click", () => {
    let saisieleft = textleft.value;
    let saisievalueleft = valueleft.value;

    
    if(textleft.value === "" || valueleft.value === "") {
        alert("You must enter 2 values.");
        return;
    }

    else {

        //Calcul gain total (addition des valeurs rentrées)
        calculGainTotal += parseFloat(valueleft.value);
        gaintotal.textContent = calculGainTotal.toString();

        //calcul grand total
        calculGrandTotal = (calculGainTotal - calculDepenseTotal);
        gtotal.textContent = calculGrandTotal.toString();

        //création div principale
        let listitemleft = document.createElement("div");
        listitemleft.classList.add("listitemleft");

        //création div texte
        let itemlefttext = document.createElement("div");
        itemlefttext.textContent = saisieleft;

        //création div valeur
        let numberleft = document.createElement("div");
        numberleft.textContent = saisievalueleft;

        //création image poubelle
        let supressleft = document.createElement("img");
        supressleft.src = "../pictures/trash-bin.png";
        supressleft.classList.add("trash");

        //appel des éléménents enfants
        listitemleft.appendChild(itemlefttext);
        listitemleft.appendChild(numberleft);
        listitemleft.appendChild(supressleft);

        listvalueleft.appendChild(listitemleft);

        //remise à zéro des inputs
        textleft.value = "";
        valueleft.value= "";

        //création écouteur événement poubelle
        supressleft.addEventListener("click", () => {


            calculGainTotal -= parseFloat(supressleft.parentElement.childNodes[1].innerHTML);
            gaintotal.textContent = calculGainTotal.toString();

            calculGrandTotal -=parseFloat(supressleft.parentElement.childNodes[1].innerHTML);
            gtotal.textContent = calculGrandTotal;

            listitemleft.remove();
        })

    }
    })


addbuttonright.addEventListener("click", () => {

    let saisieright = textright.value;
    let saisievalueright = valueright.value;

    if(textright.value === "" || valueright.value === "") {
        alert("You must enter 2 values.")
        return;
    }

    else{

    //calcul dépense total
    calculDepenseTotal += parseFloat(valueright.value);
    spendingtotal.textContent = calculDepenseTotal.toString();

    //calcul grand total
    calculGrandTotal = (calculGainTotal - calculDepenseTotal);
    gtotal.textContent = calculGrandTotal.toString();

    //création div principale
    let listitemright = document.createElement("div");
    listitemright.classList.add("listitemright");

    //création div texte
    let itemrighttext = document.createElement("div");
    itemrighttext.textContent = saisieright;

    //création div valeur
    let numberright = document.createElement("div");
    numberright.textContent = saisievalueright;

    //création poubelle
    let supressright = document.createElement("img");
    supressright.src = "../pictures/trash-bin.png";
    supressright.classList.add("trash");

    //appel des éléments enfants
    listitemright.appendChild(itemrighttext);
    listitemright.appendChild(numberright);
    listitemright.appendChild(supressright);

    listvalueright.appendChild(listitemright);

    //remise à zéro des valeurs
    textright.value = "";
    valueright.value = "";

    //création écouteur événement
    supressright.addEventListener("click", () => {
let test = parseFloat(supressright.parentElement.children[1].innerHTML);
        calculDepenseTotal -= test
        calculDepenseTotal.toFixed(2)
        console.log(calculDepenseTotal)
    
        spendingtotal.textContent = calculDepenseTotal.toString();

        calculGrandTotal +=parseFloat(test);
        gtotal.textContent = calculGrandTotal.toString();

        listitemright.remove();
    })
}
})



