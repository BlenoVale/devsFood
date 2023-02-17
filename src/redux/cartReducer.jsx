export const InitialStates = {
    products: [],
    discount: 0,
    delivery: 0,
    status: ''
}

export const cartReducer = (state = InitialStates, action) => {
    let products = [...state.products];
    switch (action.type) {
        case 'ADD_PRODUCT':
            let id = action.payload.data.id;
            let index = products.findIndex(item => item.id === id);
            if (index > -1) {
                products[index].qtd += action.payload.qtd;
            } else {
                products.push({
                    ...action.payload.data,
                    qtd: action.payload.qtd
                });
            }

            console.log(products);

            return { ...state, products };
            break;

        case 'CHANGE_PRODUCT':
            if (products[action.payload.key]) {
                switch (action.payload.type) {
                    case '-':

                        products[action.payload.key].qtd--;

                        if (products[action.payload.key].qtd <= 0) {
                            products = products.filter((item, index) => index != action.payload.key);
                        }
                        break;
                    case '+':
                        products[action.payload.key].qtd++;
                        break;
                }
            }

            return { ...state, products };
            break;
        case 'CLEAR_PRODUCTS':
            return InitialStates;
            break;
    }
    return state;
}