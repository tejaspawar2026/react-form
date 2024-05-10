import React from "react";
import "../App.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [tnc, setTnc] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function getFormData(e) {
    e.preventDefault();
    const formData = {
      name: name,
      document: document,
      tnc: tnc
    };
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
    
    console.log(JSON.stringify(formData));
  }

  return (
    <div>
      {isSubmitted && (
        <div style={{ backgroundColor:"#dff0d8", padding:"10px", borderRadius:"5px", marginBottom:"10px" }}>
        Form Submitted Successfully !
        </div>
      )}

      <form onSubmit={getFormData}>
        <div className="form-container">
          <label className="input-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter you name"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="input-label" htmlFor="document">
            Document:
          </label>
          <select
            name="document"
            id="document"
            onChange={(e) => setDocument(e.target.value)}
          >
            <option hidden>-- Select Document --</option>
            <option value="aadhar">Aadhar</option>
            <option value="bankpassbook">Bank Passbook</option>
            <option value="drivinglicense">Driving License</option>
            <option value="pan">Pan</option>
            <option value="passport">Passport</option>
          </select>

          <label className="input-label" htmlFor="tnc">
            Terms & Conditions
          </label>
          <div className="radio-container">
            <label htmlFor="checkinp1">Yes</label>
            <input
              type="radio"
              id="checkinp1"
              name="tnc"
              onChange={(e) => setTnc(true)}
            />
            <label htmlFor="checkinp2">No</label>
            <input
              type="radio"
              id="checkinp2"
              name="tnc"
              onChange={(e) => setTnc(false)}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
