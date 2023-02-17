import styled from "styled-components";

export const CartArea = styled.div`
background-color: #136713;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
position: fixed;
bottom: 0;
right: 30px;
transition: all ease .8s;
`;

export const CartHeader = styled.div`
width: 290px;
height: 50px;
display: flex;
align-items: center;
margin: 0 10px;
gap: 20px;
cursor: pointer;
`;

export const CartIcon = styled.img`
width: 23px;
height: auto;

&: last-child {
    margin-right: 10px;
}
`;

export const CartText = styled.div`
flex:  1;
color: #fff;
font-size: 17px;
`;



export const CartBody = styled.div`
display: ${props => props.show ? 'block' : 'none'};
color: #fff;
`;

export const ProductsArea = styled.div`
`;

export const EmptyProductArea = styled.div`
display: flex;
justify-content: center;
align-center: center;
padding: 10px 5px;
margin: 40px 20px;
background-color: #87d185;
opacity: .9;
color: #111;
font-weight: 500;
border-radius: 8px;
`;

export const ProductItem = styled.div`
display: flex;
margin:  10px;
`;

export const ProductPhoto = styled.img`
width: 64px;
height: auto;
border-radius: 10px;
`;

export const ProductInfo = styled.div`
flex: 1;
margin-left: 10px;
`;

export const ProductName = styled.div`
font-size: 15px;
font-weight: bold;
`;

export const ProductPrice = styled.div`
font-size: 13px;
`;

export const ProductQtd = styled.div`
display: flex;
align-items: center;
`;

export const ProductQtdIcon = styled.img`
width: 13px;
height: auto;
cursor: pointer;
`;

export const ProductQtdText = styled.div`
font-size: 13px;
font-weight: bold;
margin: 0 5px;
`;

export const AddressArea = styled.div`
margin:  10px;
margin-top: 25px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const AddressInfo = styled.div`
display: flex;
flex-wrap: wrap;
font-size: 13px;
max-width: 200px;
`;

export const AddressEditIcon = styled.img`
width: 20px;
height: 20px;
cursor: pointer;
`;


export const CupomArea = styled.div`
margin:  10px;
margin-top: 25px;
display: flex;
flex-direction: column;
`;

export const CupomInput = styled.input`
outline: none;
margin-top: 10px;
height: 35px;
border-radius: 13px;
border: none;
padding-left: 15px;
font-size: 15px;
`;

export const ResumeArea = styled.div`
margin: 25px 10px;
font-size: 15px;
font-weight: bold;
display: flex;
flex-direction: column;
gap: 13px;
`;

export const ResumeAreaInfo = styled.div`
display: flex;
justify-content: space-between;
`;

export const ResumeField = styled.div``;

export const ResumePrice = styled.div``;


export const Finishing = styled.div`
margin: 25px 10px;
height: 40px;
background-color: #123C12;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;

&:hover {
    background-color: #0D2E0D;
}
`;
