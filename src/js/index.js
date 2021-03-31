import "../scss/main.scss";

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const addWater = document.querySelector(".add--js");
const deleteWater = document.querySelector(".delete--js");
const numberGlasses = document.querySelector(".glasses--js");
const key = new Date().toLocaleString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);
const info = document.querySelector(".info--js");
const progress = document.querySelector(".text--js");

let currentWater = 0;

if (localStorageValue) {
  currentWater = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

numberGlasses.innerHTML = currentWater;

info.addEventListener("click", () => {
  alert(
    "Picie wody to niezwykle ważny element zdrowego odżywiania, pamiętaj o tym! Należy pić codziennie co najmniej 1.5 litra wody! Jedna szklanka to ok. 250 ml."
  );
});

if (currentWater == 0) {
  progress.innerHTML = "Zacznij! 1.5 l to nie tak dużo!";
} else if (currentWater == 1) {
  progress.innerHTML = "Do osiągnięcia celu brakuje jeszcze 5 szklanek!";
} else if (currentWater == 2) {
  progress.innerHTML = "Jeszcze tylko litr!";
} else if (currentWater == 3) {
  progress.innerHTML = "Połowa za Tobą!";
} else if (currentWater == 4) {
  progress.innerHTML = "Wypiłeś/aś już aż litr wody!";
} else if (currentWater == 5) {
  progress.innerHTML = "Ostatnia prosta!";
} else if (currentWater >= 6) {
  progress.innerHTML = "Brawo! Osiągnąłeś/aś cel!";
};

addWater.addEventListener("click", () => {
  currentWater++;
  numberGlasses.innerHTML = currentWater;
  localStorage.setItem(key, currentWater);
  if (currentWater == 0) {
    progress.innerHTML = "Zacznij! 1.5 l to nie tak dużo!";
  } else if (currentWater == 1) {
    progress.innerHTML = "Do osiągnięcia celu brakuje jeszcze 5 szklanek!";
  } else if (currentWater == 2) {
    progress.innerHTML = "Jeszcze tylko litr!";
  } else if (currentWater == 3) {
    progress.innerHTML = "Połowa za Tobą!";
  } else if (currentWater == 4) {
    progress.innerHTML = "Wypiłeś/aś już aż litr wody!";
  } else if (currentWater == 5) {
    progress.innerHTML = "Ostatnia prosta!";
  } else if (currentWater >= 6) {
    progress.innerHTML = "Brawo! Osiągnąłeś/aś cel!";
  };
  
  
});

deleteWater.addEventListener("click", () => {
  if (currentWater > 0) {
    currentWater--;
  }
  numberGlasses.innerHTML = currentWater;
  localStorage.setItem(key, currentWater);
  if (currentWater == 0) {
    progress.innerHTML = "Zacznij! 1.5 l to nie tak dużo!";
  } else if (currentWater == 1) {
    progress.innerHTML = "Do osiągnięcia celu brakuje jeszcze 5 szklanek!";
  } else if (currentWater == 2) {
    progress.innerHTML = "Jeszcze tylko litr!";
  } else if (currentWater == 3) {
    progress.innerHTML = "Połowa za Tobą!";
  } else if (currentWater == 4) {
    progress.innerHTML = "Wypiłeś/aś już aż litr wody!";
  } else if (currentWater == 5) {
    progress.innerHTML = "Ostatnia prosta!";
  } else if (currentWater >= 6) {
    progress.innerHTML = "Brawo! Osiągnąłeś/aś cel!";
  };
  });


