import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
border-radius: 5px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
padding: 15px;
display: flex;
align-items: center;
color: #136713;
cursor: pointer;
transition: all ease .3s;

&:hover {
    background-color: #dbf2d6;
}
`;

export const ProductPhotoArea = styled.div`
width: 150px;
`;
export const ProductPhoto = styled.img`
width: 100%;
`;



export const ProductInfoArea = styled.div`
flex:1;
margin-left: 10px;
margin-right: 10px;
`;
export const ProductName = styled.div`
font-size: 21px;
font-weight: 700;
`;
export const ProductPrice = styled.div`
font-size: 16px;
`;
export const ProductIngredients = styled.div`
font-size: 13px;
`;


export const ProductButtonArea = styled.div`

`;
export const ProductButton = styled.img`
width: 18px;
`;