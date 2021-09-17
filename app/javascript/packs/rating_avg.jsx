import React from 'react'


export default function RatingAverage(props) {
  return (
    <div className="rating">
      <div className="rating-inner">
        <div className="rating-number">{ props.rating_number }</div>
        <div className="rating-stars">
        </div>
      </div>
      <div className="add-review">
        <button className="review-button" id="add-review">
          Add review
        </button>
      </div>
    </div>
  )
}

