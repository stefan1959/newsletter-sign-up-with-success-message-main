const form = document.getElementById("form");
const errorMessage = document.getElementById("email-error");
const emailInput = document.getElementById("email");
const successMessage = document.getElementById("success");
const successEmail = document.getElementById("email-success");
const formContainer = document.getElementById("form-container");

const handleSubmit = (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));
  let email = data["email"].trim();
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errorMessage.style.display = "block";
    emailInput.classList.add("errorBg");
    return;
  }

  successMessage.classList.remove("hidden");
  formContainer.classList.add("hidden");
  successEmail.textContent = email;
  form.reset();
};

document.getElementById("email").addEventListener("focus", function () {
  errorMessage.style.display = "none";
  emailInput.classList.remove("errorBg");
});

form.addEventListener("submit", handleSubmit);
