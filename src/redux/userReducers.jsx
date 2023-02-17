
export const InitialStates = {
    token: '',
    name: '',
    address: '',
    email: '',
    phone: '',
    pass: ''
}

export const userReducer = (state = InitialStates, action) => {

    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload.token };
            break;
        case 'SET_NAME':
            return { ...state, name: action.payload };
            break;
        case 'SET_ADDRESS':
            return { ...state, address: action.payload };
            break;
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
            break;
        case 'SET_PHONE':
            return { ...state, phone: action.payload };
            break;
        case 'SET_PASS':
            return { ...state, pass: action.payload };
            break;
    }
    return state;
}