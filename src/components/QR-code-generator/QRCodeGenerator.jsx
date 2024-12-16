import React,{useState} from "react";
import "./QRCodeGenerator.css"

//could not able to import "react-qr-code"

function QRCodeGenerator(){
  
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQRCode] = useState("");
 
  function handleQRCode(){
    setQRCode(inputValue);
    setInputValue("")
    
  }
  //console.log(qrCode)
  return (
    <div className="wrapper">
      <div className="qr-code-container">
        <h2>QR Code Generator</h2>
        <div className="input-container">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text" 
            name="qr-code" 
            placeholder="Enter a text"
          />
          <button 
          className="generate-qr-btn"
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={handleQRCode}>Generate</button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default QRCodeGenerator