import styled from "styled-components";

export const Container = styled.div`
width:  740px;
padding: 20px;
color: #136713;
`;

export const ProductArea = styled.div`
height: 200px;
display: flex;

`;

export const ProductPhoto = styled.img`
width: 310px;
border-radius: 10px;
`;

export const ProductInfo = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 10px;
`;

export const ProductDetails = styled.div`

`;

export const ProductName = styled.div`
font-size: 30px;
font-weight: 700;
`;

export const ProductIngredients = styled.div`
font-size: 14px;
`;

export const ProductQuantityArea = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
`;

export const ProductQuantity = styled.div`
display: flex;
align-items: center;
gap: 15px;
background-color: #073C07;
padding: 0 8px;
border-radius: 5px;
`;

export const ProductQtdImage = styled.img`
width: 24px;
height: auto;
cursor: pointer;
`;

export const ProductQtdText = styled.div`
font-size: 25px;
font-weight: bold;
color: #fff;
`;

export const ProductPrice = styled.div`
font-size: 30px;
font-weight: bold;
`;


export const ProductButtons = styled.div`
margin-top: 10px;
display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 25px;
`;

export const ProducBtn = styled.button`
border: 0;
background-color: #073C07;
box-shadow: 4px 5px 5px #888;
color: #fff;
font-size: ${props => props.small ? '13px' : '20px'};
font-weight: 700;
padding: ${props => props.small ? '10px 10px' : '10px 20px'};
margin-left: 10px;
border-radius: 5px;
cursor: pointer;
`;
