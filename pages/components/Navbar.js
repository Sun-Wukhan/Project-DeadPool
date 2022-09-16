import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavBar>
          <NavLogo>
            <img src={"images/webguru.png"} alt="Company Logo" />
          </NavLogo>
    </NavBar>
  )
}

export default Navbar

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  height: 5rem;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 0 2rem;
`;

const NavLogo = styled.div``;

