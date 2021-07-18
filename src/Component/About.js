import React, { Component } from 'react';
import aboutImg from '../Assets/Images/Jerry.jpg';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Professional Lighting</span>
                                    <h2>About Us</h2>
                                </div>
                                <p>Event Technology Service combines state of the art equipment with passionate designers and technicians to provide production solutions that bring the audience to it’s feet every show.</p>
                                <p>Based in Albuquerque, NM, ETS services New Mexico and the great Southwest.</p>
                                
                                {/* <div className="btns">
                                    <a href="#" className="theme-btn">Meet Our Team</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg} alt="Jerry on a Truck"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;