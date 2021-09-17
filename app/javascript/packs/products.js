window.addEventListener('DOMContentLoaded', (event) => {
  let add_review_button = document.getElementById("add-review");
  add_review_button.addEventListener("click", loadUpReviewForm);

  let modal_background = document.getElementById("review-form");
  modal_background.addEventListener("click", hideReviewForm);
});

function loadUpReviewForm() {
  let add_review_form = document.getElementById("review-form");
  add_review_form.style.display = "block";
}

function hideReviewForm(event) {
  if (event.target.id=="review-form") {
    event.target.style.display = "none";
  }
}
