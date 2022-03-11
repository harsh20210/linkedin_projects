import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';
import { LogOut } from './redux/action';
import { useDispatch , useSelector } from 'react-redux';

export default function HeaderOption({avatr , Icons , title}) {
  const dispatch = useDispatch();
  const value = useSelector((state)=> state);
  return (
    <div className='headerOption'>
    {avatr  && <div className="AvtarMainDiv"> <div className="avtar"> <span className="spanTag" onClick={()=> dispatch(LogOut())}> Logout </span>  </div> <Avatar className="headerOption_icons" src={value.url}/> </div>  }
    {Icons && <Icons className="headerOption_icons"/>}
    <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}
//harsh