import { useEffect, useRef } from 'react';
import './App.css';
import Todos from './Components/Todos';
import { useDispatch } from 'react-redux';
import { getTodo,createTodo } from './Stores/TodoSlice';


function App() {


const Item=useRef();
   const dispatch=useDispatch()
    
    useEffect(()=>{
       dispatch(getTodo());
    },[])
    
    

     function handleAdd()
     {
        let item=Item.current.value;
        let obj={
          userid:Date.now(),
          item:item,
          iscomplete:false
        }
        dispatch(createTodo(obj))
     }
  return (
    <>
    <div className='container mx-auto mt-9 w-5/12 h-auto '>
      <h1 className='text-center text-5xl font-extrabold'>TodoList</h1>

      <div className='mt-9 flex flex-col items-start gap-3 '>
        <input type='text' placeholder='Enter Todo' ref={Item} className='w-full h-8 bg-slate-600 p-5 rounded-2xl shadow-lg  shadow-cyan-500/50' />
        <label className='place-self-end rounded-2xl py-2 mr-6 px-5 bg-cyan-500 shadow-lg  shadow-cyan-500/50' onClick={handleAdd}>➕</label>
      </div>
     
    </div>

    <Todos/>
    </>
  );
}

export default App;
