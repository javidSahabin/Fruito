
let shoppingBtn = document.getElementById("shoppingBtn");
let closeBtn = document.getElementById("closeBtn");
let body = document.querySelector("body");
let aboutBtn = document.getElementById("about-btn")
let featureBox = document.querySelector(".features")
let loginForm = document.querySelector(".login-form")
let userBtn = document.getElementById("user-btn")







// buttons functions
shoppingBtn.addEventListener("click", ()=>{
    body.classList.add("active")
})
closeBtn.addEventListener("click", ()=>{
    body.classList.remove("active")
})
aboutBtn.addEventListener("click", (event)=> {
    featureBox.classList.toggle("active");

    if(event.target.classList[1] === "fa-arrow-down"){
        aboutBtn.classList.replace("fa-arrow-down", "fa-arrow-up")
    }else if(event.target.classList[1] === "fa-arrow-up"){
        aboutBtn.classList.replace("fa-arrow-up", "fa-arrow-down")
    }
})
userBtn.addEventListener("click", ()=>{
    loginForm.classList.toggle("show")
})
