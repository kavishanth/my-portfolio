import React from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-iconsclear"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
{/* <form className="d-flex">
      <button className="btn btn-outline-light" type="submit"><img src={logo} alt="logo..." width="100" /></button>
    </form> */}
    <a class="navbar-brand" href="#"><img src={logo} alt="logo..." width="100" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars}/>
  </button>

  <div className="navbar" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link " aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " aria-current="page" href="#">Photos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " aria-current="page" href="#">locations</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">settings</a>
      </li>
        </ul>
  </div>

</div>
</nav>

  )
}

export default Navbar