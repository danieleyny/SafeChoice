
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