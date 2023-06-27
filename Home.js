import React from 'react'
import './Home.css';
export const Home = () => {
  return (
    <>
  <div className="row">
  <div className="container">
    <div className="box-banner">
        <div classNameName="row align-items-center">
            <div classNameName="col-lg-7 ms-5">
                <a classNameName="text-warning" href="/#">Special approach</a>
                <h1 classNameName="text-light fw-bolder">The Law Firm You Need</h1>
                <h4 classNameName="text-secondary">We believe that strength of a law firm does not rest in the number 
                of lawyers within the firm, but in the commitment of each lawyer to provide the highest possible 
                degree of client service at a competitive cost.</h4>
                <button classNameName="btn btn-primary">Our Services</button>
            </div>
        </div>
    </div> 
<div className="col-lg-4">
      <div className="container2">
        <h1>Free Case Evaulation</h1>
         <h4>Get a free case evaluation</h4>
        <span>(+088) 471-2322</span>
      </div>
      </div>
    </div>
    </div>
 </>
  )
}