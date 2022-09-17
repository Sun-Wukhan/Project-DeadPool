import React from 'react'
import styled from 'styled-components'

function CardOne() {
  return (
    <Wrapper>
        <BannerContainer>
        <Greeting>Welcome Home</Greeting>
            <BannerImage src="https://www.allbusiness.com/asset/2016/09/Marketing-campaign-concept.jpg"/>   
        </BannerContainer>
    </Wrapper>
  )
}

export default CardOne

const Wrapper = styled.div`
width: 50%;
border-radius: 2rem;
`

const BannerContainer = styled.div`
/* background-image: url("https://www.allbusiness.com/asset/2016/09/Marketing-campaign-concept.jpg"); */
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
const Greeting = styled.h1`
 position: absolute;
 margin-left: 1rem;
`