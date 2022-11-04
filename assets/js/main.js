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


                /*=============== Products MODAL ===============*/
                const modalViews2 = document.querySelectorAll('.services__modal'),
                      modalBtns2 = document.querySelectorAll('.products__button'),
                      modalClose2 = document.querySelectorAll('.services__modal-close')

                let modal2 = function(modalClick){
                    modalViews[modalClick].classList.add('active-modal')
                }

                modalBtns2.forEach((mb, i) =>{
                  mb.addEventListener('click', () =>{
                    modal2(i)
                  })
                })

                modalClose2.forEach((mc) =>{
                  mc.addEventListener('click', () =>{
                    modalViews2.forEach((mv) =>{
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

                TweenMax.from('.home-title-span-stats',1, {delay: .7, opacity: 0, y: 200,ease: Expo.easeInOut})
                TweenMax.from('.home__description-main-stats',2.5, {delay: .7, opacity: 0, y: 200,ease: Expo.easeInOut})
                TweenMax.from('.button-main-stats',3, {delay: .7, opacity: 0, y: 200,ease: Expo.easeInOut})




                TweenMax.from('.home__liquid',1.4, {delay: .7, opacity: 0, y: 200,ease: Expo.easeInOut})
                TweenMax.from('.home__juice-animate', 3, {delay: 1.1, opacity: 0, y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__apple1', 5.5, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__apple2', 5, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(1)', 6.5, {delay: 1.3,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(2)', 7.5, {delay: 1.4,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(3)', 8.5, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(4)', 8, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(5)', 9.5, {delay: 1.7,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(6)', 9.5, {delay: 1.8,opacity: 0,y: -800,ease: Expo.easeInOut})







                function fn(query) {
                  const filterButtons = document.querySelector(query).children;
                  const items = document.querySelector(".machine__content").children;
              
                  for (let i = 0; i < filterButtons.length; i++) {
                      filterButtons[i].addEventListener("click", function () {
                          for (let j = 0; j < filterButtons.length; j++) {
                              filterButtons[j].classList.remove("active2");
                          }
                          this.classList.add("active2");
                          const target = this.getAttribute("data-target");
              
                          for (let k = 0; k < items.length; k++) {
                              items[k].style.display = "none";
                              if (target == items[k].getAttribute("data-id")) {
                                  items[k].style.display = "block";
                              }
                              if (target == "all") {
                                  items[k].style.display = "block";
                              }
                          }
                      });
                  }
              }



              fn('#filter-btns');
              fn('#filter-levo1');  
              fn('#filter-levo2');  
              fn('#filter-levo3');  
              fn('#filter-levo4');  
              fn('#filter-levo5');  
              fn('#filter-condoms');  
              fn('#filter-condoms2');  
              fn('#filter-condoms3');  
              fn('#filter-condoms4');  
              fn('#filter-condoms5');  
              fn('#filter-hyg1');  
              fn('#filter-hyg2');  
              fn('#filter-hyg3');  



              const filters = document.querySelectorAll('li[data-target]')
              const targets = document.querySelectorAll('a[data-target]')
              
              for (const target of targets) {
                target.addEventListener('click', e => {
                  const filterTarget = e.currentTarget.dataset.target
                  const filter = document.querySelector(`li[data-target=${filterTarget}]`)
               
                  for (const filter of filters) {
                    filter.classList.remove('active2')
                  }
                  filter.classList.add('active2')
                })
              }



// More Info Button


function myMoreInfoBtn() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<i class='bx bx-chevron-right services__modal-icon' ></i>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<i class='bx bx-chevron-down services__modal-icon' ></i>"; 
    moreText.style.display = "inline";
  }
}


function myMoreInfoBtn2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<i class='bx bx-chevron-right services__modal-icon' ></i>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<i class='bx bx-chevron-down services__modal-icon' ></i>"; 
    moreText.style.display = "inline";
  }
}

