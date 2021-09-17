import React from 'react'

import Stars from './stars'

export default function ListOfReviews(props) {
  return (
    <div id="reviews-list">
      { Array.isArray(props.allreviews) && props.allreviews.map((review, index) => (
      <div className="review-row" key={`review-row-${index}`}>
        <div className="review-row-stars">
          <Stars num={ review.stars } />
        </div>
        <div className="review-row-number">
          {review.stars}
        </div>
        <div className="review-row-text">
          <span>, </span>
          <span>{review.body}</span>
        </div>
      </div>
      ))}
    </div>
  )
}

