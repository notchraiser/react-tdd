import React from "react";
import "./styles.scss";

function Nav() {
  return (
    <div data-test="navcomponent">
    <nav className="wrapper">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul className="social">
        <li><a href="#" className="fb" data-test="fb">Facebook</a></li>
        <li><a href="#" className="tw" data-test="tw">Twitter</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Nav;
