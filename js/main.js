// $(function() {
// 	$('.toggler').on('click', function() {
// 		$('nav').slideToggle(500);
//   });
// });

const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

navbarToggle.addEventListener('click', () => {
	if(!menuOpen) {
    navbarToggle.classList.add('open');
    menuOpen = true;
  } else {
    navbarToggle.classList.remove('open');
    menuOpen = false;
  }
	navMenu.classList.toggle('active');
	bars.forEach(child => {
		child.classList.toggle('animations')
	})
})
