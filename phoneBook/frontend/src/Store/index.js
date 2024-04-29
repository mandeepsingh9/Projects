
import {configureStore} from '@reduxjs/toolkit'
import PhonebookSlice from './ContactSlice';
const store= configureStore({
    reducer:{
        "contact": PhonebookSlice.reducer
    }
})

export default store; 