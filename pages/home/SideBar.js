import { useState } from "react";
import styled from "styled-components";
import Link from 'next/link'
import { navItems } from "../../static/navItems";

function SideBar() {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <Wrapper>
      <NavItemsContainer>
        {navItems.map((item) => (
          <Link href={"/"+item.link}>
          <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "orangered" }}>
              {item.icon}
            </NavIcon>
            <NavTitle onClick={() => setActiveIcon(item.title)} style={{ color: item.title === activeIcon && "orangered"}}>{item.title}</NavTitle>
          </NavItem>
          </Link>
        ))}
      </NavItemsContainer>
    </Wrapper>
  )
}

export default SideBar

const Wrapper = styled.div`
width: 15%; 
height: 100%;
float: left;
`

const NavItemsContainer = styled.div`
margin-top: 0.5rem;
border-radius: 10px;
border-right: 1px solid grey;
border-bottom: 1px solid grey;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  color: white;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #303946;
  }
`;

const NavIcon = styled.div`
  background-color: black;
  color: white;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 10px;
  /* display: grid; */
  place-items: center;
`;

const NavTitle = styled.div`

@media (max-width: 768px) {
  display: none;
  }
`;