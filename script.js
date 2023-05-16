let closeIcon = document.querySelector('.close-icon')
let hamburgerMenu = document.querySelector('.hamburger-menu')
let mobileMenu = document.getElementById('mobile-menu')

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');

});
closeIcon.addEventListener('click', function() {
    this.classList.toggle('hidden');
    hamburgerMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
});