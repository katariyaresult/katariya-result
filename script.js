// Smooth Scroll for Hero Button

document.querySelector(".hero-btn").addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector("#latest").scrollIntoView({
        behavior:"smooth"
    });
});


// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

};


topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};


// Search Function

let searchBox = document.querySelector(".search input");
let cards = document.querySelectorAll(".card");


searchBox.addEventListener("keyup",function(){

    let value = searchBox.value.toLowerCase();

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

});


// Button Click Alert

let buttons = document.querySelectorAll(".card button");


buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        alert("Latest update page will be available soon!");

    });

});


// Hide Top Button Initially

topBtn.style.display="none";
// Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

};


topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};
