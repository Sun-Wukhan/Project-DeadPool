import { useState } from "react";
import styled from "styled-components";
import Link from 'next/link'
import { navItems } from "../../static/navItems";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <Wrapper>
      <LogoContainer>
        {/* <Logo>
          <img src={"images/webguru.png"} alt="WebGuru Logo" />
        </Logo> */}
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item) => (
          <Link href={"/"+item.link}>
          <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "orangered" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
          </Link>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  /* height: calc(100%); */
  border-right: 1px solid black;
  flex: 0.5;
  /* width: calc(20rem - 10px - 10px); */
  /* padding: 0 1rem; */
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  border-radius: 60%;
  margin-left: 1.5rem;
  border-bottom: 1px solid black;
`;

const NavItemsContainer = styled.div`
/* border-top: 1px solid black; */
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  color: black;

  &:hover {
    background-color: darkgrey;
  }
`;

const NavIcon = styled.div`
  background-color: black;
  color: white;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;

const NavTitle = styled.div``;
