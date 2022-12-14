import React from 'react'
import styled from 'styled-components'
import CardOne from './CardOne'
import CardTwo from './CardTwo'

function Infobar() {
  return (
    <Wrapper>
      <CardOne/>
      <CardTwo/>
    </Wrapper>
  )
}

export default Infobar

const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 20rem;
width: 100%;
margin: 0.5rem;

@media (max-width: 768px) {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  }
`