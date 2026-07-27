// Smooth Scroll for Hero Button

let heroBtn = document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("click", function(e){

    e.preventDefault();

    let latest = document.querySelector("#latest");

    if(latest){

        latest.scrollIntoView({
            behavior:"smooth"
        });

    }

});

}



// Back To Top Button

let topBtn = document.getElementById("topBtn");


if(topBtn){


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


topBtn.style.display="none";


}




// Search Function

let searchBox = document.querySelector(".search input");


let items = document.querySelectorAll(
".card, .answer-box, .result-box, .job-box, .admit-box"
);



if(searchBox){


searchBox.addEventListener("keyup",function(){


let value = searchBox.value.toLowerCase();



items.forEach(function(item){


let text = item.innerText.toLowerCase();



if(text.includes(value)){


item.style.display="block";


}

else{


item.style.display="none";


}



});


});


}




// Button Click Alert

let buttons = document.querySelectorAll(".card button");


buttons.forEach(function(btn){


btn.addEventListener("click",function(){


alert("Latest update page will be available soon!");


});


});
