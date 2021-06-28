
import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import 'react-pro-sidebar/dist/css/styles.css';
import {sidebarData} from "../Sidebar/sidebarData"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import { Link } from 'react-router-dom';
function Sidebar() {
    
    return (
    <ProSidebar>
        <Menu iconShape="square">
        <MenuItem icon={<HomeRoundedIcon />}>Home<Link to="/Home" /></MenuItem>
        <MenuItem icon={<EventRoundedIcon />}>Calendrier<Link to="/Calendar" /></MenuItem>
        <MenuItem icon={<BookRoundedIcon />}>Mes Rendez-vous<Link to="/Booking" /></MenuItem>
        <SubMenu title="Doctors" icon={<LocalHospitalRoundedIcon />}>
        <MenuItem>Liste des docteurs<Link to="/DoctorList" /></MenuItem>
        <MenuItem>informations<Link to="/DoctorInformations" /></MenuItem>
        </SubMenu>
        
        <MenuItem icon={<HelpOutlineRoundedIcon />}>Aide<Link to="/help" /></MenuItem>
        <MenuItem icon={<ExitToAppRoundedIcon />}>Log Out<Link to="/" /></MenuItem>
        </Menu>
    </ProSidebar>
    )
}


export default Sidebar
