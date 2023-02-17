import * as C from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components/Header';
import { CurrentOrder } from '../../components/CurrentOrder';

export const Orders = () => {
    const orders = useSelector(state => state.order.orders);
    const dispatch = useDispatch();

    const idCurrentOrder = orders.length - 1;
    const [currentOrder, setCurrentOrder] = useState(orders[idCurrentOrder]);
    const oldOrders = orders.filter((item, index) => index != idCurrentOrder);

    const handleCleanStore = () => {
        dispatch({ type: 'CLEAR_ORDERS' });
    }

    return (
        <C.PageArea>
            <Header />

            {orders.length > 0 &&
                <CurrentOrder order={currentOrder} oldOrders={oldOrders}/>
            }
        </C.PageArea>
    );
}