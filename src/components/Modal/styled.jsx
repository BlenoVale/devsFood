import styled from "styled-components";

export const Container = styled.div`
display: ${props => props.status ? 'flex' : 'none'};
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 900;
justify-content: center;
align-items: center;
transition: all ease .5s;
`;

export const ModalBody = styled.div`
background-color: #fff;
border-radius: 20px;
box-shadow: 0px 0px 30px #000;
max-width: 90vw;
max-height: 90vh;
overflow: auto;
`;