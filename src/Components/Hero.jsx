import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row pt-5">
                    <div className="col-md-6 order-md-0 order-1">
                        <div className="pt-5">
                            <h3 className="text-md-start text-center">Hi! I'm Hammad Aman</h3>
                        </div>
                        <div>
                            <p>I am an undergraduate software engineering student with strong focus on
                                web development. I am dedicated to writing clean, maintable code that
                                adheres to industry best practices. My goal is to ensure that the code
                                I produce is not only functional but also as efficient as poosible, contributing
                                to high-performing and scalable web applications.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1 order-0 text-center">
                        <div className="profile">
                            <img src="/myPortfolio/assets/images/DP.PNG" className="img-fluid w-50 h-auto floating-image" alt="..." />
                        </div>
                    </div>
                </div>
                <div>
                    <a className="btn-contact bg-color-primary pt-2 pb-2 ps-3 pe-3" href="#">Contact Me</a>
                </div>
            </div>
        </>
    )
}

export default Hero
