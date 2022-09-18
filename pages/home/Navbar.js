import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { MdUpgrade } from "react-icons/md";

function Navbar() {
  return (
    <NavBar>
      <NavLogo>
        <img src={"images/webguru.png"} alt="Company Logo" />
      </NavLogo>
      <NavMenu>
        <NavButton>Logout</NavButton>
        <NavButton>Settings</NavButton>
        <NavButton>Contact Us</NavButton>
        <NavProfile>
          <NavIcons>
          <CgProfile />
          </NavIcons>
          <p>Navid</p>
        </NavProfile>
        <NavProfile>
        <NavIcons>
          <MdUpgrade />
          </NavIcons>
          <p>Upgrade</p>
        </NavProfile>
      </NavMenu>
    </NavBar>
  );
}

export default Navbar;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  width: calc(100%);
  height: 5rem;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 0 2rem;
  top:0;
  left:0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%; 
    background-color: black;
    
  }
`;

const NavLogo = styled.div``;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 2rem;
  margin-top: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavIcons = styled.div`
height: 10px;
`
