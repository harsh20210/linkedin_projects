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
                <HeaderOption avatr="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTc5OTk2ODUyMTMxNzM0ODcy%2Fgettyimages-1229892983-square.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fbusiness-figure%2Felon-musk&tbnid=X0aQRKeOBKhtJM&vet=12ahUKEwjais3Ey432AhUq1nMBHeRJAfsQMygBegUIARDTAQ..i&docid=h24P-DAcCzayvM&w=1200&h=1200&q=elon%20musk&ved=2ahUKEwjais3Ey432AhUq1nMBHeRJAfsQMygBegUIARDTAQ"
                title="me"/>
                </div>
              {/*harhs*/}
        </div>
    )
}
