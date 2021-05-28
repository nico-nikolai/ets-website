import React, { Component } from "react";
import logo_1 from "../Assets/Images/MAlogo.png";
import logo_2 from "../Assets/Images/Chamsyslogo.png";
import logo_3 from "../Assets/Images/chauvet-logo.png";
import logo_4 from "../Assets/Images/martin-logo.png";
import logo_5 from "../Assets/Images/high-end-logo.png";
import logo_6 from "../Assets/Images/tomcat-logo.png";

export default class Partners extends Component {
  render() {
    return (
      <div id="partners" className="container">
        <h1 className="gallery-title">Our Partners</h1>
        <div className="partners-spacing">
          <div className="row">
            <div className="col-sm partners-item">
              <img src={logo_1} alt="MA" />
            </div>
            <div className="col-sm partners-item">
              <img src={logo_2} alt="Chamsys" />
            </div>
            <div className="col-sm partners-item">
              <img src={logo_3} alt="Chauvet" />
            </div>
            <div className="col-sm partners-item">
                <img src={logo_4} alt="Martin" />
            </div>
            <div className="col-sm partners-item">
                <img src={logo_5} alt="High End Systems" />
            </div>
            <div className="col-sm partners-item">
                <img src={logo_6} alt="Tomcat" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
