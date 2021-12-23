// const grab = (element) => document.querySelector(element);

const menuBtn = grab('#hamburger-menu-btn');
const menuLinks = grab('#nav-links');

menuBtn.addEventListener('click', ()=>{
    // console.log('clicked');
    menuLinks.classList.toggle('hidden');
})