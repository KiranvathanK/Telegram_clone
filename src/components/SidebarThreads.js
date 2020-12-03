import React from 'react';
import './SidebarThreads.css'
import {Avatar} from '@material-ui/core'
const SidebarThread = () =>{
    return(
        <div className="sidebarThread">
        <Avatar/>
        <div className="sidebarThread__details">
        <h3>Thread name</h3>
        <p>this is info</p>
        <small className="sidebarThread__timestamp">timestamp </small>
        </div>
        </div>
    )
    
}

export default SidebarThread;