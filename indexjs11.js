let redLight = document.querySelector(".red-light");
let yellowLight = document.querySelector(".yellow-light");
let greenLight = document.querySelector(".green-light");
let stopBtn = document.querySelector(".stop");
let slowBtn = document.querySelector(".slow");
let goBtn = document.querySelector(".go");
let trafficMsg = document.querySelector(".traffic-msg");

stopBtn.addEventListener("click",()=>{
    redLight.style.display = "block";
    yellowLight.style.display = "none";
    greenLight.style.display = "none";
    trafficMsg.innerText = "The light is Red";
    trafficMsg.style.backgroundColor = "red";
})
slowBtn.addEventListener("click",()=>{
    redLight.style.display = "none";
    yellowLight.style.display = "block";
    greenLight.style.display = "none";
    trafficMsg.innerText = "The light is Yellow";
    trafficMsg.style.backgroundColor = "yellow";
})
goBtn.addEventListener("click",()=>{
    redLight.style.display = "none";
    yellowLight.style.display = "none";
    greenLight.style.display = "block";
    trafficMsg.innerText = "The light is Green";
    trafficMsg.style.backgroundColor = "green";
})