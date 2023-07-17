// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

console.log(document.body.clientWidth);

const messageForm = document.forms[0];
const newsLetterForm = document.forms[1];

newsLetterForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

messageForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

const submenus = document.querySelectorAll('.subnav');

console.log(submenus);
submenus.forEach((el) => {
  el.addEventListener('click', (e) => {
    const ul = e.target.parentElement.querySelector('ul');
    if (!ul) return;
    ul.classList.toggle('submenu-open');
    e.target.parentElement.classList.toggle('open');
  });
});
