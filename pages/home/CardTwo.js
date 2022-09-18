import React from 'react'
import styled from 'styled-components'

function CardTwo() {
  return (
    <Wrapper>
        <ProfileContainer>
        <Profile src="https://images.shiksha.ws/mediadata/images/articles/185924764.jpg" alt=""/>
        <Name>Varun Mehrotra</Name>
        <Active>Last Online: 2 Hours Ago</Active>
        <Active>City: Toronto</Active>
        <Active>Gender: Male</Active>
        </ProfileContainer>
        <Information>
        <Questions>Funds: <Answer>$420.69 CAD</Answer></Questions>
        <Questions>Active Campaign: <Answer>Terraform Modules</Answer></Questions>
        <Questions>Ranking: <Answer>SJW</Answer></Questions>
        <Questions>Last Contributed Project: <Answer>Help Mursa's MicroPenis</Answer></Questions>
        <Questions>Online: <Answer>[ON]</Answer></Questions>
        <Questions>Status: <Answer>Sup Bitches</Answer></Questions>
        <Questions>Location<Answer>Toronto</Answer></Questions>
        <Questions>Social Media:<Answer>Facebook</Answer></Questions>
        </Information>
    </Wrapper>
  )
}

export default CardTwo

const Wrapper = styled.div`
width: 45%;
background-color: #303946;
border-radius: 2rem;
margin-left: 10px;
overflow-x: scroll;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media (max-width: 768px) {
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  }
`

const Profile = styled.img`
width: 100px;
height: 100px; 
margin: 10px;
border-radius: 60%;


`

const ProfileContainer = styled.div`
display: flex;
top: 0;
flex-direction: column;
float: left;
width: 30%;
height: 100%;

`

const Information = styled.div`
display: flex;
height: 100%;
flex-direction: column;
white-space: pre-line;
`

const Name = styled.h1`
display: flex; 
flex-direction: row;
font-size: 1em;
justify-content: baseline;
align-items: center;
padding-left: 1rem;

`

const Biodata = styled.div`
display: flex;
flex-direction: row;
`

const Questions = styled.h1`
font-size: 1em;
display: flex;
color: white;
border-radius: 2rem;
object-fit: contain;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Active = styled.p`
font-size: 10px;
color: whitesmoke;
padding-left: 1rem;
white-space: pre-line;
`

const Answer = styled.span`
color: orangered;
margin-left: 0.25rem;
`