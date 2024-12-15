import React, {useState} from "react";
import {FaStar} from "react-icons/fa"
import "/src/components/star-rating/star-rating.css"

function StarRating({NoOfStars = 5}){

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleOnClick(currrentIndex){
    console.log("handleMouseClick",currrentIndex)
    setRating(currrentIndex);
  }

  function handleMouseMove(currrentIndex){
    console.log("handleMouseMove",currrentIndex)
    setHover(currrentIndex);
  }

  function handleMouseLeave(){
    console.log("handleMouseLeave",rating)
    setHover(rating);
  }

  return <div className="Stars">
    {
      [...Array(NoOfStars)].map((_,index) =>
      {
        index += 1; // increasing index from 0 to 1 to track better

        return < FaStar
        key={index}
        className= {index <= (hover || rating) ? "active" : "inactive"}
        onClick={()=>handleOnClick(index)}
        onMouseMove={()=>handleMouseMove(index)}
        onMouseLeave={()=>handleMouseLeave(index)}
        size={40}
        />
      })
    }
  </div>
}

export default StarRating