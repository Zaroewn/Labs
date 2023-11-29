let progression = 0;


let arborescence = {

    window: {

        document: {
            HTML: {
                div: {
                    attribut: {
                        id: {
                            exemple: ["./images/div1.PNG"],
                            topo: ["L'attribut id permet d'associer un élément à un identificateur unique, essentiel au 'javascriptage'"]

                        },
                        name: {
                            exemple: ["./images/name1.PNG"]
                        },
                        style: {

                            exemple: ["./images/style3code.PNG","./images/text1.PNG"],
                            topo:["L'attribut 'style' permet de renseigner tout ce qui concerne l'apparence d'un élément HTML"]

                        },
                        class:{
                            exemple:[""],
                            topo:[""]
                        }


                    },

                    Js: {

                        style: {

                            backGroundColor: {
                                exemple: ["./images/backGroundColor.PNG"],
                                topo: ["Change la couleur de fond d'un élément via le sous-object style"]
                            },
                            width: "",
                            height: "",
                            color: "",
                            opacity: "",
                            border: "",
                            backgroundImage: "",
                            boxShadow: "",
                        },
                        classList: {
                            add: {
                                exemple: ["./images/classListAdd.PNG"],
                                topo: ["Ajouter une classe à un élément HTML 'javascripté' via le sous-object 'classList'"],
                            },
                            toggle: {
                                exemple:["./images/classListToggle.PNG"],
                                topo:["La fonction 'toggle'(permuter), permet de permuter une classe.",
                            "Si la classe est déjà affectée à un élement, elle sera retirée",
                            "Si la classe n'est pas déjà affectée à un élément, elle sera ajoutée",
                            "La fonction toggle est accessible via le sous-objet classList",
                            "Si la permutation ne fonctionne pas, considérer les classes css déjà présentes(conflits)"
                        
                        ]
                            },
                            remove: "",
                            replace: "",
                            contain: ""
                        },
                        premierNiveau:{

                            textContent:{
                                exemple:["./images/premierNiveau.PNG"],
                                topo:["L'objet 'textContent' représente le texte d'un élément.",
                                "Il ne nécessite pas de passer par un sous-objet tel que 'classList' ou 'style'",
                                "D'autre propriétés et fonctions sont accessibles directement depuis l'élément 'javascripté'"
                            ]
    
                            }
                        }

                    },

                  

                },
                h1: {
                    attribut: {
                        id: {

                        },
                        name: {

                        },
                        style: {

                        },
                    },

                    Js: {
                        style: {

                            backGroundColor: "",
                            width: ""
                        },

                        classList: {
                            add: {},
                            toggle: {},
                            remove:{},
                            replace: {},
                            contain: {}
                        },
                    },


                },
                input: {
                    attribut: {
                        id: {

                        },
                        name: {

                        },
                        placeholder: {

                        },
                        style: {
                       
              
                 
                        },
                        type: {
                            text:{
                                exemple:[""],
                                topo:[""],
                                link:["https://www.w3schools.com/tags/tag_input.asp"]
                            },
                            checkbox:{
                                exemple:[""],
                                topo:[""]
                            },
                         
                            radio:{
                                exemple:[""],
                                topo:[""]
                            },
                         
                            file:{
                                exemple:[""],
                                topo:[""]
                            },
                            password:{
                                exemple:[""],
                                topo:[""]
                            },
                            range:{
                                exemple:[""],
                                topo:[""]
                            },
                            email:{
                                exemple:[""],
                                topo:[""]
                            },
                          
                         

                        },
                    },

                    Js: {
                        style: {

                            backGroundColor: "",
                            width: ""
                        },

                        classList: {
                            classList: {
                                add: {},
                                toggle: {},
                                remove: {},
                                replace:{},
                                contain: {}
                            },
                        },
                    },



                }, textarea: {

                },
            },
            fonctions: {
                getElementById: {
                    exemple: ["./images/affichage1.PNG", "./images/getElementById1.PNG"],
                    topo: ["Déclare une variable pour y stocker un élément HTML",
                        "L'id de cet élément doit être unique",
                        "Il y a d'autre moyen de stocker cette référence",
                        "La fonction prend l'id de l'élément en paramètre"]
                },
                addEventListener: {

                    exemple :["./images/addEventListener1.PNG"],
                    topo :["La fonction addEventListener permet d'ajouter un écouteur d'événement sur un élément",
                "Cette fontion a besoin de deux paramètres : l'évenement et la fonction anonyme qui déclenchera le processus",   "Elle est attachée à l'élément 'javascipté' que l'on souhaite observer",
               
            "Elle permet d'écouter plusieurs type d'événemet comme 'click','mouseover','mouseup',etc.."]
                },
                createElement: {

                    exemple:["./images/createElement1.PNG"],
                    topo:["La fonction createElement permet de créer un élément.","Elle prend en paramètre la balise HTML sans <>",
                "Pour une div:'div', un paragrphe :'p'", "un lien :'a' etc...",
            "Il ne suffit pas de créer un élément, il faut également renseigner son emplacement dans le DOM.",
        "Dans cet exemple, le paragraphe créé est ajouté directement au <body> du document à l'aide de la fonction 'appendChild' (ajouterEnfant)"]
                },
                setAttribute: {

                    exemple: ["./images/setAttribute1.PNG"],
                    topo: ["Changer les attributs d'un élément HTML grâce à la fonction setAttribute(<attribut>,<valeur>)"]

                },
                appendChild:{

                    exemple:["./images/appendChild1.PNG"],
                    topo: ["La fonction 'appendChild' (ajouterEnfant) permet d'ajouter un 'enfant' à un élément 'parent'", "Elle prend en paramètre l'objet précédemment créé",
                 ]
                } ,
                querySelectorAll:{

                    exemple:["./images/querySelectorAll.PNG"],
                    topo:["La fonction querySelectorAll prend en paramètre une classe, une id ou encore un élément HTML.",
                "Pour sélectionner des éléments suivant leur classe, ne pas oublier le point de '.maClasse' css.",
                "La fonction renvoie un tableau qu'il est possible d'itérer avec une boucle afin de traiter les éléments à la volée."]
                },
                write:{

                    exemple:["./images/write.PNG"],
                    topo:["La fonction 'write' permet d'écrire directement dans la page HTML.",
                "Il est possible d'ajouter des attributs."]
                }
             
            },
            propriétés: {

                contentType: "",
                docType: ""
            }
        },
        fonctions: {
            prompt: {
                exemple: ["./images/prompt1.PNG","./images/prompt2.PNG"],
                topo: ["La fonction 'prompt' est une fonction du navigateur.",
            "Elle permet de notifier l'utilisateur et de récupérer une réponse.",
        "Comme tout code Javascript, vous pouvez tester cette fonction dans la console."]

            },
            print: "",
            open: "",
            alert: "",
            getComputedStyle: {
                getPropertyValue: {
                    exemple:["./images/computedStyle.PNG"],
                    topo:["La fonction 'computedStyle' prend un élément 'javascripté'en paramètre.",
                "On peut alors lui attacher une fonction parmi lesquelles 'getPropertyValue' qui elle même prend une propriété css en paramètre.",
            "Ceci permet d'obtenir la valeur de la propriété recherchée."]
                }
            }
        },
        propriétés: {
            origin: "",
            screen: {
                width:{
                    exemple:["./images/screen1.PNG"],
                    topo:["La propriété 'screen' est un objet contenant des informations sur l'écran du poste hôte",
                "C'est une des nombreuses propriétés du navigateur"]
                }
              
            }
        }
    },
  
}



 
let affichage = document.getElementById("affichage");


let imageExemple = document.getElementById("imageExemple");


let text = document.getElementById("text")

//récupére TOUTES les <div> et les stocke dans un tableau. 
let toutesLesDiv = document.querySelectorAll("div");
//itération du tableau et changement de la couleur de fond pour toutes les <div>



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function createContainer(content, backgroundColor) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("style", `background-color: ${backgroundColor}`);
    container.textContent = content;
    return container;
}

function createInsideDiv(content, backgroundColor) {
    let insideDiv = document.createElement("div");
    insideDiv.classList.add("insideDiv");
    insideDiv.setAttribute("style", `background-color: ${backgroundColor}`);
    insideDiv.textContent = content;
    insideDiv.id = content;
    return insideDiv;
}

function clearContainers() {
    while (containerStack.length > 0) {
        let container = containerStack.pop();
        grid.removeChild(container);
    }
}
function clearContainersUpTo(targetContainer) {
    while (containerStack.length > 0 && containerStack[containerStack.length - 1] !== targetContainer) {
        let container = containerStack.pop();
        grid.removeChild(container);
    }
}



const setImageAndText = (prop, obj, innerDiv) => {

    if (prop === "exemple") {

        innerDiv.remove()
        for (let i of obj[prop]) {

            let img = document.createElement("img");
            img.setAttribute("src", i);
            affichage.appendChild(img)
        }

    }

    if (prop === "topo") {
      
        innerDiv.remove()

        for (let i of obj[prop]) {

            let text = document.createElement("div");
            text.textContent = i
            affichage.appendChild(text)
            let br = document.createElement("br");
            affichage.appendChild(br)
        }



    }
    if(prop==="link"){

        innerDiv.remove()
        for (let i of obj[prop]) {
let link = document.createElement("div");
link.textContent = "INFO";
link.classList.add("infoStyle");
link.addEventListener("click",()=>{
    window.open(i)

})
affichage.appendChild(link)
        }
     
    }


}
const clearContent = () => {

    while (affichage.firstChild) {
        affichage.removeChild(affichage.firstChild);
    }
}
let containerStack = [];







document.addEventListener("DOMContentLoaded", () => {


    let window = createContainer("window", "#C573D3");
    grid.appendChild(window);
    containerStack.push(window);

    for (let i in arborescence) {
        for (let j in arborescence[i]) {
            let element = createInsideDiv(j, "#737AD3");
            window.appendChild(element);

            element.addEventListener("click", () => {
                clearContent();

                clearContainersUpTo(window);

                element.style.border = "2px solid green";

                let doc = createContainer(j, "#73D3D0");
                grid.appendChild(doc);
                containerStack.push(doc);

                for (let k in arborescence[i][j]) {
                    let elDoc = createInsideDiv(k, "#39D035");

                    setImageAndText(k, arborescence[i][j], elDoc)
                    doc.appendChild(elDoc);

                    elDoc.addEventListener("click", () => {
                        // Clear containers beyond this point
                  
                        clearContent()
                        clearContainersUpTo(doc);

                        elDoc.style.border = "2px solid green";

                        let content3 = createContainer(k, "#E3E61E");
                        grid.appendChild(content3);
                        containerStack.push(content3);

                        for (let l in arborescence[i][j][k]) {
                            let elContent3 = createInsideDiv(l, "#F0B27A");

                        
                            content3.appendChild(elContent3);
                            setImageAndText(l, arborescence[i][j][k], elContent3)
                            elContent3.addEventListener("click", () => {
                                // Clear containers beyond this point
                                clearContent()
                                clearContainersUpTo(content3);

                                elContent3.style.border = "2px solid green";

                                let content4 = createContainer(l, "#E46B2A");
                                grid.appendChild(content4);
                                containerStack.push(content4);

                                for (let m in arborescence[i][j][k][l]) {
                                    let elContent4 = createInsideDiv(m, "#F0B27A");
                                    content4.appendChild(elContent4);

                                    setImageAndText(m, arborescence[i][j][k][l], elContent4)

                                    elContent4.addEventListener("click", () => {
                                        clearContent()
                                        // Clear containers beyond this point



                                        clearContainersUpTo(content4);

                                        elContent4.style.border = "2px solid green";

                                        let content5 = createContainer(m, "#EC7063");
                                        grid.appendChild(content5);
                                        containerStack.push(content5);

                                        for (let n in arborescence[i][j][k][l][m]) {
                                            let elContent5 = createInsideDiv(n, "#F0B27A");
                                            content5.appendChild(elContent5);
                                            setImageAndText(n, arborescence[i][j][k][l][m], elContent5)
                                            elContent5.addEventListener("click", () => {
                                                clearContent()
                                                // Clear containers beyond this point

                                                clearContainersUpTo(content5);

                                                elContent5.style.border = "2px solid green";

                                                let content6 = createContainer(n, "#EC7063");
                                                grid.appendChild(content6);
                                                containerStack.push(content6);

                                                for (let o in arborescence[i][j][k][l][m][n]) {
                                                    let elContent6 = createInsideDiv(o, "#F0B27A");
                                                    content6.appendChild(elContent6);
                                                    setImageAndText(o, arborescence[i][j][k][l][m][n], elContent6)
                                                    elContent6.addEventListener("click", () => {
                                                        clearContent()
                                                        clearContainersUpTo(content6);
                                                        elContent6.style.border = "2px solid green";

                                                        let content7 = createContainer(n, "#EC7063");
                                                        grid.appendChild(content7);
                                                        containerStack.push(content7);

                                                        for (let p in arborescence[i][j][k][l][m][n][o]) {


                                                            let elContent7 = createInsideDiv(p, "#F0B27A");
                                                            content7.appendChild(elContent7);
                                                            setImageAndText(p, arborescence[i][j][k][l][m][n][o], elContent7)

                                                            elContent7.addEventListener("click", () => {
                                                                clearContent()
                                                                // Clear containers beyond this point
                                                                clearContainersUpTo(content7);
                                                                elContent7.style.border = "2px solid green";

                                                                let content8 = createContainer(p, "##B01EE2");
                                                                grid.appendChild(content8);
                                                                containerStack.push(content8);

                                                                for (let q in arborescence[i][j][k][l][m][n][o][p]) {
                                                                    let elContent8 = createInsideDiv(q, "#YOUR_COLOR");
                                                                    content8.appendChild(elContent8);


                                                                 
                                                                }
                                                            });
                                                        }

                                                    })
                                                  
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }
});






