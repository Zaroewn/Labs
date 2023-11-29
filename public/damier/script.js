// let blocUn = document.getElementById("un")
console.log(blocUn.classList)

// Add a click event listener to the div 
blocUn.addEventListener("click", () =>{
    // Change the background color to a new color when the div is clicked
    blocUn.classList.toggle("green")

});
 let blocDeux = document.getElementById("deux")
 console.log(blocDeux.classList)

setInterval(() => {
    blocDeux.classList.toggle("green")
}, 1000); //

let tousLesBlackBlock = document.querySelectorAll(".blackBlock")
    for (let i=0;i<tousLesBlackBlock.lenght;i++){
    tousLesBlackBlock[i].setAttribute("style", "border: yellow solid 2px")};