import React from 'react'
import styled from 'styled-components'

function CardTwo() {
  return (
    <Wrapper>
        <ProfileContainer>
        <Profile src="https://images.shiksha.ws/mediadata/images/articles/185924764.jpg" alt=""/>
        <Name>Varun Mehrotra</Name>
        <Active>2 Hours Ago</Active>
        </ProfileContainer>
        <Information>
    
        <InfoText>Funds: $150.45</InfoText>
        <InfoText>Active Campaign: Clean Bluffs</InfoText>
        <InfoText>Ranking: SJW</InfoText>
        <InfoText>Last Contributed Project: Help Mursa's MicroPenis</InfoText>
        </Information>
    </Wrapper>
  )
}

export default CardTwo

const Wrapper = styled.div`
width: 50%;
background-color: #303946;
border-radius: 2rem;
margin-left: 10px;
white-space: pre-line;
`

const Profile = styled.img`
width: 100px;
height: 100px; 
margin: 10px;
border-radius: 60%;
float: left; 

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
flex-direction: column;
white-space: pre-line;
overflow-wrap: break-word;
`

const Name = styled.h1`
display: flex; 
flex-direction: row;
font-size: 15px;
justify-content: baseline;
align-items: center;
padding-left: 1rem;

`

const InfoText = styled.h1`
font-size: 20px;
`

const Active = styled.p`
font-size: 10px;
color: whitesmoke;
padding-left: 1rem;
white-space: pre-line;
`

const Rank = styled.h1``