import React, { useState } from "react";
import "./index.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        backgroundImage:
          "url('https://media.istockphoto.com/id/937025126/photo/abstract-defocused-yellow-to-orange-soft-background.jpg?b=1&s=170667a&w=0&k=20&c=hdoC4o9dO5P7NckMPdR2V28g0gNU-WdzFVwKh1YLEVQ=')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={show ? "text" : "noText"}>I</div>
      <img
        className={show ? "heart" : ""}
        src="https://img.freepik.com/premium-vector/care-emoji-with-red-heart_136351-46.jpg"
        style={{ position: "relative", margin: "50px" }}
      />
      <p
        className={show ? "noText" : ""}
        style={{
          position: "absolute",
          top: "55%",
          left: "45%",
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
      <div className={show ? "text" : "noText"}>You!!</div>
    </div>
  );
}

export default App;
