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
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                <p>There isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary you need to be sure</p>
                                
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