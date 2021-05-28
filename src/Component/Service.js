import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import serviceImg_1 from '../Assets/Images/isotopes stadium calvary 2 copy.jpg';
import serviceImg_2 from '../Assets/Images/Taos Mountain Music Matisyahu 2 copy.JPG';
import serviceImg_3 from '../Assets/Images/IMG_5218 copy.jpg';


class Service extends Component {
    render () {
        return (
            <div id="service" className="hx-service-area ptb-100-70">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_2} alt="Concert in Taos, NM"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Lighting</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_1} alt="Load in for Calvary July 4th at Isotopes Park"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Design</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_3} alt="TV Show Lighting"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Install</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;