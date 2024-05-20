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
            "view":{},
            "filter":[]
    },
    reducers:{
       filterAction:(state,action)=>{
             if(action.payload==="All")
             {
                state.filter=[...state.data]
             }
             else
             {
                const newdata=state.data.filter((item)=>{
                    if(item.group===action.payload)
                      return item;
                })
               
                state.filter=newdata;
             }
       },
       searchAction:(state,action)=>{
         
        const newdata=state.data.filter((item)=>{
            if(item.name.includes(action.payload))
            return item;
        })

        state.filter=newdata
       }
    
    },
    extraReducers: (builder)=>{
           builder.addCase(createPhoneBook.fulfilled,(state,action)=>{
            console.log(action);
              if(action.payload.Data)
                 state.data=[...state.data,action.payload.Data]
           })

           builder.addCase(getAllPhoneBook.fulfilled,(state,action)=>{
             state.data=[...action.payload.Data]
             state.filter=[...action.payload.Data]
           })
           builder.addCase(getbyidPhoneBook.fulfilled,(state,action)=>{
            state.view={...action.payload.Data[0]}
          })
    }
    }
);
export const {filterAction,searchAction}=PhonebookSlice.actions;

export default PhonebookSlice;