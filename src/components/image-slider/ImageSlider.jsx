import React, {useState, useEffect} from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./image-slider.css"

function ImageSlider({url, page=1, limit=10}){
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchImages(getUrl){
  try{
    const response = await fetch(`${getUrl}page=${page}&limit=${limit}`);
    const data = await response.json();

    if(data){
      setImages(data);
      setLoading(false);
      //console.log(data);
    }
  } catch(e){
    setErrorMsg(e.message);
    setLoading(false);
  }
  }

  function handleLeftArrow(){
    setCurrentSlide(currentSlide === 0 ? 
      images.length - 1 : currentSlide - 1)
      //console.log("clicked on left arrow")
  }
  function handleRighttArrow(){
    setCurrentSlide(currentSlide === images.length - 1 ? 
      0 : currentSlide + 1)
    //console.log("clicked on right arrow") 
  }

  useEffect(() => {
    if(url !== ""){
      fetchImages(url);
      setLoading(true);
    }
  },[url])

  if(loading){
    //console.log("Loading images! please wait") 
    return (
      <div className="loading-msg">
        <p>Loading images! please wait</p>
      </div>
      )
  }
  if(errorMsg !== null){
    return <div className="error-msg">Error occurred! try again</div>
  }
  //console.log(images);
  return(
    <div className="container">
      <BsArrowLeftCircleFill 
        onClick={handleLeftArrow} 
        className="arrow arrow-left"/>
      {
        images && images.length ? images.map((imageItem, index) =>
          <img 
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
          />) 
          : null } 
      <BsArrowRightCircleFill 
        onClick={handleRighttArrow} 
        className="arrow arrow-right"/> 
      <span className="circle-indicators">
        {
          images && images.length ? images.map((_, index) =>(
            <button 
              key={index}
              className={
                currentSlide === index ? "current-indicator" :
                "current-indicator inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>)) : null 
        }
      </span>    
    </div>
  );
}
export default ImageSlider