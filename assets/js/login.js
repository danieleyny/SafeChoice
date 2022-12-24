function checkLogin() {
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check the entered credentials against a set of predefined login credentials and URLs
    if (username == "test" && password == "test") {
      window.location.href = "/portals/columbia.html";
    } else if (username == "user2" && password == "pass2") {
      window.location.href = "http://www.example2.com";
    } else if (username == "user3" && password == "pass3") {
      window.location.href = "http://www.example3.com";
    } else {
      // Login is unsuccessful, display an error message or do some other action
      alert("Incorrect login credentials");
    }
  }
  

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from being submitted as usual
    checkLogin(); // Call the checkLogin function
  });



  
  
       /*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Add icon
            iconEye.classList.add('ri-eye-line')
            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'

            // Remove icon
            iconEye.classList.remove('ri-eye-line')
            // Add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('password','input-icon')