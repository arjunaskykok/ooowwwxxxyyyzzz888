import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import RatingAverage from './rating_avg'

function ProductReviews(props) {

  const [title, setTitle] = useState();
  const [rating_average, setRatingAverage] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/products/info/${props.product_id}`);
      const data = await response.json(response);
      setTitle(data["title"]);
      setRatingAverage(data["rating_average"]);
    }
    fetchData()
  }, [props])

  return (
   <div>
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
        <RatingAverage rating_number={rating_average} />

        <hr/>

        <h2>Reviews</h2>

      </div>

    </div>

   </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  let product_id = document.getElementById("product_id").innerHTML;
  let authenticity_token = document.getElementById("authenticity_token").value;
  ReactDOM.render(
    <ProductReviews product_id={product_id} token={authenticity_token} />,
    document.getElementById("root"),
  )
})
