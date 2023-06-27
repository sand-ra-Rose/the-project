import React from "react";
import './CounterArea.css';


export const CounterArea = () => {
    
    return(
        <>

<section className="counter-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="counter-col">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6">
                                <div className="counter-box">
                                    <img src="https://gico.io/apoha/images/icons/case-icon.png" alt=""/>
                                    <h5>cases won</h5>
                                    <div className="count">1589</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="counter-box">
                                    <img src="https://gico.io/apoha/images/icons/solved-icon.png" alt=""/>
                                    <h5>solved cases</h5>
                                    <div className="count">3210</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="counter-box">
                                    <img src="https://gico.io/apoha/images/icons/staff-icon.png" alt=""/>
                                    <h5>staff members</h5>
                                    <div className="count">180</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="counter-box">
                                    <img src="https://gico.io/apoha/images/icons/country-icon.png" alt=""/>
                                    <h5>country firms</h5>
                                    <div className="count">120</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}