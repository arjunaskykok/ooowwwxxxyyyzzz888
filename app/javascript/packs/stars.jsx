import React, { useState, useEffect } from 'react'

import FullStar from './full_star'
import EmptyStar from './empty_star'

export default function Stars(props) {

  const [all_stars, setAllStars] = useState();

  useEffect(() => {
    let int_num = Math.floor(props.num);
    let stars_arr = []
    for (let step=1; step<=int_num; step++) {
      stars_arr.push(<FullStar key={`rating-avg-stars-${step}`} changeStars={() => {
        if (props.setStars) {
          props.setStars(step);
        }
      }} />)
    }
    for (let step=int_num+1; step<=5; step++) {
      stars_arr.push(<EmptyStar key={`rating-avg-stars-${step}`} changeStars={() => {
        if (props.setStars) {
          props.setStars(step);
        }
      }} />)
    }
    setAllStars(stars_arr)
  }, [props])

  return (
    <div>
      {all_stars}
    </div>
  )
}
