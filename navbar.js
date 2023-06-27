import React from "react";
import './navbar.css';


export const NavBar = () => {
    
    return(
        <>
        
 
      <div className="secondNavbar">
        <div className="container">
         <div class="row">

          
               <div class="col-lg-2 col-sm-6 col-7">
               < div class="header-logo">
                <a clss="whitelogo" href="#top">
               <img src="https://gico.io/apoha/images/logo.png" alt="icon"/>
               </a>
               </div>
               </div>

                <div class="col-lg-10 col-sm-6 col-5">      

                <div class="header-search-area">
                            <ul>
                                <li><i class="fa fa-search"></i>
                                </li>
                                <li><a href="#top">Free Consulting</a></li>
                            </ul>
                        </div>                           
            <nav id="main-nav">
         
              <ul>
             
                <li class="nav-items">
              
                  <div class="dropdown">
                  
                  <a class="nav-link" href="#top">Home</a>
                    <div class="dropdown-content">
                      <a href="#top">Home One</a>
                      <a href="#top">Home Two</a>
                    </div>
                  </div>
                </li>
                <li class="nav-items">
                  <div class="dropdown">
                  <a class="nav-link" href="#top">PRACTICE AREAS</a>
                    <div class="dropdown-content">
                      <a href="#top">Practice Areas</a>
                      <a href="#top">Practice Singles</a>
                    </div>
                  </div>
                </li>
                <li class="nav-items">
                  <div class="dropdown">
                  <a class="nav-link" href="#top">BLOG</a>
                    <div class="dropdown-content">
                      <a href="#top">Blog</a>
                      <a href="#top">Blog Single</a>
                    </div>
                  </div>
                </li>
                <li class="nav-items">
                  <div class="dropdown">
                  <a class="nav-link" href="#top">CONTACT</a>
                  </div>
                  </li>
                <li class="nav-items">
                  <div class="dropdown">
                  <a class="nav-link" href="#top">PAGES</a>
                    <div class="dropdown-content">
                      <a href="#top">Our Lawyer</a>
                      <a href="#top">Lawyer Single</a>
                      <a href="#top">Case Studies</a>
                      <a href="#top">Case Studies Single</a>
                      <a href="#top">Page 404</a>
                    </div>
                  </div>
                </li>
                <li class="nav-items">
                  <div class="dropdown">
                  <a class="nav-link" href="#top">ABOUT</a>
                 
                  </div>
                </li>
              </ul>
            </nav>
          </div>

                  
          </div>
          </div>
      </div>
  
   </>
    )
}
