import React from 'react'
import styled from 'styled-components'

function Card({image, Title, Plan, Description }) {
  return (
    <Wrapper>
        <CardImage>
            <img 
            style={{ width: "25rem", marginTop: "-8%" }}
            src={image} />
        </CardImage>
        <CardContent>
            <CardTitle>{Title}</CardTitle>
            <CardPlan>{Plan}</CardPlan>
            <CardDescription>{Description}</CardDescription>
        </CardContent>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  width: 25rem;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid gray;
  color: white; 
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: #303946;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.1);
    transition: all .2s ease-in-out; 
    z-index: 10;
  }
  `

const CardContent = styled.div`
  padding: 4px 16px 20px 16px;
`
const CardImage = styled.div`
  width: 25rem;
  border-radius: 8px 8px 0 0;
  max-height: 140px;
  overflow: hidden;
`

const CardTitle = styled.p`
font-family: Avenir-Heavy;
  font-size: 20;
  font-weight: 600;
  margin: 12px 0px 0px 0px;
`

const CardPlan = styled.p`
color: #8294aa;
  font-size: 14;
  margin: 4px 0;
`

const CardDescription = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
`