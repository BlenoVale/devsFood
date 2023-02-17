import * as C from './styled';

export const OldOrders = ({order}) => {
    return(
        <C.Container>
            <C.OrderInfoTop>
                <C.OrderDate>{order.orderDate}</C.OrderDate>
                <C.OrderStatus>{order.status}</C.OrderStatus>
            </C.OrderInfoTop>

            <C.OrderInfoDown>
                <C.OrderAds>{order.address}</C.OrderAds>
                <C.OrderPrice>R$ {order.total}</C.OrderPrice>
            </C.OrderInfoDown>
        </C.Container>
    );
}