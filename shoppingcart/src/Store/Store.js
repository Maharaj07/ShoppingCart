import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer  from '../Slices/ProductsSlice';
import cartReducer from '../Slices/cartItem'
import counterReducer from '../Slices/counterSlice'
import userReducer from '../Slices/UsersSlice'
import loginReducer from '../Slices/loginSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'
import { combineReducers } from 'redux';
import AdminReducer from '../Slices/adminLoginSlice'


const persistConfig={
    key:"root",
    version:1,
    storage
}
const reducer=combineReducers({
        products:ProductsReducer,
        cartItems:cartReducer,
        counter:counterReducer,
        users:userReducer,
        Login:loginReducer,
        AdminLogin:AdminReducer,
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store=configureStore({
    reducer:persistedReducer
})
