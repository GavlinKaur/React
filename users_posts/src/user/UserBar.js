import React,{useState} from 'react';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

export default function UserBar ({user,setUser}) {

    // const [user,setUser] = useState('');

    if(user) {
        return ( <Logout user={user} setUser={setUser}></Logout>)
    }
    else {
        return ( 
            <React.Fragment>
                <Login setUser={setUser}></Login>
                <Register setUser={setUser}></Register>
            </React.Fragment>
        )
    }

}