import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="bg-color-primary" id="contact">
                <div className="container mt-3">
                    <div className="row text-center pt-5 pb-5">
                        <div className="col-md-6">
                            <div>
                                <h2>Contact</h2>
                                <p>Fell free to reach out!</p>
                            </div>
                        </div>
                        <div className="col-md-6 m-auto">
                            <div className="d-flex justify-content-center align-items-baseline gap-2">
                                <div><i className="bi bi-envelope-fill fs-4"></i></div>
                                <div><a href="mailto:Hammadaman686@gmail.com">Hammadaman686@gmail.com</a></div>
                            </div>
                            <div className="d-flex justify-content-center align-items-baseline mt-2 gap-2">
                                <div><i className="bi bi-linkedin fs-4"></i></div>
                                <div><a href="https://www.linkedin.com/in/hammad-aman-13665b282">linkedin.com/Hammad Aman</a></div>
                            </div>
                            <div className="d-flex justify-content-center align-items-baseline mt-2 gap-2">
                                <div><i className="bi bi-github fs-4"></i></div>
                                <div><a href="https://github.com/Hammad-Aman407">github.com/Hammad-Aman407</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
