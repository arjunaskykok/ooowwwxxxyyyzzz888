import React from 'react';

import Stars from './stars';

export default function RatingAverage(props) {
  return (
    <div className="rating">
      <div className="rating-inner">
        <div className="rating-number">{ props.rating_number }</div>
        <div className="rating-stars">
          <Stars num={ props.rating_number } />
        </div>
      </div>
      <div className="add-review">
        <button className="review-button" id="add-review" onClick={() => props.setShowModal(true) }>
          Add review
        </button>
      </div>
    </div>
  )
}

