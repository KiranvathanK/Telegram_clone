import React from 'react';
import {Button} from '@material-ui/core';
import {auth,provider} from '../firebase';
import './Login.css';

 const Login =() =>{
     const signIn = () =>{
         auth.signInWithPopup(provider).catch((error) => alert(error.message))
     }
     return(
         <div className="login">
             <div className="login__telegram">
                 <img 
                 />
                 <h1>Telegram</h1>
             </div>
             <Button onClick={signIn}>SignIn</Button>
         </div>
     )
 }


 export default Login