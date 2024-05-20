import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getbyidPhoneBook } from '../Store/ContactSlice';
import { Addfavourite } from '../Store/FavouriteSlice';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const favouriteState = useSelector(state => state.favourite);
 const [Favourite,setFavourite]=useState();
  const isFavourite = favouriteState.fav.some(favItem => favItem.contactId === item._id);
console.log(isFavourite);
  const handleFav = id => {
    const obj = {
      contactId: id
    };
    dispatch(Addfavourite(obj));
  };

  const handleView = id => {
    dispatch(getbyidPhoneBook(id));
  };

  return (
    <div className='flex items-center gap-3 md:basis-1/2 h-32 border-4 w-full justify-around bg-slate-600 text-white text-2xl font-bold rounded-3xl md:flex-nowrap flex-wrap box-border'>
      <div className='border-2 border-slate-950 rounded-full p-2 bg-slate-800 lg:text-6xl md:text-4xl text-6xl overflow-hidden'><label>🙎🏻‍♂️</label></div>
      <label>{item.name}</label>
      <div className='flex gap-3'>
        <NavLink to={`/view/${item._id}`}>
          <button className='text-lg bg-slate-800 p-1 px-2 rounded-lg text-blue-500 hover:text-red-400' onClick={() => handleView(item._id)}>View</button>
        </NavLink>
        <button onClick={() => handleFav(item._id)}>{isFavourite ? '❤️' : '♡'}</button>
      </div>
    </div>
  );
};

export default Card;
