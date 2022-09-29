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


 /*=============== Copy Link - Stats ===============*/


 //the helper function
let createCopy = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy('https://www.statista.com/chart/19597/total-reported-std-cases-in-the-us/', 'elementId', function () {
    alert('You have copied the link for this article succesfully!');
});



 /*=============== Copy Link - Article 2 ===============*/


 //the helper function
 let createCopy2 = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy2('https://www.cdc.gov/media/releases/2021/p0125-sexualy-transmitted-infection.html#:~:text=CDC%20Newsroom%20Releases-,CDC%20estimates%201%20in%205%20people%20in,have%20a%20sexually%20transmitted%20infection&text=New%20data%20published%20by%20the,sexually%20transmitted%20infection%20(STI).', 'elementId2', function () {
    alert('You have copied the link for this article succesfully!');
});

 /*=============== Copy Link - Article 3 ===============*/


 //the helper function
 let createCopy3 = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy3('https://www.aclu.org/other/laws-restricting-teenagers-access-abortion', 'elementId3', function () {
    alert('You have copied the link for this article succesfully!');
});

 /*=============== Copy Link - Article 4 ===============*/


 //the helper function
 let createCopy4 = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy4('https://www.cdc.gov/msmhealth/STD.htm', 'elementId4', function () {
    alert('You have copied the link for this article succesfully!');
});


 /*=============== Copy Link - Article 5 ===============*/


 //the helper function
 let createCopy5 = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy5('https://www.cdc.gov/std/statistics/2021/default.htm', 'elementId5', function () {
    alert('You have copied the link for this article succesfully!');
});



 /*=============== Copy Link - Article 6 ===============*/


 //the helper function
 let createCopy6 = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy6('https://www.cdc.gov/nchhstp/newsroom/2021/2019-STD-surveillance-report.html', 'elementId6', function () {
    alert('You have copied the link for this article succesfully!');
});



 /*=============== Copy Link - Article 7 ===============*/


 //the helper function
 let createCopy7 = function(textToCopy, triggerElementId, callback = null) {
  //add event listner to elementtrigger
  let trigger = document.getElementById(triggerElementId);
  trigger.addEventListener("click", function() {
    //create the readonly textarea with the text in it and hide it
    let tarea = document.createElement("textarea");
    tarea.setAttribute("id", triggerElementId + "-copyarea");
    tarea.setAttribute("readonly", "readonly");
    tarea.setAttribute(
      "style",
      "opacity: 0; position: absolute; z-index: -1; top: 0; left: -9999px;"
    );
    tarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(tarea);

    //select and copy the text in the readonly text area
    tarea.select();
    document.execCommand("copy");

    //remove the element from the DOM
    document.body.removeChild(tarea);

    //fire callback function if provided
    if (typeof callback === "function" && callback()) {
      callback();
    }
  });
};


//usage example
createCopy7('https://www.cdc.gov/healthyyouth/healthservices/caps/index.htm#:~:text=Condom%20availability%20programs%20(CAPs)%20began,and%20students%20at%20high%20risk.', 'elementId7', function () {
    alert('You have copied the link for this article succesfully!');
});


 /*=============== Copy Link - End ===============*/

 
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
TweenMax.from('.home__juice-animate', 4, {delay: 1.1, opacity: 0, y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__apple1', 5.5, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__apple2', 5, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(1)', 6.5, {delay: 1.3,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(2)', 7.5, {delay: 1.4,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(3)', 8.5, {delay: 1.5,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(4)', 8, {delay: 1.6,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(5)', 9.5, {delay: 1.7,opacity: 0,y: -800,ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(6)', 9.5, {delay: 1.8,opacity: 0,y: -800,ease: Expo.easeInOut})


