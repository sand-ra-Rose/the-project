
import React from "react";
import './About.css';


export const About = () => {
    
    return(
        <>
<section className="about-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-col">
                        <div className="about-img">
                            <img src="https://gico.io/apoha/images/about/1.png" alt="" className="img-fluid"/>
                            <div className="about-on-image-content">
                                <img src="https://gico.io/apoha/images/icons/batch.png" alt=""/>
                                <h3>Since <span>1970</span></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. normal distribution of letters</p>
                                <p className="hilight-text">18 Years Experience with Finance Services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-col">
                        <div className="about_description">
                            <h2>We are All kinds of injury Attorney</h2>
                        </div>
                        <h5>Representing Injured Alaskans in Complex Cases</h5>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose </p>
                        <p>Our Business Consulting service is based on a holistic approach that brings together business</p>
                        <a className="btn btn-primary my-btn" href="#top">Learn About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
    }