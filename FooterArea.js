
import React from 'react';
import './footer.css';
export const Footer = () => {

return(
    <>
<footer className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-col footer-about-col">
                        <img src="https://gico.io/apoha/images/logo.png" alt="" className="img-fluid"/>
                        <p>Over 20 years of experience we’ll ensure you always get the best guidance. </p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-col footer-link-col">
                        <h5>Our Short Link</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Personal Injury</a></li>
                            <li><a href="#">Case Results</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="footer-col footer-latast-news-col">
                        <h5>Latest News</h5>
                        <div className="footer-latast-news-box">
                            <a href="#">The Pedagogy of Dignity: Prison Education, Part 2 Event Recap</a><p></p>
                            <span>12 Jan 2020</span>
                        </div>
                        <div className="footer-latast-news-box">
                            <a href="#">Reframing Transgender Violence</a><p></p>
                            <span>15 Jan 2020</span>
                        </div>
                        <div className="footer-latast-news-box">
                            <a href="#">Limits of the Law and Extra-legal Structures</a><p></p>
                            <span>15 Jan 2020</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-col footer-info-col">
                        <h5>Get In Touch</h5>
                        <p>yourmail@gmail.com</p>
                        <p className="mb-3">+088  12345678</p>
                        <p>767 Schermerhorn Extension, MC 5510New York</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copy-right-col">
                            <p>Copyright 2020 Apoha. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-left-img">
            <img src="https://gico.io/apoha/images/footer-left-img.png" alt=""/>
        </div>
        <div className="footer-right-img">
            <img src="https://gico.io/apoha/images/footer-right-img.png" alt=""/>
        </div>
    </footer>
    </>
    )
    }