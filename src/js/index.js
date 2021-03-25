import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const addWater = document.querySelector(".add--js");
const deleteWater = document.querySelector(".delete--js");
const numberGlasses = document.querySelector(".glasses--js");

let currentWater = 0;


addWater.addEventListener("click", () => {
    currentWater++;
    numberGlasses.innerHTML = currentWater;
});

deleteWater.addEventListener('click', () => {
    if (currentWater > 0) {
    currentWater--;
    }
    numberGlasses.innerHTML = currentWater;
})
