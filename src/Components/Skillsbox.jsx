import React from 'react'

const Skillsbox = ({ skillLogo }) => {
    return (
        <>
            <div className="col-6 col-md-3 my-auto ps-5 pe-5 pb-3">
                <img src={skillLogo} className="img-fluid w-50 h-auto" alt="..." />
            </div>
        </>
    )
}

export default Skillsbox
