const ratingEls = document.querySelectorAll(".rating");

const btnE1 = document.getElementById("btn")

const containerE1 = document.querySelector('.container');

let selectedRating = "";

ratingEls.forEach((ratingEls) =>{
    ratingEls.addEventListener("click", (event)=>{
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText; 
    event.target.classList.add("active");
    event.target.parentNode.classList.add('active');
    });
});



btnE1.addEventListener("click", ()=>{

    if(selectedRating !== ""){
        containerE1.innerHTML= `<strong>Thanks you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
});





function removeActive(){
    ratingEls.forEach((ratingEls)=>{
        ratingEls.classList.remove("active");
    })
}