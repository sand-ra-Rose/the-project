import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
export const Header = () => {
    return(
        <>
  <div className="container"></div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
 
      <div classNameName="container-fluid">
        <div classNameName="navbrand">Pacific Coast Highway, Suite 525 El Segundo</div>
        <div classNameName="nav-link active text-warning px-5" href="/#"><i classNameName="fa fa-arrow-right"></i> Appointment</div>
      
        <div classNameName="collapse navbar-collapse justify-content-end">
          <ul classNameName="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="/#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">Eng</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/#">Eng</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">Ara</a>
                </li>                   
              </ul>
            </li>
  
            <li classNameName="nav-item px-1 mt-2">
              <i className="fa fa-facebook"></i>
            </li>
            <li classNameName="px-1 mt-2">
              <i className="fa fa-twitter"></i>
            </li>
            <li classNameName="px-1 mt-2">
               <i classNameName="fa fa-linkedin"></i>
            </li>

            <li classNameName="px-1 mt-2">
              <i className="fa fa-globe"></i>
            </li>
            <li classNameName="px-1 mt-2">
              <i className="fa fa-google-plus"></i>
            </li>
            </ul>
        </div>
      </div>

    </nav>


        </>
    )

}