import React from 'react'
import Skillsbox from './Skillsbox';

const Skills = () => {

    const skills = [
        { "logo": "src/assets/images/html.png" },
        { "logo": "src/assets/images/css.webp" },
        { "logo": "src/assets/images/javascript.webp" },
        { "logo": "src/assets/images/reactjs.webp" },
        { "logo": "src/assets/images/nodejs.png" },
        { "logo": "src/assets/images/expressjs.png" },
        { "logo": "src/assets/images/mongodb.webp" },
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
