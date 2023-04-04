import React from "react";
import "./Box.css";

function Box() {
  return (
    <div className="box shadow">
      <h1>
        Create your account
        <br />
        and start trading today
      </h1>
      <button className="bt">Get Started</button>
      <button className="bt1">View Pricing</button>
    </div>
  );
}

export default Box;
