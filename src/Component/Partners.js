import React, { Component } from "react";
import logo_1 from "../Assets/Images/MAlogo.png";
import logo_2 from "../Assets/Images/Robe.png";
import logo_3 from "../Assets/Images/chauvet-logo.png";
import logo_4 from "../Assets/Images/martin-logo.png";
import logo_5 from "../Assets/Images/Elation.png";
import logo_6 from "../Assets/Images/GLP.png";
import logo_7 from "../Assets/Images/Gloshine.jpg";
import logo_8 from "../Assets/Images/Tyler.jpeg";
import logo_9 from "../Assets/Images/Thomas.png";

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
              <img src={logo_2} alt="Robe" />
            </div>
            <div className="col-sm partners-item">
              <img src={logo_3} alt="Chauvet" />
            </div>
            <div className="col-sm partners-item">
              <img src={logo_7} alt="Gloshine" />
            </div>
            <div className="col-sm partners-item">
              <img src={logo_8} />
            </div> 
            <div className="col-sm partners-item">
              <img src={logo_9} />
            </div>
            <div className="col-sm partners-item">
                <img src={logo_4} alt="Martin" />
            </div>
            
            <div className="col-sm partners-item">
                <img src={logo_5} alt="Elation" />
            </div>
            <div className="col-sm partners-item">
                <img src={logo_6} alt="GLP" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
