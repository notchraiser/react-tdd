import React from "react";
import "./styles.scss";

function Nav() {
  return (
    <>
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
        <li><a href="#" class="fb">Facebook</a></li>
        <li><a href="#" class="tw">Twitter</a></li>
      </ul>
    </nav>
    </>
  );
}

export default Nav;
