 /*=============== Header Color ===============*/

 
// Toggle the .pa-fixed-header class when the user 
// scroll 100px 

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("header");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

  

  } else {
    navBar.classList.remove("pa-fixed-header");
    
   
  }
}
 /*=============== Header Color ===============*/



 
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
	mb.addEventListener('click', () =>{
		modal(i)
	})
})

modalClose.forEach((mc) =>{
	mc.addEventListener('click', () =>{
		modalViews.forEach((mv) =>{
			mv.classList.remove('active-modal')
		})
	})
})



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ANIMATION ===============*/

TweenMax.from('.home__liquid',2, {delay: .7, opacity: 0, y: 200,ease: Expo.easeInOut})
TweenMax.from('.home__juice-animate', 3.5, {delay: 1.2, opacity: 0, y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__apple1', 5, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__apple2', 5, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(1)', 7, {delay: 1.3,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(2)', 7, {delay: 1.4,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(3)', 8, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(4)', 8, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(5)', 8, {delay: 1.7,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(6)', 8, {delay: 1.8,opacity: 0,y: -800,ease: Expo.easeInOut})


