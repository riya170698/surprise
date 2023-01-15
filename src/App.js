import React, { useState } from "react";
import "./index.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className={show ? "text" : "noText"}>I</div>
      <div className="image">
        <img
          className={show ? "heart" : ""}
          src="https://img.freepik.com/premium-vector/care-emoji-with-red-heart_136351-46.jpg"
        />
        <p
          className={show ? "noText" : ""}
          style={{
            position: "absolute",
            top: "53%",
            left: "40%",
            fontSize: "2.4rem",
            fontFamily: "Gill Sans",
            color: "white",
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={() => {
            setShow(true);
          }}
        >
          Press Me
        </p>
      </div>
      <div className={show ? "text" : "noText"}>You!!</div>
    </div>
  );
}

export default App;
