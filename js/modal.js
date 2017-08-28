var feedback = document.querySelector(".feedback");
var feedbackOpen = document.querySelector(".button--modal");
var feedbackClose = document.querySelector(".modal-close--feedback");
var map = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".info-block__map");
var mapClose = document.querySelector(".modal-close--map");
var form = feedback.querySelector(".feedback__form");
var userName = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");


function modalOpen(button, modal, buttonClose) {
 if(modal){
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal-show");
  });
  buttonClose.addEventListener("click", function (event) {
    event.preventDefault();
    if(modal.classList.contains("modal-error")){
      modal.classList.remove("modal-error");
    }
    modal.classList.remove("modal-show");
  });
  }
};

form.addEventListener("submit", function(event) {
  if(!userName.value || !email.value){
    event.preventDefault();
    if(feedback.classList.contains("modal-error")){
      feedback.classList.remove("modal-error");
    }
    feedback.offsetHeight;
    feedback.classList.add("modal-error");
  }
  else {
    localStorage.setItem('name', userName.value);
  }
});

modalOpen(feedbackOpen, feedback, feedbackClose);
modalOpen(mapOpen, map, mapClose);
