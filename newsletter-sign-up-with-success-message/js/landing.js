const form = document.getElementById("form");
const errorMessage = document.querySelector(".error_message");
const emailInput = document.querySelector("#email");

function handleSubmit(e) {
    e.preventDefault();


  // using JavaScript constructor
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const emailValue = data.email;

  if (emailValue.includes("@")) {
    emailInput.classList.remove("invalid");
    localStorage.setItem("userEmail", emailValue);
    window.location.href = "pages/success.html"
  } else {
    emailInput.classList.add("invalid");
    errorMessage.innerHTML = "Valid email required";
    }

    // console.log(data);

    
}


emailInput.addEventListener("input", function(){
  this.classList.remove("invalid");
  errorMessage.innerHTML = "";
} )

form.addEventListener("submit", handleSubmit);


