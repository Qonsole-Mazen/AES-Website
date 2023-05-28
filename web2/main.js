let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const openMenu = document.querySelector(".bx-menu")
const closeMenu = document.querySelector(".bx-x")
const menu = document.querySelector('.nav')
closeMenu.style.display ='none'
openMenu.addEventListener("click", (e) =>{
    e.target.style.display = 'none'
    closeMenu.style.display = 'inline-block'
    menu.classList.toggle('hide')
})
closeMenu.addEventListener("click", (e) =>{
    e.target.style.display = 'none'
    openMenu.style.display = 'inline-block'
    menu.classList.toggle('hide')
})

const submnue = document.querySelectorAll('.sub')
console.log(submnue[0].children[1])
submnue.forEach(el=>{
    el.addEventListener('click',e=>{
    console.log(e.target.nextElementSibling )
        e.target.nextElementSibling .classList.toggle('hide')
    })
})