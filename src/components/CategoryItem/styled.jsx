import styled from "styled-components";

export const Container = styled.div`
width: 80px;
height: 80px;
background-color: ${props => props.active == props.index ? '#FFF' : '#AAE09A'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
cursor: pointer;
transition: all ease .3s;
`;

export const CatgegoryImage = styled.img`
width: 55px;
height: 55px;
`;