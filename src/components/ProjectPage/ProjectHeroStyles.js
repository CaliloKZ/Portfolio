import styled from "styled-components";

export const HeroContainer = styled.div`
position: relative;
width: 100%;
height: 70vh;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`;

export const VideoBackground = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;

iframe {
pointer-events: none;
}
`;

export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(
  to bottom,
  rgba(0,0,0,0.3),
  rgba(0,0,0,0.8)
);
z-index: 2;
`;

export const HeroContent = styled.div`
position: relative;
z-index: 3;
text-align: center;
max-width: 900px;
padding: 20px;
`;

export const Title = styled.h1`
font-size: 4.5rem;
color: white;
margin-bottom: 10px;
`;

export const Role = styled.div`
background: #2f3e63;
display: inline-block;
padding: 8px 16px;
border-radius: 20px;
font-size: 1.3rem;
margin-bottom: 20px;
`;

export const TechRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
`;

export const TechBadge = styled.div`
background: rgba(255,255,255,0.15);
backdrop-filter: blur(6px);
padding: 6px 14px;
border-radius: 20px;
font-size: 1.2rem;
color: white;
`;