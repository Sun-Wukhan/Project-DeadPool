import React from 'react'
import styled from 'styled-components'

function Header() {
    

  return (
    <Wrapper>
    <Title>Home</Title>
    <ButtonContainer>
    <Button>Settings</Button>
    <Button>Refer-A-Friend</Button>
    <Button>Log-Out</Button>
    </ButtonContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
padding: 1rem 1.5rem; 
display: flex;
align-items: center;
width: 100%;
height: 5rem;
border-bottom: 1px solid #282b2f; 
background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
`; 


const Title = styled.div`
font-size: 2rem;
font-weight: 200; 
flex: 1; 
margin-right: 0.5rem;
color: white; 
font-weight: 700;
`; 

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
`; 

const Button = styled.h1`
padding-top: 0.7rem;
padding: 0.5rem;
color: white;
height: 3rem;
width: 10rem;
justify-content: center; 
text-align: center; 
font-size: 1.2rem; 
font-weight: 500; 

&:hover {
    cursor: pointer;
    border-radius: 2rem;
    background-color: orangered;
}
`;

