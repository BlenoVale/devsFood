export const InitialStates = {
    orders: []
}

export const orderReducer = (state = InitialStates, action) => {
    let orders = [...state.orders];
    switch (action.type) {
        case 'ADD_ORDER':
            orders.push({...action.payload.order});
            console.log('passou aqui', orders);
            return { ...state, orders };
            break;
        case 'CLEAR_ORDERS':
            return InitialStates;
    }
    return state;
}