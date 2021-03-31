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
const info = document.querySelector('.info--js');

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
});

deleteWater.addEventListener("click", () => {
  if (currentWater > 0) {
    currentWater--;
  }
  numberGlasses.innerHTML = currentWater;
  localStorage.setItem(key, currentWater);
});

info.addEventListener("click", () => {
  alert("Picie wody to niezwykle ważny element zdrowego odżywiania, pamiętaj o tym! Należy pić codziennie co najmniej 1.5 litra wody!");
});

