import React, { useEffect } from 'react';
import Telegram from './components/Telegram'
import './App.css';
import { auth } from './firebase';
import {useSelector,useDispatch} from 'react-redux';
import {selectUser,login,logout} from './features/userSlice';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChange((authUser) => {
      if(auth.user){
        //login
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName
          })
        )
      }else{
        dispatch(logout())
      }
    });
     
  },[dispatch])
  return (
    <div className="App">
     {user ? <Telegram/> : <Login/>}
    </div>
  );
}

export default App;
