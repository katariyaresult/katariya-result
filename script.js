const btn=document.getElementById("themeBtn");

btn.onclick=()=>{
document.body.classList.toggle("dark");
};

document.body.classList.remove("dark");
