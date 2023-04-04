import React from "react";
import "./Navbar.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "./g.png";

function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <div className="logopart">
          <h1>Dark X</h1>
          <img src={logo} alt="logo" />
        </div>

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Annual Report
          </NavLink>
          <NavLink to="/team" activeStyle>
            Teams
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
          <button>Get Started</button>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;
