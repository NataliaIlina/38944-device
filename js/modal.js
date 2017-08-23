var feedback = document.querySelector(".feedback");
var feedbackOpen = document.querySelector(".button--modal");
var feedbackClose = document.querySelector(".modal-close--feedback");
var map = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".info-block__map");
var mapClose = document.querySelector(".modal-close--map");


function modalOpen(button, modal, buttonClose) {
 if(modal){
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });
  buttonClose.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "none";
  });
  }
};

modalOpen(feedbackOpen, feedback, feedbackClose);
modalOpen(mapOpen, map, mapClose);
