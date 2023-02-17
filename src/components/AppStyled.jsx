import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100vh;
background-color: #d9d9d9;
`;

export const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #136713;
width: 80px;
`;

export const PageBody = styled.div`
flex: 1;
display: flex;
background-color: #00980d;
background-image: url('/assets/bg.png');
overflow-y: auto;
`;