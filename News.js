import React from 'react';
import './News.css';
export const News = () => {
    return(
        <>

<section className="blog-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="titleN text-center">
                        <h2>Our latest news</h2>
                        <p>Home to the latest news and advice for small business owners , We offer a book-keeping service provided by the best tax consultants operating on the Slovenian market.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="blog-col">
                        <div className="blog-first-col">
                            <span>15 Jan 2020</span>
                            <img src="https://gico.io/apoha/images/blog/user.png" alt=""/>
                            <p>Shopnil shuvo</p>
                            <h4><a href="blog-single.html">With a company based in Slovenia you can work all across Europe</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-col" >
                        <img src="https://gico.io/apoha/images/blog/2.jpg" alt=""/>
                            </div>
                            <ul>
                                <li><a href="#t">15 Jan 2020</a></li>
                                <li>By</li>
                                <li><a href="#t">Anthony Zaller</a></li>
                            </ul>
                            <h4><a href="blog-single.html">With a company based in Slovenia you can work</a></h4>
                        </div>
                    
                
                <div className="col-lg-4 col-md-6">
                    <div className="blog-col">
                        <div className="blog-box">
                            <div className="blog-box-img">
                                <img src="https://gico.io/apoha/images/blog/3.jpg" alt=""/>
                            </div>
                            <ul>
                                <li><a href="#t">15 Jan 2020</a></li>
                                <li>By</li>
                                <li><a href="#t">Anthony Zaller</a></li>
                            </ul>
                            <h4><a href="blog-single.html">With a company based in Slovenia you can work</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="button-col mt-0 text-center">
                        <a className="btn btn-primary my-btn" href="blog.html" role="button">More News</a>
                    </div>
                </div>
                </div>
                </div>
    </section>
</>
)
}
