import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function ProductReviews(props) {

  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle("Product title")
  }, [props])

  return (
   <div>
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
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
