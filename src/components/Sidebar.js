import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SidebarThread from './SidebarThreads';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import './Sidebar.css';
import { 
    PhoneOutlined,
    QuestionAnswerOutlined,
    Settings
} from '@material-ui/icons';
import {Avatar, IconButton } from '@material-ui/core'


const Sidebar = () =>{
    return(
        <div className="sidebar">
           <div className="sidebar__header">
               <div className="sidebar__search">
                   <SearchIcon className="sidebar__searchIcon"/>
                   <input placeholder="Search" className="sidebar__input"></input>
               </div>
               <IconButton variant="outlined" id="sidebar_button">
               <BorderColorOutlinedIcon/>
               </IconButton>
           </div>
           <div className="sidebar__threads">
                    <SidebarThread/>
                    <SidebarThread/>
            </div>
           <div className="sidebar__bottom">
                <Avatar/>
                <IconButton>
                    <PhoneOutlined/>
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlined/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>

           </div>
        </div>
    )
}


export default Sidebar