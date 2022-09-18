import React from 'react'
import styled from 'styled-components'

function CardOne() {
  return (
    <Wrapper>
        <BannerContainer>
        <Greeting>Welcome To The  Deadpool</Greeting>
            <BannerImage src="https://www.allbusiness.com/asset/2016/09/Marketing-campaign-concept.jpg"/>   
        </BannerContainer>
    </Wrapper>
  )
}

export default CardOne

const Wrapper = styled.div`
width: 50%;
border-radius: 2rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media (max-width: 768px) {
  display: none;
  }
`

const BannerContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
background-size: cover;
border-radius: 2rem;

`

const BannerImage = styled.img`
height: 100%;
width: 100%;
border-radius: 2rem;
`

const Greeting = styled.h2`
position: absolute;
margin-left: 1px;
`

