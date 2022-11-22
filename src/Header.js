import React from 'react';
import './Header.css';
import linkedIn from './linkedin.png';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function Header() {
   
    return (
        <div className='header'>

            <div className='header_left'>
                <img src={linkedIn} alt='' />
                <div className='header_search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className='header_right'>
                <HeaderOption Icons={HomeIcon} title="home"/>
                <HeaderOption Icons={SupervisorAccountIcon} title="Network"/>
                <HeaderOption Icons={WorkIcon} title="Job"/>
                <HeaderOption Icons={MessageIcon} title="Message"/>
                <HeaderOption Icons={NotificationsIcon} title="Notification"/>
                <HeaderOption avatr="fjsfjsdfjdfjsdifjfi" title="me"/>
                </div>
              {/*harhs*/}
        </div>
    )
}
