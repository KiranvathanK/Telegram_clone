import React from 'react';
import {Avatar,IconButton} from '@material-ui/core'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import {useState} from 'react'
import './Thread.css';

const Thread =() => {
    const [input,setInput] = useState('');

    const sendmessage = (event) =>{
        event.preventDefault();

        setInput('')
        console.log(input);
    }
    return (
        <div className="thread">
            <div className="thread__header">
                <div className="thread__header__contents">
                <Avatar/>
                <div className="thread__header__contents__info">
                    <h4>ThreadName</h4>
                    <h5>Last seen</h5>
                </div>
            </div>
            <IconButton>
            <MoreHoriz className="thread__header__details"/>
        </IconButton>
        </div>
        <div className="thread__messages">
            <div className="thread__input">
                <input placeholder="write amessage.." type="text" value={input } onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={sendmessage}>Send message</button>
            </div>
        </div>

        </div>
    )
}

export default Thread