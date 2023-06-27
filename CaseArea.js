import React from "react";
import './casearea.css';


export const CaseArea = () => {
    
    return(
        <>
        
        <section className="case-area " >
        <div className="bg-img2 theme-background">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="my-title text-center">
                        <h2>The Experience Needed in Every Case</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container custom-container">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="case-col">
                        <img src="https://gico.io/apoha/images/case/1.jpg" alt="" className="img-fluid"/>
                        <div className="case-col-content clearfix">
                            <a href="#top"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <h5><a href="case-studies-single.html">Defective Rental Car</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="case-col">
                        <img src="https://gico.io/apoha/images/case/2.jpg" alt="" className="img-fluid"/>
                        <div className="case-col-content clearfix">
                            <a href="#top"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <h5><a href="case-studies-single.html">Family Law</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="case-col">
                        <img src="https://gico.io/apoha/images/case/3.jpg" alt="" className="img-fluid"/>
                        <div className="case-col-content clearfix">
                            <a href="#top"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <h5><a href="case-studies-single.html">Drunk Driving Accident</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="case-col">
                        <img src="https://gico.io/apoha/images/case/4.jpg" alt="" className="img-fluid"/>
                        <div className="case-col-content clearfix">
                            <a href="#top"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <h5><a href="case-studies-single.html">Lower Back Injury</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="button-col text-center">
                        <a className="btn btn-primary my-btn" href="lawyer.html" role="button">more cases </a>
                    </div>
                    <div className="call-text">
                        <h5>Have a Question about your Case? Call us today at (0)88 451-4522</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
        
        </>

    )
}