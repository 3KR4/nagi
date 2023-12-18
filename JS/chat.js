function chatId () {
  let urlParams = new URLSearchParams(window.location.search)
  let userChatId = urlParams.get("userid")
  return userChatId
}
let userId = chatId()

let user = friendss.find((x) => x.id == userId)

let pageHolder = document.querySelector(".pageHolder")
singleChatPage = () => {
  return (pageHolder.innerHTML = `
    <div class="topBar">
      <div class="user">
        <a href="index.html"><i class="fa-solid fa-angle-left"></i></a>
        <img src="${user.img}" alt="">
        <div>
          <h5>${user.name}</h5>
          <h5>online</h5>
        </div>
      </div>
      <div class="icons">
        <i class="bi bi-camera-video"></i>
        <i class="bi bi-telephone"></i>
        <i class="bi bi-search"></i>
      </div>
    </div>
    <div class="chatHolder">
                                        
    </div>
    <div class="bottomBar">
      <i class="bi bi-emoji-smile"></i>
      <i class="bi bi-link-45deg insert"></i>
      <textarea type="text" id="mainChatInput" placeholder="Type a message"></textarea>
      <div class="sendHolder">
        <i class="bi bi-mic mic"></i>
        <i class="bi bi-send send"></i>
      </div>
    </div>
  `);
};
singleChatPage();

let mainChatInput = document.getElementById("mainChatInput")
let sendHolder = document.querySelector(".sendHolder")
let sendBtn = document.querySelector(".sendHolder .send")


mainChatInput.addEventListener("keydown", () => {
  if(mainChatInput.value.length > 0) {
    sendHolder.classList.add("active")
  } else {
    sendHolder.classList.remove("active")
  }
})

sendBtn.addEventListener("click", () => {
  let mainChatInputvalue = mainChatInput.value
  document.querySelector(".chatHolder") .innerHTML += `
  <div class="message">
    <img src="img/one piece 2.jpg" alt="">
    <div class="holder">
      <h6 class="userName">Ahmed Hani</h6>
      <h6>${mainChatInputvalue}</h6>
    </div>
  </div>
  `
  sendHolder.classList.remove("active")
  mainChatInput.value = ""
})

// document.querySelector(".chatHolder .message").classList.add("right")