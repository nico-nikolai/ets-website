import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { fab, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../Assets/Images/gallery/img-2.jpg';
import Gallery_3 from '../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../Assets/Images/gallery/img-6.jpg';


class Portfolio extends Component {

    state = {
        onConcertLighting: false,
        onPermanentInstallation: false,
        onFestivalLighting: false,
        onDesign: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onFestivalLighting: true,
                onPermanentInstallation: true,
                onWebDesign: true,
                onDesign: true
            });
        }

        const concertLighting = event => {
            event.preventDefault();
            this.setState({
                onConcertLighting: true,
                onpermanentInstallation: false,
                onFestivalLighting: false,
                onDesign: false,
                isOpen: true,
            });
        }

        const permanentInstallation = event => {
            event.preventDefault();
            this.setState({
                onPermanentInstallation: true,
                onConcertLighting: false,
                onFestivalLighting: false,
                onDesign: false,
                isOpen: true,
            });
        }

        const festivalLighting = event => {
            event.preventDefault();
            this.setState({
                onFestivalLighting: true,
                onPermanentInstallation: false,
                onConcertLighting: false,
                onDesign: false,
                isOpen: true,
            });
        }

        const design = event => {
            event.preventDefault();
            this.setState({
                onFestivalLighting: false,
                onPermanentInstallation: false,
                onConcertLighting: false,
                onDesign: true,
                isOpen: true,
            })
        }


        console.log(this.state.onConcertLighting);

        return (
            <section id="portfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <h2>Examples of Our Work</h2>
                                </div>
                                <ul>
                                    <li><a data-filter="*" href="#" className="current" onClick={allElement}>All</a></li>
                                    <li><a data-filter=".Concert-Lighting" href="#" onClick={concertLighting}>Concert Lighting</a></li>
                                    <li><a data-filter=".Permanent-Installation" href="#" onClick={permanentInstallation}>Installs</a></li>
                                    <li><a data-filter=".Festival-Lighting" href="#" onClick={festivalLighting}>Festivals</a></li>
                                    <li><a data-filter=".Design" href="#" onClick={design}>Design</a></li>            
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                               
                                <div className={this.state.onPermanentInstallation ? "grid active" : "grid"
                                    && this.state.onFestivalLighting ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                   <img src={Gallery_1} className="img img-responsive" alt="" />
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onConcertLighting ? "grid active" : "grid" 
                                    && this.state.onPermanentInstallation ? "grid active" : "grid"
                                    && this.state.onFestivalLighting ? "grid active" : "grid"
                                    && this.state.onDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_2} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onConcertLighting ? "grid active" : "grid"
                                    && this.state.onFestivalLighting ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_6} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPermanentInstallation ? "grid active" : "grid"
                                    && this.state.onDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_5} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPermanentInstallation ? "grid active" : "grid"
                                    && this.state.onDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_3} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPermanentInstallation ? "grid active" : "grid"
                                    && this.state.onFestivalLighting ? "grid active" : "grid"
                                    && this.state.onDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_4} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;