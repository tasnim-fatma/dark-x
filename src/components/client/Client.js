import React from "react";
import "./Client.css";
import i from "./m.png";
import i1 from "./n.png";
import i2 from "./o.png";

function Client() {
  return (
    <div className="client">
      <h1>What our clients say</h1>
      <div className="swipe">
        <div className="left">
          <img src={i} alt="logo" />
        </div>
        <div className="swip">
          <div className="info">
            <h1>"A truly next-gen trading app"</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              rhoncus eget iaculis vitae elementum, in sagittis, hac.
            </p>
            <h2>Vishal Saklani</h2>
            <h5>UI/UX Designer</h5>
          </div>
          <div className="pice">
            <img src={i2} alt="logo" />
          </div>
        </div>

        <div className="right">
          <img src={i1} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Client;
