
// make the header of website responsive 
const hmaburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hmaburger.addEventListener("click",()=>{
    hmaburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    hmaburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}));


//thank you btn show the message 
// const thankYou = document.querySelector(".thank-you");
// const imoji = document.querySelector(".imoji");

// imoji.addEventListener('click',()=>{
//     thankYou.classList.add("show")
//     setTimeout(()=>{
//         thankYou.classList.remove("show")
//     },3000)
// })