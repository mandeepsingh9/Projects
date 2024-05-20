
import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Favourite from './Components/Favourite.js';
import Create from './Components/Create.js';
import View from './Components/View.js'
import { useDispatch } from 'react-redux';
import { getAllPhoneBook } from './Store/ContactSlice.js';
import { getfavourite } from './Store/FavouriteSlice.js';

function App() {
  
       const dispatch=useDispatch()
        useEffect(()=>{
             dispatch(getAllPhoneBook())
             dispatch(getfavourite());
        },[])
  
  return (
   
      

      <div className="  min-h-screen">
  
     <BrowserRouter>
        <Layout/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/favourite' element={<Favourite/>} />
          <Route path='/view/:id' element={<View/>} />
      
          <Route path='/seach/:id' />
        </Routes>
       
     </BrowserRouter>
    
      
    </div>
  );
}

export default App;
