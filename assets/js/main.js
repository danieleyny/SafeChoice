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
                    document.querySelector('body').classList.add('no-scroll');
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
                      document.querySelector('body').classList.remove('no-scroll');
                    })
                  })
                })


                /*=============== Products MODAL ===============*/
                const modalViews2 = document.querySelectorAll('.services__modal'),
                      modalBtns2 = document.querySelectorAll('.products__button'),
                      modalClose2 = document.querySelectorAll('.services__modal-close')

                let modal2 = function(modalClick){
                    modalViews2[modalClick].classList.add('active-modal')
                    document.querySelector('body').classList.add('no-scroll');
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
                      document.querySelector('body').classList.remove('no-scroll');
                    })
                  })
                })


                /*=============== Products MODAL ===============*/
                const modalViews3 = document.querySelectorAll('.availability__modal'),
                      modalBtns3 = document.querySelectorAll('.availability__button'),
                      modalClose3 = document.querySelectorAll('.availability__modal-close')

                let modal3 = function(modalClick){
                    modalViews3[modalClick].classList.add('active-modal')
                    document.querySelector('body').classList.add('no-scroll');
                }

                modalBtns3.forEach((mb, i) =>{
                  mb.addEventListener('click', () =>{
                    modal3(i)
                  })
                })

                modalClose3.forEach((mc) =>{
                  mc.addEventListener('click', () =>{
                    modalViews3.forEach((mv) =>{
                      mv.classList.remove('active-modal')
                      document.querySelector('body').classList.remove('no-scroll');
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
                TweenMax.from('.home__juice-animate', 2.5, {delay: 1.1, opacity: 0, y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__apple1', 3.8, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__apple2', 4.5, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(1)', 6, {delay: 1.3,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(2)', 7, {delay: 1.4,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(3)', 8.5, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(4)', 8, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(5)', 9.5, {delay: 1.7,opacity: 0,y: -800,ease: Expo.easeInOut})
                TweenMax.from('.home__leaf:nth-child(6)', 9.5, {delay: 1.8,opacity: 0,y: -800,ease: Expo.easeInOut})






                function fn(selectors) {
                  const items = document.querySelector(".machine__content").children;
                  for (let i = 0; i < selectors.length; i++) {
                      const filterButtons = document.querySelector(selectors[i]).children;
                      document.querySelector(selectors[i]).addEventListener("click", function (event) {
                          if (event.target.matches("[data-target]")) {
                              const activeButton = this.querySelector('.active2');
                              if (activeButton) activeButton.classList.remove('active2');
                              event.target.classList.add('active2');
                              const target = event.target.getAttribute("data-target");
                              for (let k = 0; k < items.length; k++) {
                                  items[k].style.display = "none";
                                  if (target == items[k].getAttribute("data-id")) {
                                      items[k].style.display = "block";
                                  }
                                  if (target == "all") {
                                      items[k].style.display = "block";
                                  }
                              }
                          }
                      });
                  }
              }
              
              fn(['#filter-btns', '#filter-levo1', '#filter-levo2', '#filter-levo3', '#filter-levo4', '#filter-levo5', '#filter-levo6', '#filter-condoms', '#filter-condoms2', '#filter-condoms3', '#filter-condoms4', '#filter-condoms5', '#filter-hyg1', '#filter-hyg2', '#filter-hyg3']);
              


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


