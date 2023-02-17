import { configurestore } from '@reduxjs/toolkit';
import { persisteStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configurestore(persistedReducer);
let pesistor = persisteStore(store);

export { store, pesistor };

