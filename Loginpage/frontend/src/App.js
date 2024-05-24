import logo from './logo.svg';
import './App.css';

import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import store from './stores/stores';

function App() {

    function userDataHandle(obj)
    {
       console.log(obj);
    }


  return (
   <>
   <store.Provider value={{userDataHandle}}>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
</BrowserRouter>
</store.Provider>
   </>
  );
}

export default App;
