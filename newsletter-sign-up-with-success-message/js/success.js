let successEmailContent = document.querySelector(".success__email");
const storedEmail = localStorage.getItem("userEmail");

if (storedEmail) {
    successEmailContent.textContent = storedEmail;
} else {
    successEmailContent.textContent = "ash@loremcompany.com";
}