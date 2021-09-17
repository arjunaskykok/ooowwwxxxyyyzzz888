import React, { useState, useEffect } from 'react'

import FullStar from './full_star'
import EmptyStar from './empty_star'
import HalfStar from './half_star'

export default function Stars(props) {

  const [all_stars, setAllStars] = useState();

  useEffect(() => {
    let int_num = Math.floor(props.num);
    let stars_arr = [];
    var half = false;
    if ((props.num / 0.5) % 2 == 1) {
      half = true;
    }
    if (half) {
      let num = Math.floor(props.num)
      let num_half = Math.ceil(props.num)
      for (let step=1; step<=num; step++) {
        stars_arr.push(<FullStar key={`rating-avg-stars-${step}`} changeStars={(half) => {
          if (props.setStars) {
            if (half) {
              props.setStars(step-0.5)
            } else {
              props.setStars(step)
            }
          }
        }} />)
      }
      stars_arr.push(<HalfStar key={`rating-avg-stars-${num_half}`} changeStars={(half) => {
          if (props.setStars) {
            if (half) {
              props.setStars(num_half-0.5)
            } else {
              props.setStars(num_half)
            }
          }
      }} />)
      for (let step=num_half+1; step<=5; step++) {
        stars_arr.push(<EmptyStar key={`rating-avg-stars-${step}`} changeStars={(half) => {
          if (props.setStars) {
            if (half) {
              props.setStars(step-0.5)
            } else {
              props.setStars(step)
            }
          }
        }} />)
      }
    } else {
      for (let step=1; step<=int_num; step++) {
        stars_arr.push(<FullStar key={`rating-avg-stars-${step}`} changeStars={(half) => {
          if (props.setStars) {
            if (half) {
              props.setStars(step - 0.5);
            } else {
              props.setStars(step);
            }
          }
        }} />)
      }
      for (let step=int_num+1; step<=5; step++) {
        stars_arr.push(<EmptyStar key={`rating-avg-stars-${step}`} changeStars={(half) => {
          if (props.setStars) {
            if (half) {
              props.setStars(step - 0.5);
            } else {
              props.setStars(step);
            }
          }
        }} />)
      }
    }
    setAllStars(stars_arr)
  }, [props])

  return (
    <div>
      {all_stars}
    </div>
  )
}
