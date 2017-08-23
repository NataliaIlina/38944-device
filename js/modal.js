var feedback = document.querySelector(".feedback");
var feedbackOpen = document.querySelector(".button--modal");
var feedbackClose = document.querySelector(".modal-close--feedback");
var map = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".info-block__map");
var mapClose = document.querySelector(".modal-close--map");


// feedbackOpen.addEventListener("click", function (event) {
//   event.preventDefault();
//   feedback.classList.add("feedback--show");
// });
//
// feedbackClose.addEventListener("click", function () {
//   feedback.classList.remove("feedback--show");
// });
//
// mapOpen.addEventListener("click", function (event) {
//   event.preventDefault();
//   map.classList.add("modal-map--show");
// });
//
// mapClose.addEventListener("click", function () {
//   map.classList.remove("modal-map--show");
// });



function modalOpen(button, modal, buttonClose) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });
  buttonClose.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "none";
  });
};

modalOpen(feedbackOpen, feedback, feedbackClose);
modalOpen(mapOpen, map, mapClose);
