import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`;

export const Order = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
margin-top: 30px;
padding: 20px;
background-color: #fff;
border-radius: 8px;
`;

export const OderProgress = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const OrderBar = styled.div`
width: 100%;
min-height: 1px;
background-color: #136713;
`;

export const OrderBarProgress = styled.div`
margin-top: -3px;
width: 80%;
min-height: 5px;
background-color: #136713;
border-radius: 8px;
`;

export const OrderArea = styled.div`
margin-top: 50px;
font-size: 13px;
color: #136713;
`;

export const OrderProducts = styled.div`
display: flex;
justify-content: space-between;
`;

export const ProductInfo1 = styled.div`
display: flex;
flex-direction: column;
`;

export const ProductItem = styled.div`
display: flex;
gap: 20px;
`;

export const ProductIMG = styled.img`
width: 100px;
height: auto;
border-radius: 8px;
margin-bottom: 10px;
`;

export const ProductText = styled.div`
display: flex;
flex-direction: column;
`;


export const ProductInfo2 = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const ProductInfo3 = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const ProductText2 = styled.div`
width: 200px;
display: flex;
justify-content: space-between;
`;


export const ProductTitle = styled.div`
font-weight: bold;
`;

export const ProductValue = styled.div``;


export const OldOrders = styled.div`
margin-bottom: 70px;
`;

export const OldOrdersTitle = styled.div`
color: #fff;
font-weight: 500;
margin-bottom: 20px;
`;

export const OldOrdersArea = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 15px;
`;