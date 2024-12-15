import React, {useState} from "react";
import Data from "./data";
import "./accordian.css"

function Accordian(){
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId){
  
    setSelected(currentId == selected ? null : currentId);

  }
    //console.log(selected)
  
  return (
      <div className="wrapper">
        <div className="accordian">
          {
            Data && Data.length > 0 ? Data.map(dataItem =>
            <div className="item">
              <div className="author">
                <h2 onClick={() => handleSingleSelection(dataItem.id)}>{dataItem.author}
                </h2>
                <span onClick={() => handleSingleSelection(dataItem.id)}>+</span>
              </div>
              {
                selected === dataItem.id ? 
                <div className="quote">Quote: "{dataItem.quote}"</div> : null
              }
            </div>
            )
            : <div>No data found!</div>
          }
        </div>
      </div>
  )
}

export default Accordian;