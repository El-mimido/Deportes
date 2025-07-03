const nav_cel = document.getElementById('nav-cel');
const link = document.getElementById('links');

nav_cel.addEventListener('click', () => {
  link.classList.toggle('active');
});