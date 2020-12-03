import React from 'react';
import {Avatar} from '@material-ui/core'
const SidebarThread = () =>{
    return(
        <div className="sidebarThread">
        <Avatar/>
        <h3>Thread name</h3>
        <p>this is info</p>
        <small>timestamp </small>
        </div>
    )
    
}

export default SidebarThread;