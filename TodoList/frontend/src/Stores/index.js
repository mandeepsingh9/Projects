import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice.js";



const store=configureStore({
  reducer:{
    todo:TodoSlice.reducer
  }
})


export default store;