import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Card from './Card'

function index() {
  return (
    <Wrapper><NavBar><Navbar/></NavBar>
    <SideBar><Sidebar/></SideBar>
    <Main>
    <Welcome>Welcome to your Deadpool Dashboard</Welcome>
    <h2>How do I use Deadpool?</h2>
    </Main>
    <ContentBox>
        <Content1><Card image="/images/funds.jpeg" Title="Step 1" Plan="Load" Description="In order to fund your account, we have to take valid funds from your credit card, debit card or E-Transfer. Funds may take upto 24 hours to validate" /></Content1>
        <Content1><Card image="/images/pay.jpeg" Title="Step 2" Plan="Pay" Description="You may place your money into an existing pool you personally believe, align and or identify with. You could also create your own pool and place your money there!" /></Content1>
        <Content1><Card image="/images/enjoy.webp" Title="Step 3" Plan="Enjoy" Description="The MOST important role is to enjoy yourself. Change the world, put your money to something meaningful. Do some cool stuff. Please respect the guidelines." /></Content1>

    </ContentBox>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
background-image: url("https://media.istockphoto.com/vectors/abstract-geometric-pattern-background-white-polygon-mosaic-shape-vector-id1165507348?k=20&m=1165507348&s=612x612&w=0&h=83jWMhfTHb0THcINDQgowbOuoqPVz6AfLvmaEvNjNgY=");
background-repeat: no-repeat;
background-size: cover;
 display: grid;
  height: 100vh;
  width: 100%;
  /* grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr; */
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar content content content";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
/*   
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "main"
      "content"
      "sidebar";
  }
  color: white; */
  
  `

const NavBar = styled.nav`
  grid-area: nav;
`;
const Main = styled.main`
  grid-area: main;
  margin: 2rem 1rem 1rem 1rem;
  background-image: url("https://www.centeredrecoveryprograms.com/wp-content/uploads/2017/12/you-are-here-map-pin-location-navigation-3-d-animation_s68bji6we_thumbnail-full08.png");
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center; 
  justify-content: center;
  border-radius: 2rem;
  object-fit: contain;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


const Welcome = styled.h1`
letter-spacing: 10px;
font-size: 400; 
font-size: 2.5rem;
`

const SideBar = styled.div`
  grid-area: sidebar;
  height: 100%;
  /* width: calc(20rem - 10px - 10px); */
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

const Content1 = styled.div`
  padding: 0.25rem;
  width: 100%; 
  height: 100%; 
  
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }

`;

const Footer = styled.footer`
  grid-area: footer;
  padding: 0.25rem;
  height: 30%; 
`;

// <Tile title={"LOAD"} explanation={"EXPLAIN"} date={"September"}/>