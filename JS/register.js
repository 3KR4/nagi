const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword"),
  imageInput = document.querySelector(".user-image-input");
  let userIcon = document.querySelector(".set-user-image img")


// img change
  imageInput.addEventListener("change", function() { 
    userIcon.src = URL.createObjectURL(imageInput.files[0]);
  })

// name Validtion
function checkName() {
  if (!nameInput.value !== "" && nameInput.value.length < 4) {
    return nameField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  nameField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
  
}
// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}
// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}
const eye = document.querySelectorAll(".show-hide")
eye.forEach((eye) => {
  eye.addEventListener("click" , () => {
    const passInbut = eye.parentElement.querySelector("input");
    if (passInbut.type === "password") {
      eye.classList.replace("fa-eye-slash", "fa-eye")
      return (passInbut.type = "text")
    }else {
      eye.classList.replace("fa-eye", "fa-eye-slash");
      passInbut.type = "password"
    };
  });
});


// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkName();

  createPass();
  confirmPass();

  //calling function on key up
  nameInput.addEventListener("keyup", checkName);

  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !nameField.classList.contains("invalid") &&

    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
    )  
  {
    let nameLogin = nameInput.value
    let passwordLogin = passInput.value

    let imageLogin = imageInput.files[0]
    
    let formData = new FormData()
    formData.append("name", nameLogin)

    formData.append("password", passwordLogin)
    formData.append("image", imageLogin)
    axios.post("http://tarmeezAcademy.com/api/v1/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      mainAlert("success", "check",  "Good", "You've create a new account successfully")
      openAlert()
      location.href = "index.html"
    }).catch((error) => {
        mainAlert("error", "exclamation",  "warning", error.response.data.message)
        openAlert()
      }) 
  }
});
