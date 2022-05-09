//Scroll del header
window.addEventListener('scroll', function(){
document.getElementById('header').classList.toggle('header__activo', window.scrollY > 0);
})