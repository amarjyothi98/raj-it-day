import React, { useState } from 'react'
import {signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../constants/firebase';
import './auth.css'

function Login() {
    const [obj, setObj] = useState({
        email: '',
        password: ''
    })

    const [err,setErr]=useState('')


    function handleChange(event) {
        var k = obj
        k[event.target.name] = event.target.value
        setObj(k)
        console.log(obj)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(obj.email=='' || obj.password==''){
            alert("Both Details Required")
            return;
        }
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCredential) => {
                alert("Welcome", userCredential.user.name);
            })
            .catch((error) => {
                setErr(error.message);
            });
    }



    function googleLogin(e){
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            alert(user.name)
          }).catch((error) => {
            setErr(`${error.message} by ${error.customData.email}`);
          });
    }
    return (
        <div>
            <div className="container">
                <input type="text" onChange={(e) => handleChange(e)} name="email" placeholder='email' />
                <input type="password" onChange={(e) => handleChange(e)} name="password" placeholder='password' />
            </div>
            <button onClick={(e)=>handleSubmit(e)}>Login</button>
            <button onClick={(e)=>googleLogin(e)}>Sign in with Google</button>
            <p>{err}</p>
        </div>
    )
}

export default Login