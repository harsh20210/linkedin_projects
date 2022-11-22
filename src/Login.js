import React,{useEffect, useState} from 'react';
import './Login.css';
import link from './linkedInFull.png';
import {  useDispatch } from 'react-redux';
import {LoginInfo} from './redux/action';
import { useNavigate } from 'react-router-dom';
import baseurl from './Axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const [dataChange , setDataChange ] = useState({});
    const [dataChangeForReg , setDataChangeForReg] = useState({}); 
    const [triggerRegistration , setTriggerRegistration] = useState(false);
    // const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [trigger , setTrigger] = useState(false);

    const onChangeTheText = (e) => {
        const {name , value } = e.target;
        setDataChange({
            ...dataChange,
            [name]:value 
        })
    };

    const onChangeTheTextForReg = (e) => {
        const {name , value } = e.target;
        setDataChangeForReg({
            ...dataChangeForReg,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(LoginInfo(dataChange));
        
        baseurl.post('/api/login' , dataChange )
        .then( (res) => { 
            if(res.data.status === true) {
                dispatch(LoginInfo(res.data.message));
                localStorage.setItem("token" , res.data.token);
                localStorage.setItem("name" , res.data.message.name);
                history("/FeedPage");
                toast.success("Welcome you have login", {
                    autoClose: 5000,
                    });
            } else {
                toast.error(res.data.message, { autoClose: 5000 });
            }
        })
        .catch( (err) => {
            toast.error(err.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } )
    }

    useEffect(() => {
       if(trigger) {
        setDataChangeForReg({});
        console.log("Trigger")
        console.log(dataChangeForReg)
       }
    },[trigger])

    const handleRegistration = (e) => {
        e.preventDefault();
        // dispatch(LoginInfo(dataChange));
        baseurl.post("http://localhost:5001/api/registration" , {
            dataChangeForReg
        }).then( (res) => {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTriggerRegistration(false);
                setTrigger(true)
            })
        .catch( (err) => {
            console.log(err.response.data);
            toast.error(err.response.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                // setDataChangeForReg({})
        })
    }

    const handleClickRegister = () => {
        setTriggerRegistration(true);
        setDataChangeForReg({});
    }

    return (
        <div className="login">
         <ToastContainer />
           <img src={link} /> 
           
           {triggerRegistration ? (
                 <>
                  <form onSubmit={handleRegistration}>
                  <input onChange={onChangeTheTextForReg} 
                   required="This filed can not be empty" 
                   value={dataChangeForReg.name ?? ""}
                   name="name" 
                   placeholder="Full Name Required*" 
                   type="text" />
                  
                  <input onChange={onChangeTheTextForReg} 
                  value={dataChangeForReg.url ?? ""}
                  name="url" 
                  placeholder="Profile Url" 
                  type="text" />
                  <input onChange={onChangeTheTextForReg} 
                   name="email"
                   value={dataChangeForReg.email ?? ""} 
                   required="This filed can not be empty" 
                   placeholder="Email Required*" 
                   type="email"/>
                  <input onChange={onChangeTheTextForReg} 
                  value={dataChangeForReg.Password ?? ""}
                  name="Password" 
                  required="This filed can not be empty" 
                  placeholder="Password Required*" 
                  type="password" />
                  <input onChange={onChangeTheTextForReg} 
                  value={dataChangeForReg.ConformPassword ?? ""}
                  name="ConformPassword" 
                  required="This filed can not be empty" 
                  placeholder="ConformPassword Required*" 
                  type="password" />
                  <button type="submit">Sign In</button>
                  </form>
                  <p>If a Member ? <span className="login_registwer" onClick={() => { setTriggerRegistration(false); setDataChange({}) } }>Login</span></p>

                 </>
           ) : ( <>
            <form onSubmit={handleSubmit}>
            {/* <input onChange={onChangeTheText} name="name" placeholder="full Name" type="text" /> */}
            {/* <input onChange={onChangeTheText} name="url" placeholder="Profile Url" type="text" /> */}
            <input onChange={onChangeTheText} 
             value={dataChange.email ?? ""}
             required
             name="email" 
             placeholder="Email Required*" 
             type="email"/>
            <input onChange={onChangeTheText}
            required
             value={dataChange.password ?? ""} 
             placeholder="Password Required*"
             name="password" 
             type="password" />
            <button type="submit">Login</button>
         </form>

         <p>Not a Member ? {" "} <span className="login_registwer" onClick={handleClickRegister}>Register Now</span></p>
            </>)
            }
          
        </div>
    )
}
