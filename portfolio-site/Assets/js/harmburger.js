const harmburger = document.querySelector('.harmburger');
const navMenu = document.querySelector('.nav-item');


harmburger.addEventListener('click', () => {
    harmburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    harmburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

const navLinks = document.querySelector('.nav-link');

document.querySelector('.nav-link').forEach(n => n.addEventListener("click", () => {
    navLinks.classList.add('active');
    navLinks.classList.remove('active');
}));
