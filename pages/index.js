import styled from 'styled-components'

export default function Home() {
  return (
    <Wrapper>
      <HeroBackground>
            <VideoBackground src={"videos/background3.mp4"} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBackground>
      <ButtonContainer>
            <MediaButton>Google Login</MediaButton>
            <MediaButton>Facebook Login</MediaButton>
            <MediaButton>Twitter Login</MediaButton>
          </ButtonContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 height: 100vh; 
 width: 100vw; 
 justify-content: center;
 align-items: center;
 display: grid;
 display: flex; 
`

const HeroBackground = styled.div`
position: absolute; 
top: 0; 
bottom: 0; 
right: 0; 
left: 0; 
height: 100%;
width: 100%; 
overflow: hidden;`

const VideoBackground= styled.video`
position: absolute; 
height: 100vh;
width: 100vw; 
z-index: -10;
o-object-fit: cover;
object-fit: cover;
overflow: hidden;
`
const ButtonContainer = styled.div`
 justify-content: center;
 align-items: center;
 display: flex;
 flex-direction: column; 
`
const MediaButton = styled.button`
margin-top: 0.25rem; 

`