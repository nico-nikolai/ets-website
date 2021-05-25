import React from 'react';
import Banner from './Component/Banner';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
// import Testimonial from './Component/Testimonial';
// import Portfolio from './Component/Portfolio';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/Css/Responsive.css';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner/>
            <Carousel />
            <About/>
            <Service/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
