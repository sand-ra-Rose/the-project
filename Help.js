import React from 'react'
import './Help.css';
export const HelpArea = () => {
  return (
    <>
         
         
   
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="help-col">
                        <div className="title">
                            <h2>Need legal help? Talk to our lawyer </h2>
                        </div>
                       
                            <input className="form-control" type="text" placeholder="Full Name"/>
                            <input className="form-control" type="email" placeholder="Email"/>
                            <select className="form-control">
                              <option>How can we help you ?</option>
                              <option>Car Accident</option>
                              <option>Catastrophic Injury</option>
                              <option>Insurance Claim</option>
                              <option>Personal Injury</option>
                              <option>Premises Liability Claims</option>
                            </select>
                            <button className="btn btn-primary" type="submit">Request for help</button>
                          
                            <span>The Law Offices of Anthony Abbott has been working for the people in the great state of California for over 50 years</span>
                       
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}