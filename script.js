const body_Password_Submit = document.getElementById("body_Password_Submit");
const body_Password_Input = document.getElementById("body_Password_Input");

body_Password_Submit.addEventListener("click", function() {
    if(body_Password_Input.value === "test") {
        alert("Working correctly!");
    } else {
        alert("Incorrect, please try again!");
        body_Password_Input.value = "";
    }
  });