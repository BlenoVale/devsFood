import { useState } from 'react';
import { OldOrders } from '../OldOrders';
import * as C from './styled';

export const CurrentOrder = ({ order, oldOrders }) => {
    const [products, setProducts] = useState(order.products);

    return (
        <C.Container>
            <C.Order>
                <C.OderProgress>
                    <C.OrderBar />
                    <C.OrderBarProgress />
                </C.OderProgress>

                <C.OrderArea>
                    <C.OrderProducts>
                        <C.ProductInfo1>
                            {products.length > 0 && products.map((item, key) => (
                                <C.ProductItem key={key}>
                                    <C.ProductIMG src={item.image} />
                                    <C.ProductText>
                                        <C.ProductTitle>{item.name}</C.ProductTitle>
                                        <C.ProductValue>R$ {item.price}</C.ProductValue>
                                    </C.ProductText>
                                </C.ProductItem>

                            ))}
                        </C.ProductInfo1>

                        <C.ProductInfo2>
                            <C.ProductText>
                                <C.ProductTitle>Data do Pedido</C.ProductTitle>
                                <C.ProductValue>{order.orderDate}</C.ProductValue>
                            </C.ProductText>

                            <C.ProductText>
                                <C.ProductTitle>Endereço de Entrega</C.ProductTitle>
                                <C.ProductValue>{order.address}</C.ProductValue>
                            </C.ProductText>
                        </C.ProductInfo2>

                        <C.ProductInfo3>
                            <C.ProductText2>
                                <C.ProductTitle>Desconto</C.ProductTitle>
                                <C.ProductValue>R$ {order.discount}</C.ProductValue>
                            </C.ProductText2>

                            <C.ProductText2>
                                <C.ProductTitle>Taxa de Entrega</C.ProductTitle>
                                <C.ProductValue>R$ {order.delivery}</C.ProductValue>
                            </C.ProductText2>

                            <C.ProductText2>
                                <C.ProductTitle>Total</C.ProductTitle>
                                <C.ProductValue>R$ {order.total.toFixed(2)}</C.ProductValue>
                            </C.ProductText2>
                        </C.ProductInfo3>

                        {products.length <= 0 &&
                            <div>Teste testado</div>
                        }
                    </C.OrderProducts>
                </C.OrderArea>
            </C.Order>

            <C.OldOrders>
                <C.OldOrdersTitle>Outros Pedidos</C.OldOrdersTitle>
                <C.OldOrdersArea>
                    {oldOrders.length > 0 && oldOrders.map((item, key) => (
                        <OldOrders order={item} key={key} />
                    ))}
                </C.OldOrdersArea>
            </C.OldOrders>
        </C.Container>
    );
}