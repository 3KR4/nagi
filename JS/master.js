//!======= Header =======

let header = document.querySelector(".header");
mainHeader = () => {
  return (header.innerHTML = `
    <div class="sideBar">
      <div class="chating">
        <a href="index.html"><i class="bi bi-whatsapp"></i></a>
        <i class="bi bi-chat-dots"></i>
        <i class="bi bi-telephone-plus"></i>
        <i class="bi bi-broadcast"></i>
      </div>
      <div class="info">
        <i class="bi bi-star"></i>
        <i class="bi bi-archive"></i>
        <i onclick="showClickDisplay()" class="bi bi-gear"></i>
        <a class="noUserIco" href="register.html"><i class="fa-regular fa-circle-user"></i></a>
        <div class="image">
          <img src="img/one piece 2.jpg" alt="">
        </div>
      </div>
      <div class="theme-holder">
        <div class="top">
          <h4>Display & Accessibility</h4>
          <i onclick="closeClickDisplay()" class="bi bi-x close"></i>
        </div>
      <div class="darkModeHolder">
        <div class="icon">
          <i class="bi bi-sun-fill sun mainicons"></i>
          <i class="bi bi-moon-fill moon mainicons"></i>
        </div>
        <input onclick="darkMode()" id="checkbox_toggle" type="checkbox" class="check">
        <div class="checkbox">
          <label class="slide" for="checkbox_toggle">
            <label class="toggle" for="checkbox_toggle"></label>
            <label class="text textLight" for="checkbox_toggle">Light Mode</label>
            <label class="text text-2" for="checkbox_toggle">Dark Mode</label>
          </label>
        </div>
      </div>
      <div class="colorsHolder">
      <div class="theme3btn"><i style="font-size: 20px;" class="fa-solid fa-circle-half-stroke theme3 mainicons"></i> Main Color <input type="color" id="colorPicker" value="#ff0000" onchange="updateColor(this.value)"></div>
        <div class="holder">
          <span class="theme-buttons" data-color="#2a84ff"><i style="color: #2a84ff;" class="fa-solid fa-layer-group"></i></span>
          <span class="theme-buttons" data-color="#fe5b3d"><i style="color: #fe5b3d;" class="fa-solid fa-layer-group"></i></span>
          <span class="theme-buttons" data-color="#27ae60"><i style="color: #27ae60;" class="fa-solid fa-layer-group"></i></span>
          <span class="theme-buttons" data-color="#f39c12"><i style="color: #f39c12;" class="fa-solid fa-layer-group"></i></span>
          <span class="theme-buttons" data-color="#e84393"><i style="color: #e84393;" class="fa-solid fa-layer-group"></i></span>
        </div>
      </div>
    </div>
    </div>
  `);
};
mainHeader();

//!======= themeButtons =======
function showClickDisplay () {
  themeHolder.classList.add("active")
}
function closeClickDisplay () {
  themeHolder.classList.remove("active")
}

let body = document.querySelector("body");
let darkLight = document.querySelector(".check");
function darkMode () {
  if (darkLight.checked) {
    body.classList.add("dark");
    localStorage.setItem("mode", "dark-mode");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("mode", "light-mode");
  }
}
if (localStorage.getItem("mode") === "light-mode") {
  body.classList.remove("dark");
  darkLight.checked = false;
} else {
  body.classList.add("dark");
  darkLight.checked = true;
}

let themeHolder = document.querySelector(".theme-holder")
let themeButtons = document.querySelectorAll(".theme-buttons")
let inputColor = document.getElementById("colorPicker")

function showClickDisplay () {
  themeHolder.classList.add("active")
}
function closeClickDisplay () {
  themeHolder.classList.remove("active")
}

if (window.localStorage.getItem("theme")) {
  document.querySelector(':root').style.setProperty('--main-color', window.localStorage.getItem("theme"));
}
themeButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
  
  themeButtons.forEach((li) => {
    li.classList.remove("active")
  })
  e.currentTarget.classList.add("active")
  window.localStorage.setItem("theme", e.currentTarget.dataset.color)
  inputColor.value = localStorage.getItem("theme")
  document.querySelector(':root').style.setProperty('--main-color', e.currentTarget.dataset.color);
  });
});
inputColor.oninput = function () {
  document.querySelector(':root').style.setProperty('--main-color', inputColor.value);
}
inputColor.value = localStorage.getItem("theme") || "#2a84ff"
function updateColor (color) {
  window.localStorage.setItem("theme", color)
  document.querySelector(':root').style.setProperty('--main-color', color);
}

//!======= IF USER LOGIN =======

function setubUi () {
  const token = localStorage.getItem("token")
  if (token) { //YESSSSSSSSSS
    document.querySelector(".noUserIco").style.display = "none"
    document.querySelector(".image").style.display = "flex"

  } else { //!NOOOOOOOOOOO
    document.querySelector(".noUserIco").style.display = "flex"
    document.querySelector(".image").style.display = "none"
  }
}
setubUi()

//!======= IF USER LOGIN =======