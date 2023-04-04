import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavImage = styled.nav`
   {
    height: 80px;
    ${"" /* margin-right: 130px; */}
    width: 60px;
    margin-top: 10px;
    /* display: flex; */
    -webkit-box-pack: justify;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  background: #13111a;
  height: 85px;
  min-height: 85px;
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;

  @media screen and (max-width: 768px) {
    height: auto;
    display: block;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 16px;
    align-items: center;
    justify-content: center;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: none;

    &.show {
      display: block;
    }
  }
`;

export const NavBtn = styled.nav`
  padding: 20px;
  border: none;
  outline: none;
  position: relative;
  margin-left: 112px;

  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  .NavBtn::before {
    content: "Get Started";
    color: white;
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    border-radius: 50px;
    background-color: #13111a;
  }
`;

export const NavBtn2 = styled.nav`
  padding: 14px;
  border: none;
  outline: none;
  position: relative;
  border-radius: 50px;
  background: linear-gradient(to right, rgb(0, 255, 163), rgb(220, 31, 255));
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 50px;

  ::before {
    content: "Get Started";
    color: white;
    padding: 12px;
    position: absolute;
    text-align: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 50px;
    background-color: rgb(19, 17, 26);
  }

  @media screen and (max-width: 768px) {
    padding: 14px;
    width: 80px;
    text-align: center;
    border: none;
    outline: none;
    position: relative;
    border-radius: 50px;
    margin-left: 112px;
    background: linear-gradient(to right, rgb(0, 255, 163), rgb(220, 31, 255));
    cursor: pointer;
    display: flex;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 50px;

    ::before {
      content: "Get Started";
      color: white;
      padding: 12px;
      position: absolute;
      text-align: center;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 50px;
      background-color: rgb(19, 17, 26);
    }
  }
`;

export const NavBtnLink = styled(Link)`
  text-decoration: none;
  color: white;

  ${
    "" /* border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none; */
  }
  /* Second Nav */
  ${
    "" /* margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  } */
  }
`;
