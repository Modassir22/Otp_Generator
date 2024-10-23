let btn = document.querySelector("button");
let div = document.querySelector(".inner");
let p = document.createElement("p");

btn.addEventListener("click", ()=>{
     p.innerText = Math.floor(Math.random()*1000000) + 1;
     p.classList.add("otp");
     div.appendChild(p);
})

