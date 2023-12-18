let searchHolder = document.querySelector(".users .search")
searchHolderr = () => {
  return (searchHolder.innerHTML = `
    <i class="bi bi-search"></i>
    <input type="text" id="searchInput" placeholder="Search or start a new chat">
    <i class="bi bi-x xclose"></i>
  `);
};
searchHolderr();

let searchInput = document.getElementById("searchInput")
let deleteSearchX = document.querySelector(".users .xclose")
searchInput.addEventListener("keydown", () => {
  if(searchInput.value.length > 0) {
    deleteSearchX.style.display = "block"
  } else {
    deleteSearchX.style.display = "none"
  }
})
deleteSearchX.addEventListener("click", () => {
  searchInput.value = ""
  deleteSearchX.style.display = "none"
})

let friendsHolder = document.querySelector(".friends")
function rednderfilterBtn() {
  
  for (friend of friendss) {
    let friendssss = `
    <a href="chat.html?userid=${friend.id}"  class="friend">
    <div class="holder">
      <img src="${friend.img}" alt="">
        <div>
          <h5>${friend.name}</h5>
          <p>${friend.title}</p>
        </div>
      </div>
      <div class="info">
        <h6>${friend.time} PM</h6>
        <span>${friend.message}</span>
      </div>
    </a>
    `
    friendsHolder.innerHTML += friendssss
  }
  }
rednderfilterBtn();
