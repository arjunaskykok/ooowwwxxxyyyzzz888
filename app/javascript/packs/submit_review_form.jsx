import React, { useState } from 'react'

import Stars from './stars'

function turnOffModal(setShowModal, event) {
  if (event.target.id=="review-form") {
    setShowModal(false)
  }
}

function submitReview(setShowModal, stars_value, body_value, product_id, token) {
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
    .then(res => {setShowModal(false)})
    .catch((error) => {
      console.log(error)
    })
}

export default function SubmitReviewForm(props) {
  const [stars, setStars] = useState(props.stars)
  const [body, setBody] = useState()

  const updateBody = (event) => {
    setBody(event.target.value)
  }

  return (
<div id="review-form" className="modal" onClick={(event) => turnOffModal(props.setShowModal, event) } >
  <div className="modal-content">
    <h3>What's your rating?</h3>
    <div className="form-label">
      Rating
    </div>
    <div className="form-input">
      <div className="rating-stars" id="rating-input">
        <Stars num={ stars } setStars={setStars} />
      </div>
      <input type="hidden" id="review-stars" name="review-stars" value={ stars } />
      <input type="hidden" id="review-product_id" name="review-product_id" value={props.product_id}  />
    </div>
    <div className="form-label">
      Review
    </div>
    <div className="form-input">
      <input type="text" id="review-body" name="review-body" onChange={updateBody} placeholder="Start typing...." />
    </div>
    <div className="form-input">
      <button className="review-button submit-review" id="submit-review"
              onClick={() => submitReview(props.setShowModal, stars, body, props.product_id, props.token)}>
        Submit review
      </button>
    </div>
  </div>
</div>

  )
}
