let regForm = document.getElementById("reg-form");
let newPassword = document.getElementById("new-password");
let conformPassword = document.getElementById("conform-password");

// show Form
let signUpBtn = document.getElementById("sign-up-btn");
let formContainer = document.getElementById("form-container");

function showForm() {
  formContainer.classList.toggle("hidden");
}
signUpBtn.addEventListener("click", showForm);

regForm.onsubmit = (e) => {
  e.preventDefault();
  let FullName = document.getElementById("FullName");
  let email = document.getElementById("email");
  let mobileNumber = document.getElementById("mobile-number");

  if (
    FullName.value === "" ||
    email.value === "" ||
    mobileNumber.value === "" ||
    newPassword.value === "" ||
    conformPassword.value === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! `,
      footer: '<a href="#" class =" text-rose-600">All filed Are Required</a>',
    });
  } else if (!isNaN(FullName.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Enter Your valid Name`,
    });
  } else if (isNaN(mobileNumber.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Enter Your Valid Mobile Number`,
      footer:
        '<a href="#" class =" text-rose-600">Example:- +91 0000000000</a>',
    });
  } else if (mobileNumber.value.length !== 10) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Enter Your Valid Mobile Number`,
      footer:
        '<a href="#" class =" text-rose-600">Example:- +91 0000000000</a>',
    });
  } else if (newPassword.value !== conformPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Password Not Match`,
    });
  } else if (newPassword.value.length < 8 || conformPassword.value.length < 8) {
    Swal.fire({
      icon: "error",
      title: "Password min length 8 Digit",
      text: `Try again`,
    });
  } else {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  }
};

function showPassword() {
  let showPassword = document.getElementById("show-password");
  if (newPassword.type === "text" && conformPassword.type === "text") {
    newPassword.type = "password";
    conformPassword.type = "password";
    showPassword.className = "ri-eye-off-fill";
  } else {
    newPassword.type = "text";
    conformPassword.type = "text";
    showPassword.className = "ri-eye-fill";
  }
}
