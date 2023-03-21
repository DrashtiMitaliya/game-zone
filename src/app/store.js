import {configureStore}  from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'

// create a new store
const store =configureStore({
    reducer  : {
        user  : userReducer
    }
}) 

export default store 