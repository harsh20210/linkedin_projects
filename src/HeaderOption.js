import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';

export default function HeaderOption({avatr , Icons , title}) {
  return (
    <div className='headerOption'>
    {avatr && <Avatar className="headerOption_icons" src={avatr}/> }
    {Icons && <Icons className="headerOption_icons"/>}
    <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}
//harsh