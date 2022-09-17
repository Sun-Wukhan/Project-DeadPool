import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Infobar from './Infobar'

function index() {
  return (
    <Wrapper>
      <Navbar/>
      <SideBar/>
      <MainContainer>
     <Infobar/>
      </MainContainer>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
background-color: #1a2332;
height: 100%; 
width: 100%;
`

const MainContainer = styled.div`
display: flex;
height: 20rem;
`


const CardRow = styled.div``