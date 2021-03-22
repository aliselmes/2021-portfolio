import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Footer(props){
    return(
        <footer className="site-footer">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col">
                        <FontAwesomeIcon icon={faChevronUp} inverse size="lg" className="footer-icon"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/alasdair-selmes/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" inverse className="mr-3 footer-icon"/></a>
                        <a href="https://github.com/aliselmes" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" inverse className="ml-3 footer-icon"/></a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 col-md-4">
                        <hr color="grey"/>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col">
                        <FontAwesomeIcon icon={faCopyright} /> 2021
                        Alasdair Selmes 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;