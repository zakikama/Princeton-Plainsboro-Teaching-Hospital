import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import BookRoundedIcon from '@material-ui/icons/BookRounded';

export const sidebarData = [
    {
        title:"Home",
        icon:<HomeRoundedIcon/>,
        link:"/home"
    },
    {
        title:"Profile",
        icon:<FaceRoundedIcon/>,
        link:"/Profile"
    },
    {
        title:"Appointements",
        icon:<BookRoundedIcon/>,
        link:"/Appointements"
    },
    {
        title:"My Calendar",
        icon:<EventRoundedIcon/>,
        link:"/Calendrier"
    }
    
] 
