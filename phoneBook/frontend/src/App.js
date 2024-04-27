
import { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Favourite from './Components/Favourite.js';
import Create from './Components/Create.js';
import View from './Components/View.js'

function App() {

  
  return (
   
      

      <div className="  min-h-screen">
  
     <BrowserRouter>
        <Layout/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/favourite' element={<Favourite/>} />
          <Route path='/view' element={<View/>} />
          <Route path='/seach/:id' />
        </Routes>
       
     </BrowserRouter>
    
      
    </div>
  );
}

export default App;
