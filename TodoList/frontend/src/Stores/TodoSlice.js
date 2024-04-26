import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



export const getTodo= createAsyncThunk("Todo/getTodo",async ()=>{
       try {
        const res=await axios.get("http://localhost:8080/api/todo");
        console.log(res.data);
        return res.data;
       } catch (error) {
        console.log(error);
        
       }

})

export const addtodo=createAsyncThunk("Todo/addtodo",async(obj)=>{
    try {
        const res=await axios.post("http://localhost:8080/api/todo",obj)
        console.log(res.data);
        return obj;
    } catch (error) {
        console.log(error);
    }
})

const TodoSlice=createSlice({
    name:"Todo",
    initialState:{
         data:[],
         isLoading:false,
         isError:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
      
        builder.addCase(getTodo.pending,(state,action)=>{
            state.isLoading=true;     
           
        })
        builder.addCase(getTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
           
            state.data=[...action.payload.Data]
        })
        builder.addCase(getTodo.rejected,(state,action)=>{
            state.isError=true;
        })

      //....create............

      builder.addCase(addtodo.fulfilled,(state,action)=>{
          state.isLoading=false;
          console.log(action);
         //state.data.push(action.payload)
         state.data=[...state.data,action.payload]

      })
    }
});

export const TodoAction=TodoSlice.actions;
export default TodoSlice;