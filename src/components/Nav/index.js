import React, { useCallback, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtn2,
  NavImage,
} from "./NavbarElements";
import logo from "./g.png"; // import your logo

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = useCallback(() => {
    setShowNav((showNav) => !showNav);
  }, []);

  return (
    <>
      <Nav>
        <div onClick={toggleNav}>
          <Bars />
        </div>
        <h1>Dark X</h1>

        <NavImage to="/">
          <img src={logo} alt="logo" />
        </NavImage>
        <NavMenu className={showNav ? "show" : null}>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/events" activeStyle>
            About
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Pricing
          </NavLink>
          <NavLink to="/team" activeStyle>
            pages
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            cart(0)
          </NavLink>
          {/* Second Nav */}
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>

          <NavBtn2>
            <NavBtnLink to="/getstarted">Get Started</NavBtnLink>
          </NavBtn2>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
