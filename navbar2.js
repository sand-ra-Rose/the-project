import React from "react";
import './navbar2.css';


export const NavBar2 = () => {
    
    return(
        <>
<div className="header-navbar" id="myHeader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-6 col-7">
                        <div className="header-logo">
                            <a className="logo-white" href="index.html"><img src="images/logo.png" alt=""/></a>
                            <a className="logo-black" href="index.html"><img src="images/logo-2.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-sm-6 col-5">
                        <div className="header-search-area">
                            <ul>
                                <li><i className="fa fa-search" aria-hidden="true" onclick="opensearch()"></i>
                                </li>
                                <li>Free Consulting</li>
                            </ul>
                        </div>
                        <div id="main-nav" className="stellarnav light right mobile"><a href="#top" className="menu-toggle"><span className="bars"><span></span><span></span><span></span></span> </a>
                            <ul><a  className="close-menu full" href="#top"><span className="icon-close"></span> Close</a>
                                <li className="current-menu-item menu-item-has-children">Home
                                    <ul>
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index-two.html">Home Two</a></li>
                                    </ul>
                                <a className="dd-toggle" href="#top" ><span className="icon-plus"></span></a></li>
                                <li className="menu-item-has-children">practice areas
                                    <ul>
                                        <li><a href="practice.html">practice areas</a></li>
                                        <li><a href="practice-single.html">practice single</a></li>
                                    </ul>
                                <a className="dd-toggle" href="#top"><span className="icon-plus"></span></a></li>
                                <li className="menu-item-has-children"><a href="#top">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-single.html">Blog single</a></li>
                                    </ul>
                                <a className="dd-toggle" href="#top"><span className="icon-plus"></span></a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li className="menu-item-has-children"><a href="#top">Pages</a>
                                    <ul>
                                        <li><a href="lawyer.html">Our lawyer</a></li>
                                        <li><a href="lawyer-single.html">lawyer single</a></li>
                                        <li><a href="case-studies.html">Case Studies</a></li>
                                        <li><a href="case-studies-single.html">case studies single</a></li>
                                        <li><a href="error-404.html">404 page</a></li>
                                    </ul>
                                <a className="dd-toggle" href="#top"><span className="icon-plus"></span></a></li>
                                <li><a href="about.html">about</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
        }