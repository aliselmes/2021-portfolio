import React from 'react';
import { Button } from 'reactstrap';
import headshot from '../headshot_2019.jpg'

function About(props) {
    return(
        <section id="about-section">
            <div className="container py-5">
                <div className="row">
                    <div className="col pb-5">
                        <h1>ABOUT ME</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 pb-5 pb-md-0">
                    <img src={headshot} className="img-fluid" alt="profile-pic" id="profile-img" />
                    </div>
                    <div className="col-12 col-md-6 text-left">
                        <p>Hi, I'm Alasdair. I'm a former languages teacher and non-profit professional who has recently made the jump into the tech sector. I am currently looking for my first full-time role as a developer.</p>
                        <p>I am a graduate of <a id="nucamp-link" href="https://www.nucamp.co/">Nucamp Coding Bootcamp</a> and have experience working in the MERN stack. I really enjoy using React to create visually appealing and user-friendly websites.</p>
                        <p>If you'd like to find out more about me, feel free to check out my resume below, or get in touch!</p>
                        <a href="https://drive.google.com/file/d/17nisHLqnXfa6GhTjBHLWdQgFwRdorhDM/view?usp=sharing" target="_blank" rel="noreferrer"><Button outline className="btn" id="resume-btn">Resume</Button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;