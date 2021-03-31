import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

function RenderProject({project}) {
    return (
        <div className="row mb-5 pb-5">
            <div className="col-12 col-md-5 text-left pr-xl-5">
                <div className="row mb-3">
                    <div className="col">
                        <h4><strong>{project.name}</strong></h4>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <p>{project.text}</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <em><p>{project.tech}</p></em>
                    </div>
                </div>
                <div className="row mb-4">
                    {
                    project.live 
                    ?    
                    <div className="col-6 site-btn">
                        <a href={project.live} target="_blank" rel="noreferrer"><Button outline className="btn"><FontAwesomeIcon icon={faMousePointer} className="mr-1"/>Live Site</Button></a>
                    </div>
                    :
                    <div className="col-6">[Live site coming soon!]</div>
                    }
                    <div className="col-6 git-btn">
                        <a href={project.github} target="_blank" rel="noreferrer"><Button className="btn btn-light"><FontAwesomeIcon icon={faGithub} className="mr-1"/>Source Code</Button></a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-7">
                <img src={project.image} className="img-fluid project-img" alt={project.name} />
            </div>
        </div>
    );
}



function Projects (props) {

    const directory = props.projects.map(project => {
        return (
        <RenderProject project={project} key={project.id}/>
        );
    });

        return (
            <section id="projects-section">
                <div className="container my-5 my-xl-0">
                    <div className="row mb-lg-5">
                        <div className="col mb-5">
                            <h1>PROJECTS</h1>
                        </div>
                    </div>
                    {directory}
                </div>
            </section>
        );
}

export default Projects;