import "./modal-popup.css"

export default function ModalPopUp({closePopUp}){

  return(
    <>
      <div className="modalpopup-container">
        <div className="modal-header">
          <h2>Header</h2>
          <span 
          className="modalpopup-close-btn"
          onClick={closePopUp}>X</span>
        </div>
        <div className="modal-body">
          <p>Modal content</p>
        </div>
        <div className="modal-footer">
          <footer>Footer</footer>
        </div>
      </div>
      {console.log("I am Pop-Up")}
    </>
    )
}