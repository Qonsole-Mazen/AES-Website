// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var imgs = document.querySelectorAll('.module-image');

imgs.forEach((el) => {
  el.addEventListener('click', function (e) {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

console.log('red');

const supply = document.querySelector('.supply');
const p = supply.querySelectorAll('.supply p.click');
const supplyimage = supply.querySelectorAll('.supplyimgs img');
p.forEach((el) => {
  el.addEventListener('click', function (e) {
    const a = document.querySelector(`.supplyimgs .${e.target.id}`);
    a.click();
  });
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
