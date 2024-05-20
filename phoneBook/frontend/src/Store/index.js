
import {configureStore} from '@reduxjs/toolkit'
import PhonebookSlice from './ContactSlice';
import favouriteSlice from './FavouriteSlice';
const store= configureStore({
    reducer:{
        "contact": PhonebookSlice.reducer,
        "favourite":favouriteSlice.reducer
    }
})

export default store; 