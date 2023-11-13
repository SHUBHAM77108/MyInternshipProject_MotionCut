// Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

var bowl = document.getElementById('bowl');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	bowl.style.transform = `rotate(${value}deg)`; 
});

ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('#headline', { delay: 300, origin: 'left' });
ScrollReveal().reveal('#about_A', { delay: 300, origin: 'left' });
ScrollReveal().reveal('#box1', { delay: 400, origin: 'left' });
ScrollReveal().reveal('#box5', { delay: 400, origin: 'right' });

ScrollReveal().reveal('#footer', { delay: 400, origin: 'bottom' });
