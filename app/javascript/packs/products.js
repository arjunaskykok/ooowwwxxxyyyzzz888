window.addEventListener('DOMContentLoaded', (event) => {
  let add_review_button = document.getElementById("add-review");
  add_review_button.addEventListener("click", loadUpReviewForm);

  let modal_background = document.getElementById("review-form");
  modal_background.addEventListener("click", hideReviewForm);

  setUpIdsForStars();

  let submit_review_button = document.getElementById("submit-review");
  submit_review_button.addEventListener("click", submitReview);
});

function submitReview(event) {
  let stars_value = document.getElementById("review-stars").value;
  let body_value = document.getElementById("review-body").value;
  let product_id = document.getElementById("review-product_id").value;
  let token = document.getElementById("authenticity_token").value;
  let rating = {
    stars: stars_value,
    body: body_value,
    product_id: product_id,
    authenticity_token: token
  };
  let option = {
    method: "POST",
    body: JSON.stringify(rating),
    headers: {
      "Content-Type": "application/json"
    }
  };
  fetch("/products/submit-review", option)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    })
    .then(res => {
      document.getElementById("review-form").style.display = "none";
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error)
    });
}

function loadUpReviewForm() {
  let add_review_form = document.getElementById("review-form");
  add_review_form.style.display = "block";
}

function hideReviewForm(event) {
  if (event.target.id=="review-form") {
    event.target.style.display = "none";
  }
}

function setUpIdsForStars() {
  let children = document.getElementById("rating-input").children;
  for (var i=0; i<children.length; i++) {
    children[i].setAttribute("id", "star-" + (i+1).toString());
    children[i].addEventListener("click", function(event) {
      var svg = null;
      if (event.target.nodeName=="path") {
        svg = event.target.parentElement;
      } else {
        svg = event.target;
      }
      let id = svg.id;
      let arr = id.split("-");
      let num = parseInt(arr[1]);
      changeStarRating(num);
    });
  }
}

function changeStarRating(num) {
  document.getElementById("review-stars").value = num;
  var filledColor = "currentColor";
  var emptyColor = "#e0e0e0";
  for (var i=1; i<=num; i++) {
    document.getElementById("star-" + i.toString()).children[0].setAttribute("fill", filledColor);
  }
  for (var i=num+1; i<=5; i++) {
    document.getElementById("star-" + i.toString()).children[0].setAttribute("fill", emptyColor);
  }
}
