import styled from "styled-components";

export const PageArea = styled.div`
width: 100%;
padding: 15px;
`;

export const CategoryArea = styled.div`
color: #fff;
margin-top: 20px;
`;

export const CategoryList = styled.div`
display: flex;
gap: 20px;
margin-top: 10px;
`;

export const ProductArea = styled.div`
margin-top: 30px;
margin-bottom: 30px;
`;

export const ProductList = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 15px;
`;


export const ProductPaginationArea = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 50px;
gap: 8px;
`;

export const ProductPaginationItem = styled.div`
position: fixed;
bottom: 80px;
background-color: ${props=>props.active == props.current ? "#87d185" : "#fff"};
padding: 5px 10px;
border-radius: 5px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
cursor: pointer;
transition: all ease .3s;

&:hover {
    background-color: #dbf2d6;
}
`;