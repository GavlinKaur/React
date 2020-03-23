
import React, {useState} from 'react';

export default function Register ({setUser}) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPass,setrepeatPass] = useState('');

    function handleUsername (e) {
        setUsername(e.target.value);
    }

    function handlePassword (e) {
        setPassword(e.target.value);
    }

    function handleRepeatPass (e) {
        setrepeatPass(e.target.value);
    }
    return (
        <form onSubmit={(e)=>{e.preventDefault(); setUser(username)}}>
            <label htmlFor="register-username">UserName:</label>
            <input type="text" name="register-username" id="register-username" value={username} onChange={handleUsername}/>
            <label htmlFor="register-password">Password :</label>
            <input type="text" name="register-password" id="register-password" value={password} onChange={handlePassword}/>
            <label htmlFor="register-password-repeat">Repeat Password :</label>
            <input type="text" name="register-password-repeat" id="register-password=" value={repeatPass} onChange={handleRepeatPass}/>
            <input type="submit" value="Register" disabled={username.length === 0 || password.length===0 || password !== repeatPass}></input>
        </form>
    
    )
}