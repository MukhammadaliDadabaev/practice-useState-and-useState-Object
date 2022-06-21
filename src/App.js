import React, { useState } from "react";

import "./App.css";

function App() {
  // STATE MESSAGE
  const [messages, setMessage] = useState(0);

  // STATE CONTACT
  const [contact, setContact] = useState({
    username: "Ali developer",
    gender: "👳‍♂️ male",
  });

  // FUNCTION
  function addMessage() {
    setMessage((addMess) => addMess + 1);
  }
  function delMessage() {
    setMessage((delMess) => delMess - 1);
  }

  // FUNCTION CONTACT
  function changeContact() {
    // Bu prev-default xolda ishlaydi
    setContact((prev) => {
      return {
        ...prev,
        username: "Saydullo",
        gender: "👨‍🎓 male",
      };
    });
  }

  return (
    <div className="container-fluid wrapper">
      <div className="card">
        <div className="title">
          <h1>CONTACT</h1>
          <h2>
            <i className="fa-solid fa-message"></i>
            Message: {messages}
            <span className="alert-message">{messages}</span>
          </h2>
        </div>
        <hr className="line" />
        <div className="content-title">
          <h4>
            <i className="fa-solid fa-user-group"></i> {contact.username}{" "}
            {contact.gender}
          </h4>
          <a href="#!" className="edit">
            <i className="fa-solid fa-marker"></i>
            <span onClick={changeContact}>edit</span>
          </a>
        </div>
        <hr />
        <div className="group">
          <button className="btn btn-primary" onClick={addMessage}>
            ADDED
          </button>
          <button className="btn btn-warning" onClick={delMessage}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
