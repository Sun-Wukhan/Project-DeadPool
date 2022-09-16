import React from "react";
import styled from "styled-components";

function Tile({title, explanation, date}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Explain>{explanation}</Explain>
      <Explain>{date}</Explain>
      <Explain>$$$</Explain>
      <Explain>Like</Explain>
    </Wrapper>
  );
}

export default Tile;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  color: black; 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.1);
    transition: all .2s ease-in-out; 
  }
`;

const Title = styled.h1``;

const Explain = styled.p``
