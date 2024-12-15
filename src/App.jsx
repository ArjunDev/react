import Accordian from "./components/accordian/Accordian"
import StarRating from "./components/star-rating/StarRating"
import ImageSlider from "./components/image-slider/ImageSlider"

function App() {
  
  return (
    <>
      {/* <Accordian /> */}
      {/* <StarRating NoOfStars={10}/> */}
      <ImageSlider 
        url={"https://picsum.photos/v2/list?"}
        page={"1"}
        limit={"10"} />
    </>
  )
}

export default App
