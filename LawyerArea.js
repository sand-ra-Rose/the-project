import React from "react";
import './LawyerArea.css';
export const LawyerArea = () => {
    return(
        <>
        <div className="containerL">
            <div className="row justify-content-center">
                <div className="col-lg-8 ">
                <div className ="title">
                    <h2>Our Lawyers</h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p> 
                </div>
                
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                 <div clas="card">
                    <div className="card-img">
                        <img src="https://gico.io/apoha/images/lawyer/1.jpg " alt="" className="img-fluid"/>

                    </div>
                    <div className="card-body">
                        <h4>Jon Moris</h4>
                        <p>Owner, Partner</p>
                </div>
            </div>
            </div>

            <div className="col-lg-3 col-md-6">
                 <div clas="card">
                    <div className="card-img">
                        <img src="https://gico.io/apoha/images/lawyer/2.jpg " alt="" className="img-fluid"/>

                    </div>
                    <div className="card-body">
                        <h4>Mark Colis</h4>
                        <p>Lawyer Family</p>
                </div>
            </div>
            </div>

            <div className="col-lg-3 col-md-6">
                 <div clas="card">
                    <div className="card-img">
                        <img src="https://gico.io/apoha/images/lawyer/3.jpg " alt="" className="img-fluid"/>

                    </div>
                    <div className="card-body">
                        <h4>Tom Latham</h4>
                        <p>Business Family</p>
                </div>
            </div>
            </div>

                     <div className="col-lg-12 col-md-12">
                    <div className="button-col text-center">
                        <a className="my-btn" href="lawyer.html" role="button">All Lawyer</a>
                    </div>
                </div>

            </div>
            </div>
        
        
        </>
    )
}