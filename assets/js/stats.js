
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
  
  
   /*=============== Copy Link - End ===============*/
  