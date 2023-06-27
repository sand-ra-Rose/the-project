import React from 'react';
import './subscribe.css';
export const Subscribe = () => {

return(
    <>

<section className="subscribe-area pt-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subscribe-col">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subscribe-box">
                                    <h2>Don’t miss to subscribe to our new feeds</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="subscribe-box">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Your email address"/>
                                        <div className="input-group-prepend">
                                          <button type="submit" className="btn btn-primary"><i className="fa fa-arrow-right"></i></button>
                                        </div>
                                    </div>
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