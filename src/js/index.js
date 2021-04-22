import "../scss/main.scss";

// uncomment the lines below to enable PWA
//import {registerSW} from './pwa.js';
//registerSW();

/* place your code below */

const addWater = document.querySelector(".add--js");
const deleteWater = document.querySelector(".delete--js");
const numberGlasses = document.querySelector(".glasses--js");
const key = new Date().toLocaleString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);
const glass = document.querySelector('.image');


let currentWater = 0;
if (localStorageValue) {  
  currentWater = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

numberGlasses.innerHTML = currentWater;


addWater.addEventListener("click", () => {
  currentWater++;
  numberGlasses.innerHTML = currentWater;
  localStorage.setItem(key, currentWater);
  glass.classList.add('animation');
 });

deleteWater.addEventListener("click", () => {
  if (currentWater > 0) {
    currentWater--;
  }
  numberGlasses.innerHTML = currentWater;
  localStorage.setItem(key, currentWater);
});

