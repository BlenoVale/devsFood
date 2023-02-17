import styled from "styled-components";

export const PageArea = styled.div`
margin-top: 50px;
margin-left: 50px;
`;

export const TitlePage = styled.div`
font-size: 20px;
color: #fff;
margin-bottom: 15px;
`;

export const container = styled.form`
min-width: 450px;
min-height: 650px;
background-color: #fff;
border-radius: 10px;
padding: 30px;
box-shadow: 0px 0px 8px #282a35;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const InputArea = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
max-width: 380px;
margin-bottom: 20px;
`;

export const Label = styled.div`
font-size: 18px;
font-weight: 500;
color: #136713;
`;

export const Input = styled.input`
height: 35px;
outline: none;
padding-left: 5px;
border: none;
border-bottom: 2px solid #136713;
background-color: #f6f6f6;
`;

export const InputAreaBox = styled.textarea`
height: 50px;
resize: none;
outline: none;
padding-left: 5px;
border: none;
border-bottom: 2px solid #136713;
background: #f6f6f6;
`;

export const ButtomUser = styled.div`
margin-top: 20px;
height: 40px;
background-color: #123C12;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
max-width: 380px;
color: #fff;

&:hover {
    background-color: #0D2E0D;
}
`;