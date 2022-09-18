import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Infobar from './Infobar'
import Card from './Card'
import { FaArrowAltCircleRight } from 'react-icons/fa'

function index() {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <SideBar/>
      <MainContainer>
     <Infobar/>
    <Steps>
     <Card image="/images/funds.jpeg" Title="Step 1" Plan="Load" Description="In order to fund your account, we have to take valid funds from your credit card, debit card or E-Transfer. Funds may take upto 24 hours to validate"/><FaArrowAltCircleRight/>
     <Card image="/images/pay.jpeg" Title="Step 2" Plan="Pool" Description="In order to fund your account, we have to take valid funds from your credit card, debit card or E-Transfer. Funds may take upto 24 hours to validate"/> <FaArrowAltCircleRight/>
     <Card image="/images/enjoy.webp" Title="Step 3" Plan="Enjoy" Description="In order to fund your account, we have to take valid funds from your credit card, debit card or E-Transfer. Funds may take upto 24 hours to validate"/>
     </Steps>
      </MainContainer>
    </Wrapper>
    </>
  )
}

export default index

const Wrapper = styled.div`
background-color: #1a2332;
height: 100vh;
width: 100vw;
`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`


const Steps = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;
flex-direction: row;

`