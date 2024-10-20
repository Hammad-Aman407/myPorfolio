import React from 'react'
import ProjectBox from './ProjectBox';

const Projects = () => {
    
    const projects = [
        {"logo":"src/assets/images/project.jpg","name":"Project A","description":"Lorem, ipsum dolor sit amet consectetur adipisicing."},
        {"logo":"src/assets/images/project.jpg","name":"Project B","description":"Lorem, ipsum dolor sit amet consectetur adipisicing."},
        {"logo":"src/assets/images/project.jpg","name":"Project C","description":"Lorem, ipsum dolor sit amet consectetur adipisicing."},
    ];

    return (
        <>
            <div id="projects">
                <div className="mt-5 text-center">
                    <h2>PROJECTS</h2>
                </div>
                <div className="mt-5">
                    <div className="row justify-content-center">
                        {
                            projects.map((myprojects,index) => {
                                return <ProjectBox key={index} projectLogo={myprojects.logo} projectName={myprojects.name} projectDescription={myprojects.description} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
