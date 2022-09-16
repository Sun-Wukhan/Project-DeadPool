import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Main from './Main'

function index() {
  return (
    <Wrapper>
      <Sidebar/>
        <MainContainer>
        <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Image Showcasing Bets</h1>
        <br/>
        <h1>Trending Pools</h1>
        <br/>
        <h1>New Pools</h1>
        <br/>
        <h1>Paid out Pools</h1>
        </MainContainer>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
height: 100%; 
width: 100%; 
display: flex;
background-color: #F5F5F5;
color: black; 
`
const MainContainer = styled.div`
flex: 1; 
`