const openmenu = document.querySelector('.bx-menu');
const closemenu = document.querySelector('.bx-x');
const menu = document.getElementsByClassName('icon')[0];
openmenu.addEventListener('click', function (e) {
  e.target.style.display = 'none';
  closemenu.style.display = 'block';
  menu.classList.toggle('hide');
});

closemenu.addEventListener('click', function (e) {
  e.target.style.display = 'none';
  openmenu.style.display = 'block';
  menu.classList.toggle('hide');
});
