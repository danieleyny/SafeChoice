
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
  
  
  
  
   /*=============== Copy Link - Article 8 ===============*/
  
  
   //the helper function
   let createCopy8 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy8('https://www.cbsnews.com/news/emergency-contraception-roe-v-wade-plan-b-spike-in-sales-wisp/', 'elementId8', function () {
      alert('You have copied the link for this article succesfully!');
  });
  
  
   /*=============== Copy Link - Article 9 ===============*/
  
  
   //the helper function
   let createCopy9 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy9('https://planb.ca/en/faq/', 'elementId9', function () {
      alert('You have copied the link for this article succesfully!');
  });
  
   /*=============== Copy Link - Article 10 ===============*/
  
  
   //the helper function
   let createCopy10 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy10('https://www.bluecrossnc.com/understanding-insurance/how-drug-benefits-work/over-counter-medications#:~:text=OTC%20medications%20are%20typically%20used,much%20less%20than%20prescription%20medications.&text=Savings%3A%20A%20difference%20of%20more,a%20visit%20to%20your%20physician.', 'elementId10', function () {
      alert('You have copied the link for this article succesfully!');
  });
  


   /*=============== Copy Link - Article 11 ===============*/
  
  
   //the helper function
   let createCopy11 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy11('https://www.who.int/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)', 'elementId11', function () {
      alert('You have copied the link for this article succesfully!');
  });
  


   /*=============== Copy Link - Article 12 ===============*/
  
  
   //the helper function
   let createCopy12 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy12('https://www.who.int/news/item/01-05-2020-massive-proportion-world-population-living-with-herpes-infection', 'elementId12', function () {
      alert('You have copied the link for this article succesfully!');
  });
  
  
   /*=============== Copy Link - Article 13 ===============*/
  
  
   //the helper function
   let createCopy13 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy13('https://www.cdc.gov/nchhstp/newsroom/2021/2018-STI-incidence-prevalence-estimates.html', 'elementId13', function () {
      alert('You have copied the link for this article succesfully!');
  });
  
  

  
  
   /*=============== Copy Link - Article 14 ===============*/
  
  
   //the helper function
   let createCopy14 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy14('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7154221/', 'elementId14', function () {
      alert('You have copied the link for this article succesfully!');
  });
  
  

  
   /*=============== Copy Link - Article 14 ===============*/
  
  
   //the helper function
   let createCopy15 = function(textToCopy, triggerElementId, callback = null) {
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
  createCopy15('https://www.ncbi.nlm.nih.gov/books/NBK279323/', 'elementId15', function () {
      alert('You have copied the link for this article succesfully!');
  });
  
  



   /*=============== Copy Link - End ===============*/



   
   function addShareEventListener(buttonId, urlToShare, title) {
    // Get the share button
    var shareButton = document.getElementById(buttonId);
    
    // Add a click event listener to the button
    shareButton.addEventListener('click', function() {
      // Use the Web Share API (if it's available) to share the URL
      if (navigator.share) {
        navigator.share({
          title: title,
          url: urlToShare
        }).then(function() {
          console.log('Thanks for sharing!');
        })
        .catch(function(error) {
          console.log('Error sharing:', error);
        });
      } else {
        // If the Web Share API is not available, fall back to a URL-based approach
        var shareUrl = 'https://twitter.com/share?url=' + encodeURIComponent(urlToShare);
        window.open(shareUrl, '_blank');
      }
    });
  }
  
  // Add share event listeners for each button
  addShareEventListener('share-button', 'https://medium.com/@celestegreeneblogs/1-in-5-people-in-the-us-have-an-std-something-must-be-done-e864473662f1', '1 in 5 People In The US Have An STI. Something Must Be Done.');
  addShareEventListener('share-button2', '/articles/1-in-4-college-students-has-an-STI…-We-need-to-do-something...html', '1 in 4 college students has an STI… We need to do something.');
  addShareEventListener('share-button3', 'https://medium.com/@charlieeyny/sexually-transmitted-diseases-are-highest-in-the-lgbtq-community-674569e54634', 'Sexually transmitted diseases are highest in the LGBTQ community');
  addShareEventListener('share-button4', 'https://medium.com/@celestegreeneblogs/the-std-epidemic-affecting-americas-youth-a7c88a74cd01', 'The STD Epidemic Affecting America’s Youth');
  addShareEventListener('share-button5', 'https://medium.com/@celestegreeneblogs/effect-of-condom-availability-programs-509df6e28762', 'Effect of condom availability programs');
  addShareEventListener('share-button6', 'https://medium.com/@charlieeyny/benefits-of-emergency-contraceptives-6be5e4277e5', 'Benefits of emergency contraceptives');
  addShareEventListener('share-button7', 'https://medium.com/@abigailcohen/what-is-safechoice-c6dd7018d270', 'What is SafeChoice?');
  addShareEventListener('share-button8', 'https://medium.com/@abigailcohen/safechoice-vending-machines-providing-convenient-access-to-condoms-for-college-students-e3520bd184d', 'SafeChoice Vending Machines: Providing Convenient Access to Condoms for College Students');
  addShareEventListener('share-button9', 'https://medium.com/@abigailcohen/how-does-safechoice-support-feminism-479fb8a14dfc', 'How Does SafeChoice Support Feminism?');
  addShareEventListener('share-button10', 'https://medium.com/@abigailcohen/the-surprising-benefits-of-condoms-protecting-your-health-and-more-54df1f3e591', 'The Surprising Benefits of Condoms: Protecting Your Health and More');
  addShareEventListener('share-button11', 'https://medium.com/@abigailcohen/24-7-convenience-provided-only-by-safechoice-dfa2dd91e771', '24/7 Convenience Provided only by SafeChoice');
  addShareEventListener('share-button12', 'https://www.statista.com/chart/19597/total-reported-std-cases-in-the-us/', 'U.S. STD Cases Rise To Record High');
  
  addShareEventListener('share-button12', '', '');
  
