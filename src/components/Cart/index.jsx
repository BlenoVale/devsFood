import React, { useEffect, useState } from "react";
import * as C from './styled';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [discount, setDescount] = useState(5);
    const [deliveryTax, setDelivaryTax] = useState(8.5);
    const [total, setTotal] = useState(0);
    const [address, setAdress] = useState()

    useEffect(() => {
        if (user.address != '') {
            setAdress(user.address);
        } else {
            setAdress('Você ainda não registrou um endereço.');
        }
    }, [user]);

    useEffect(() => {
        let tempPrice = 0;
        for (let i in products) {
            tempPrice = (products[i].price * products[i].qtd) + tempPrice;
        }

        let tempTotal = (tempPrice + deliveryTax - discount);
        setTotal(tempTotal);
    }, [products]);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { key, type }
        });
    }

    const getCurrentDate = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;

        return `${day}/${month}/${year}`;
    }

    const handleFinishOrder = () => {
        if (products.length > 0) {
            let order = {};
            order.products = products;
            order.address = 'endereço para entrega do cliente.';
            order.discount = discount;
            order.delivery = deliveryTax;
            order.status = 'pedido Recebido';
            order.total = total;
            order.orderDate = getCurrentDate();
            order.address = address;

            dispatch({
                type: 'ADD_ORDER',
                payload: { order }
            });

            dispatch({
                type: 'CLEAR_PRODUCTS',
            });

            setShow(false);
            navigate('/orders');
        }
    }

    return (
        <C.CartArea>
            <C.CartHeader onClick={handleCartClick}>
                <C.CartIcon src='/assets/cart.png' />
                <C.CartText>Meu Carrinho ({products.length})</C.CartText>
                {show &&
                    <C.CartIcon src='/assets/down.png' />
                }
            </C.CartHeader>

            <C.CartBody show={show}>
                {products.length > 0 &&
                    <>
                        <C.ProductsArea>
                            {products.map((item, index) => (
                                <C.ProductItem key={index}>
                                    <C.ProductPhoto src={item.image} />
                                    <C.ProductInfo>
                                        <C.ProductName>{item.name}</C.ProductName>
                                        <C.ProductPrice>R$ {item.price.toFixed(2)}</C.ProductPrice>
                                    </C.ProductInfo>
                                    <C.ProductQtd>
                                        <C.ProductQtdIcon
                                            src='/assets/minus.png'
                                            onClick={() => handleProductChange(index, '-')}
                                        />
                                        <C.ProductQtdText>{item.qtd}</C.ProductQtdText>
                                        <C.ProductQtdIcon
                                            src='/assets/plus.png'
                                            onClick={() => handleProductChange(index, '+')}
                                        />
                                    </C.ProductQtd>
                                </C.ProductItem>
                            ))}
                        </C.ProductsArea>

                        <C.AddressArea>
                            <C.AddressInfo>
                                {address}
                            </C.AddressInfo>
                            <C.AddressEditIcon src='/assets/edit.png' />
                        </C.AddressArea>

                        <C.CupomArea>
                            Cupom de desconto:
                            <C.CupomInput type='text' placeholder='DESCONTO5' />
                        </C.CupomArea>

                        <C.ResumeArea>
                            <C.ResumeAreaInfo>
                                <C.ResumeField>Desconto</C.ResumeField>
                                <C.ResumePrice>R$ {discount.toFixed(2)}</C.ResumePrice>
                            </C.ResumeAreaInfo>

                            <C.ResumeAreaInfo>
                                <C.ResumeField>Taxa de entrega</C.ResumeField>
                                <C.ResumePrice>R$ {deliveryTax.toFixed(2)}</C.ResumePrice>
                            </C.ResumeAreaInfo>

                            <C.ResumeAreaInfo>
                                <C.ResumeField>Total</C.ResumeField>
                                <C.ResumePrice>R$ {total.toFixed(2)}</C.ResumePrice>
                            </C.ResumeAreaInfo>
                        </C.ResumeArea>

                        <C.Finishing onClick={handleFinishOrder}>Finalizar Compra</C.Finishing>
                    </>
                }
                {products.length <= 0 &&
                    <C.EmptyProductArea>Seu carrinho está vázio</C.EmptyProductArea>
                }
            </C.CartBody>
        </C.CartArea>
    );
}