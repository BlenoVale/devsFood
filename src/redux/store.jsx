import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { userReducer } from './userReducers';
import { cartReducer } from "./cartReducer";
import { orderReducer } from './orderReducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart', 'order']
}



const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    order: orderReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store);