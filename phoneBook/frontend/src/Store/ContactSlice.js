import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const createPhoneBook=createAsyncThunk("PhoneBook/createPhoneBook",async(obj)=>{

    try {
        const res= await axios.post("http://localhost:8080/api/phonebook",obj)
     
        return res.data;
        
    } catch (error) {
       console.log(error);        
    }
})
export const getAllPhoneBook=createAsyncThunk("PhoneBook/getAllPhoneBook",async()=>{

    try {
        const res= await axios.get("http://localhost:8080/api/phonebook")
    
        return res.data;
        
    } catch (error) {
       console.log(error);        
    }
})

export const getbyidPhoneBook=createAsyncThunk("PhoneBook/getbyidPhoneBook",async(id)=>{

    try {
        const res= await axios.get(`http://localhost:8080/api/phonebook/view/${id}`)
        console.log(res.data);
        return res.data;
        
    } catch (error) {
       console.log(error);        
    }
})

const PhonebookSlice=createSlice(
    {
        name:"PhoneBook",
        initialState:{
            "data":[],
            "isLoading":false,
            "isError":false,
            "view":{}
    },
    extraReducers: (builder)=>{
           builder.addCase(createPhoneBook.fulfilled,(state,action)=>{
                 state.data=[...state.data,action.payload.Data]
           })

           builder.addCase(getAllPhoneBook.fulfilled,(state,action)=>{
             state.data=[...action.payload.Data]
           })
           builder.addCase(getbyidPhoneBook.fulfilled,(state,action)=>{
            state.view={...action.payload.Data[0]}
          })
    }
    }
);

export default PhonebookSlice;