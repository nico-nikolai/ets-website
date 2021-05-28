import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    
    render() {
        
        return (
            <div id="contact" className="contact-page-area section-padding go-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-md col-sm">
                            <div className="contact-page-item">
                                <h1>Contact Us</h1>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                <div className="address">
                                    <h3>Address</h3>
                                    <span>2523 Comanche Rd NE, Albuquerque, NM 87107</span>
                                </div>
                                <div className="phone">
                                    <h3>Phone</h3>
                                    <span><a role="button" className="btn btn-link" href="tel:+15056040050"><FontAwesomeIcon icon={faPhone} /> 505-604-0050</a></span>
                                </div>
                                <div className="email">
                                    <h3>Email</h3>
                                    <span><a role="button" className="btn btn-link" href="mailto:ekld@aol.com"><FontAwesomeIcon icon={faEnvelope} /> ekld@aol.com</a></span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="contact-area contact-area-2 contact-area-3">
                                <h2>Quick Contact Form</h2>
                                <div className="contact-form">
                                    <form method="post" className="contact-validation-active" id="contact-form">
                                        <div className="half-col">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="half-col">
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="half-col">
                                            <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone"/>
                                        </div>
                                        <div className="half-col">
                                            <input type="text" name="address" id="address" className="form-control" placeholder="Address"/>
                                        </div>
                                        <div>
                                            <textarea className="form-control" name="note"  id="note" placeholder="Your Massage..."></textarea>
                                        </div>
                                        <div className="submit-btn-wrapper">
                                            <button type="submit" className="theme-btn-s3">Submit</button>
                                            <div id="loader">
                                                <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                            </div>
                                        </div>
                                        <div className="clearfix error-handling-messages">
                                            <div id="success">Thank you</div>
                                            <div id="error"> Error occurred while sending email. Please try again later. </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-map">
                                <iframe title="Google Map to ETS" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52229.616630671364!2d-106.61353066791641!3d35.0979443408564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19544ff967c803b2!2z4oCL4oCL4oCLRVZFTlQgVEVDSE5PTE9HWSBTRVJWSUNFUw!5e0!3m2!1sen!2sus!4v1621293393248!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;