import React, { Component} from 'react';
import Logo from '../Assets/Images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home_1 from '../Assets/Images/header-slides/CHRIS STAPLEON.jpg';
import Home_2 from '../Assets/Images/header-slides/Dracula 3.jpg';
import Home_3 from '../Assets/Images/header-slides/EDM AAB 3.jpg';
import Home_4 from '../Assets/Images/header-slides/Isuzu (1 of 1)-2.jpg';
import Home_5 from '../Assets/Images/header-slides/Dracula 4.jpg';
import Home_6 from '../Assets/Images/header-slides/BOXING TV 1.JPG';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    state = {
        isOpen: false,

    }
    
    render() {

        return(
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                        <div id="navbar" className={ this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({isOpen: false})}>
                                <FontAwesomeIcon icon={faTimes} />    
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({isOpen: false})}>
                            <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <ul className="nav navbar-nav">
                                <li className="home">
                                    <a href="#home">
                                        <img src={Home_1} alt=""/>
                                    </a>
                                </li>
                                <li className="gallery">
                                    <a href="#gallery">
                                        <img src={Home_5} alt="" />
                                    </a>
                                </li>
                                <li className="about">
                                    <a href="#about">
                                        <img src={Home_2} alt=""/>
                                    </a>
                                </li>
                                <li className="service">
                                    <a href="#service">
                                        <img src={Home_3} alt=""/>
                                    </a>
                                </li>
                                {/* <li className="portfolio">
                                    <a href="#portfolio">
                                        <img src={Home_4} alt=""/>
                                    </a>
                                </li> */}
                                {/* <li className="blog">
                                    <a href="#blog">
                                        <img src={Home_5} alt=""/>
                                    </a>
                                </li> */}
                                <li className="partners">
                                    <a href="#partners">
                                        <img src={Home_4} alt="" />
                                    </a>
                                </li>
                                <li className="contact">
                                    <a href="#contact">
                                        <img src={Home_6} alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button className="menu-open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;