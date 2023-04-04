import React from "react";
import "./Trade.css";
import img from "./g.png";
import img1 from "./h.png";
import img2 from "./i.png";

function Trade() {
  return (
    <div className="content">
      <div className="texts">
        <h1>Real-Time Trading Like Never Before</h1>
        <p>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit. Malesuada sit
          feugiat etiam riscus,massa fit
        </p>
        <div className="doub">
          <div className="bg1">
            <img src={img} alt="logo" />
          </div>
          <div className="bot">
            <h2> 1 Sec Operations</h2>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit. Malesuada
              sit feugiat etiam riscus,massa fit
            </p>
          </div>
        </div>

        <div className="doub">
          <div className="bg1">
            <img src={img1} alt="logo" />
          </div>

          <div className="bot">
            <h2> No Commissions</h2>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit. Malesuada
              sit feugiat etiam riscus,massa fit
            </p>
          </div>
        </div>
      </div>

      <div className="second">
        <img src={img2} alt="logo" />
      </div>
    </div>
  );
}

export default Trade;
