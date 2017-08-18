var feedback = document.querySelector(".feedback");
var feedbackOpen = document.querySelector(".button--modal");
var feedbackClose = document.querySelector(".modal-close--feedback");
var map = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".info-block__map");
var mapClose = document.querySelector(".modal-close--map");

feedbackOpen.addEventListener("click", function (event) {
  event.preventDefault();
  feedback.classList.add("feedback--show");
})
