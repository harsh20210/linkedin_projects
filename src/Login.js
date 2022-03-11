import React,{useState} from 'react';
import './Login.css';
import link from './linkedInFull.png';
import { useSelector , useDispatch } from 'react-redux';
import {LoginInfo} from './redux/action';

export default function Login() {
    const [dataChange , setDataChange ] = useState({});
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const onChangeTheText = (e) => {
        const {name , value } = e.target;
        setDataChange({
            ...dataChange,
            [name]:value 
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
     dispatch(LoginInfo(dataChange))
    }

    return (
        <div className="login">
          {console.log(state)}
           
           <img src={link} /> 

           <form onSubmit={handleSubmit}>
              <input onChange={onChangeTheText} name="name" placeholder="full Name" type="text" />
              <input onChange={onChangeTheText} name="url" placeholder="Profile Url" type="text" />
              <input onChange={onChangeTheText} name="email" placeholder="email" type="emai"/>
              <input placeholder="Password" type="password" />
              <button type="submit">Sign In</button>
           </form>

           <p>Not a Member ? {" "} <span className="login_registwer">Register Now</span></p>
        </div>
    )
}
