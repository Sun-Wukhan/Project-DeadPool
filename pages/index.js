import styled from "styled-components";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Wrapper>
      <VideoWrapper>
        <VideoBackground
          src={"videos/background3.mp4"}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </VideoWrapper>

      <ContentBanner>
      <Navbar/>
      <Title>Project Deadpool</Title>
        <ButtonContainer>
          <MediaButton>Google Login</MediaButton>
          <MediaButton>Facebook Login</MediaButton>
          <MediaButton>Twitter Login</MediaButton>
        </ButtonContainer>
      </ContentBanner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 1rem;
  z-index: 2;
`;


const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;

`;

const VideoBackground = styled.video`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  object-fit: cover;

`;
const ButtonContainer = styled.div`
  margin: 10rem 1rem 1rem 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
font-size: 5rem; 
font-weight: 800;
`

const ContentBanner = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  color: #fff;
  font-weight: bold;
`;

const MediaButton = styled.button`
  margin-top: 1rem;
  z-index: 1;
  width: 20rem;
  height: 3rem;
  background-color: lightseagreen;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1rem;

  &:hover {
    background-color: #ff6600;
    font-weight: 900;
  }
`;
