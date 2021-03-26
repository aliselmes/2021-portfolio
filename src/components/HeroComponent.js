import React from 'react';
import { Button } from 'reactstrap';

function Hero(props) {
    return(
        <section id="hero-section" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col text-md-left">
                        <h1>Hi, my name is <span id="name">Alasdair</span></h1>
                        <h1>I'm a Full Stack Developer.</h1>
                        <a href="#about-section"><Button outline className="btn btn-lg mt-3" id="hero-btn">Learn More</Button></a>
                    </div>
                </div>
            </div>  
        </section>
    );
};

export default Hero;