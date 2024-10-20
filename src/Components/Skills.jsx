import React from 'react'
import Skillsbox from './Skillsbox';

const Skills = () => {

    const skills = [
        { "logo": "/myPortfolio/src/assets/images/html.png" },
        { "logo": "/myPortfolio/src/assets/images/css.webp" },
        { "logo": "/myPortfolio/src/assets/images/javascript.webp" },
        { "logo": "/myPortfolio/src/assets/images/reactjs.webp" },
        { "logo": "/myPortfolio/src/assets/images/nodejs.png" },
        { "logo": "/myPortfolio/src/assets/images/expressjs.png" },
        { "logo": "/myPortfolio/src/assets/images/mongodb.webp" },
    ];

    return (
        <>
            <div id="skills">
                <div className="mt-5 text-center">
                    <h2>SKILLS</h2>
                </div>
                <div className="mt-5">
                    <div className="row justify-content-center text-center">
                        {
                            skills.map((myskills, index) => {
                                return <Skillsbox key={index} skillLogo={myskills.logo} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
