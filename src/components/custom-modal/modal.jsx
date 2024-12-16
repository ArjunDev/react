import React, {useState} from "react";
import ModalPopUp from "./modal-popup";
import "./modal-popup.css"

export default function Modal(){
  const [showModalPopUp, setShowModalPopUp] = useState(false)

  function openModal(){
    setShowModalPopUp(!showModalPopUp);
  }

  function closeModalPopUp(){
    setShowModalPopUp(false);
    console.log("Clicked X")
  }

  return (
    <>
      <button 
        onClick={openModal}
        disabled={showModalPopUp}
        className={showModalPopUp ? "disable-modal-btn" : "modal-btn"}>Open Modal</button>
        <div>
          {showModalPopUp && <ModalPopUp closePopUp={closeModalPopUp}/>}
        </div>
    </>
  )
}