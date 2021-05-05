const key = new Date().toLocaleString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);


localStorage.removeItem('loglevel:webpack-dev-server');

for (i = 0; i < localStorage.length; i++) {
  const waterList = document.querySelector(".list--js");
  const myTemplate = `<tr><td>${localStorage.key(i)}</td> <td>${localStorage.getItem(localStorage.key(i))}</td></tr>`;
  waterList.innerHTML += myTemplate;
}
