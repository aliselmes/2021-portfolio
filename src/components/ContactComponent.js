import React from 'react';
import { Button } from 'reactstrap';

function Contact(props) {
    return(
        <section id="contact-section">
            <div className="container py-5">
                <div className="row my-3">
                    <div className="col">
                        <h1>CONTACT</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h3>Would you like to work with me?</h3>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <a href="mailto:a.selmes@gmail.com"><Button outline className="btn btn-lg" id="contact-btn">Get In Touch!</Button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact; 