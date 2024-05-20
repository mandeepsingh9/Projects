import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Addfavourite=createAsyncThunk("favourite/Addfavourite" ,async(obj)=>{
 
   try {
     const res= await axios.post(`http://localhost:8080/favourite`,obj)
     console.log(res.data);
     return res.data;
   } catch (error) {
    console.log(error);
   }
})

export const getfavourite=createAsyncThunk("favourite/getfavourite" ,async()=>{
 
    try {
      const res= await axios.get(`http://localhost:8080/favourite`)
      console.log(res.data);
      return res.data;
    } catch (error) {
     console.log(error);
    }
 })
const favouriteSlice=createSlice({
    name:"favourite",
    initialState:{fav:[]},
    extraReducers:(builder)=>{
    builder.addCase(Addfavourite.fulfilled ,(state,action)=>{
            console.log(action);
            state.fav=[...state.fav,action.payload.Data]
    })

    builder.addCase(getfavourite.fulfilled ,(state,action)=>{
        
        state.fav=[...action.payload.Data]
})
} 

    
});

export default favouriteSlice;
