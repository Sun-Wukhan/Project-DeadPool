import React from 'react'
import styled from 'styled-components'

function Main() {
  return (
    <Wrapper>Main</Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  height: 100%; 
  width: 100%;
  max-height: calc(100vh - 64px);
  ::-webkit-scrollbar {
    display: none;
  }
  
  & div {
    border-radius: 0.4rem;
  }`