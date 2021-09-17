import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';

import RatingAverage from './rating_avg'
import Loading from './loading'
import ListOfReviews from './list_of_reviews'
import SubmitReviewForm from './submit_review_form'

function ProductReviews(props) {

  const [title, setTitle] = useState();
  const [rating_average, setRatingAverage] = useState();
  const [allreviews, setReviews] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/products/info/${props.product_id}`);
      const data = await response.json(response);
      setTitle(data["title"]);
      setRatingAverage(data["rating_average"]);
      setReviews(data["reviews"])
    }
    fetchData()
  }, [props])

  return (
   <div>
     <Suspense fallback={<Loading />}>
      <div className="container">
        <div className="content">
          <h1>{title}</h1>
          <RatingAverage rating_number={rating_average} setShowModal={setShowModal} />

          <hr/>

          <h2>Reviews</h2>

          <ListOfReviews allreviews={allreviews} />
        </div>

      </div>
      {showModal ? <SubmitReviewForm stars={ 3 } product_id={ props.product_id } setShowModal={setShowModal} /> : null }
    </Suspense>
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
