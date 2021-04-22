const nav = document.querySelector('.menu--js');

nav.addEventListener('click', () => {
    const navigationList = document.querySelector('.navigation--js');
    navigationList.classList.toggle('navigation__open');
});