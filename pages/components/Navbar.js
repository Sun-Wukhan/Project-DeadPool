import React from 'react'
import styled from 'styled-components'

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
          </NavMenu>
    </NavBar>
  )
}

export default Navbar

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  top: 0;
  left: 0;
  height: 5rem;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 0 2rem;
`;

const NavLogo = styled.div``;

const NavMenu = styled.div`
display: flex; 
align-items: center; 
margin-right: -15px;
`;

const NavButton = styled.div`
display: flex; 
align-items: center; 
margin-right: 2rem;
font-weight: 700;
z-index: 10;
cursor: pointer;
`

