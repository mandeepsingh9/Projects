import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getTodo=createAsyncThunk("todo/getTodo",async()=>{
     try {
        const res=await axios("http://localhost:8080/api/todo");
        console.log(res.data);
        return res.data;
     } catch (error) {
        console.log(error);
     }
})

export const createTodo=createAsyncThunk("todo/createTodo",async(obj)=>{
    try {
       const res=await axios.post("http://localhost:8080/api/todo",obj);
       console.log(res.data);
       return res.data;
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



        builder.addCase(createTodo.pending,(state,action)=>{
            state.isLoading=true;     
           
        })
        builder.addCase(createTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            
        })
        builder.addCase(createTodo.rejected,(state,action)=>{
            state.isError=true;
        })

    }
});

export const TodoAction=TodoSlice.actions;
export default TodoSlice;