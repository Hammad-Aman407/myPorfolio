import React from 'react'

const ProjectBox = ({ projectLogo, projectName, projectDescription }) => {
    return (
        <>
            <div className="col-6 col-md-3 my-auto ps-4 pb-3 pe-4">
                <div className="bg-color-black rounded">
                    <div className="p-2 text-center">
                        <img src={projectLogo} className="img-fluid rounded w-100 h-auto" alt="..." />
                    </div>
                    <div className="p-2">
                        <h5>{projectName}</h5>
                        <p>{projectDescription}</p>
                    </div>
                    <div className="d-flex justify-content-around ps-2 pe-2 pb-3">
                        <a href="#" className="btn-demo bg-color-primary ps-2 pt-1 pb-1 pe-2">Demo</a>
                        <a href="#" className="btn-github bg-color-primary ps-2 pt-1 pb-1 pe-2">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectBox
