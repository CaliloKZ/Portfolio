import styled from "styled-components";

export const PageContainer = styled.div`
max-width: 900px;
margin: auto;
padding: 60px 20px 120px 20px;
`;

export const Title = styled.h1`
font-size: 4rem;
color: #9cc9e3;
margin-bottom: 10px;
`;

export const Role = styled.div`
background: #2f3e63;
display: inline-block;
padding: 8px 16px;
border-radius: 20px;
font-size: 1.3rem;
margin-bottom: 30px;
`;

export const VideoContainer = styled.div`
margin: 40px 0;
border-radius: 10px;
overflow: hidden;
`;

export const SectionTitle = styled.h2`
font-size: 2.5rem;
font-weight: 600;
margin-top: 60px;
margin-bottom: 18px;
color: #9cc9e3;
letter-spacing: 0.5px;
`;

export const Text = styled.p`
font-size: 2.2rem;
line-height: 1.8;
color: #d6e2f0;
margin-bottom: 20px;
`;

export const List = styled.ul`
margin-top: 10px;
padding-left: 20px;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const ListItem = styled.li`
font-size: 2rem;
line-height: 1.6;
color: #e4ecf3;
`;

export const TechContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-top: 10px;
`;

export const TechBadge = styled.div`
background: rgba(156, 201, 227, 0.15);
border: 1px solid rgba(156, 201, 227, 0.4);
padding: 6px 14px;
border-radius: 20px;
font-size: 1.3rem;
color: #9cc9e3;
`;

export const ScreenshotGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 25px;
margin-top: 25px;
`;

export const Screenshot = styled.img`
width: 100%;
border-radius: 10px;
box-shadow: 0 10px 25px rgba(0,0,0,0.3);
transition: transform 0.25s;

:hover {
transform: scale(1.03);
}
`;

export const Divider = styled.div`
height: 1px;
background: rgba(255,255,255,0.08);
margin: 50px 0;
`;

export const Highlight = styled.span`
color: #9cc9e3;
font-weight: 600;
background: rgba(156,201,227,0.1);
padding: 2px 6px;
border-radius: 4px;
`;

export const BackButton = styled.a`
display: inline-flex;
align-items: center;
gap: 8px;

margin-bottom: 40px;

font-size: 1.7rem;
color: #9cc9e3;

padding: 6px 12px;
border-radius: 6px;

background: rgba(156,201,227,0.08);

transition: all 0.2s;

:hover {
background: rgba(156,201,227,0.2);
}
`;

export const StoreLinks = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
margin-top: 25px;
`;

export const StoreButton = styled.a`
display: flex;
align-items: center;
gap: 8px;

padding: 8px 14px;

font-size: 1.4rem;

border-radius: 6px;

background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.1);

transition: all 0.2s;

:hover {
background: rgba(156,201,227,0.15);
border-color: #9cc9e3;
}
`;