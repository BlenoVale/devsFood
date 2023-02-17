import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as C from './styled';

export const ModalProduct = ({ data, setStatus }) => {
    const [qtd, setQtd] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        setQtd(1);
    }, [data]);

    const handleCancelBtn = () => {
        setStatus(false);
    }

    const handleMinusQtd = () => {
        if (qtd > 1) {
            setQtd(qtd - 1);
        }
    }

    const handlePlusQtd = () => {
        setQtd(qtd + 1);
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data,qtd}
        });
        setStatus(false);
    }

    return (
        <C.Container>
            <C.ProductArea>
                <C.ProductPhoto src={data.image} />
                <C.ProductInfo>
                    <C.ProductDetails>
                        <C.ProductName>{data.name}</C.ProductName>
                        <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
                    </C.ProductDetails>
                    <C.ProductQuantityArea>
                        <C.ProductQuantity>
                            <C.ProductQtdImage onClick={handleMinusQtd} src='/assets/minus.png' />
                            <C.ProductQtdText>
                                {qtd}
                            </C.ProductQtdText>
                            <C.ProductQtdImage onClick={handlePlusQtd} src='/assets/plus.png' />
                        </C.ProductQuantity>

                        <C.ProductPrice>
                            R$ {(data.price * qtd).toFixed(2)}
                        </C.ProductPrice>
                    </C.ProductQuantityArea>
                </C.ProductInfo>
            </C.ProductArea>

            <C.ProductButtons>
                <C.ProducBtn small={true} onClick={handleCancelBtn}>Cancelar</C.ProducBtn>
                <C.ProducBtn onClick={handleAddToCart}>Adcionar ao Carrinho</C.ProducBtn>
            </C.ProductButtons>
        </C.Container>
    );
}