import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../constants/firebase';
import './auth.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [obj, setObj] = useState({
        email: '',
        password: ''
    })

    const [err, setErr] = useState('')
    const [isLoaded,setIsLoaded]=useState(1)
    const navigate=useNavigate()
    function handleChange(event) {
        var k = obj
        k[event.target.name] = event.target.value
        setObj(k)
        console.log(obj)
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (obj.email == '' || obj.password == '') {
            alert("Both Details Required")
            return;
        }
        setIsLoaded(false)
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCredential) => {
                alert("Welcome", userCredential.user.name);
                setIsLoaded(true)
                navigate('/details', {state:{google:false}})
                localStorage.setItem('appUser', JSON.stringify(userCredential.user))
            })
            .catch((error) => {
                setErr(error.message);
                setIsLoaded(true)
            });
    }



    function googleLogin(e) {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            localStorage.setItem('appUser', JSON.stringify(user))
            navigate('/details', {state:{google:true}})
            alert(user.displayName)
        }).catch((error) => {
            setErr(`${error.message} by ${error.customData.email}`);
        });
    }
    return (

        <div className="container-out">
            {(isLoaded) ?
                <div className="innerBox">

                    <h1 className='heading'> Login Now </h1>

                    <form className='w-75 mx-auto'>
                        <div className="form-group container">
                            <input required onChange={(e) => handleChange(e)} type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div className="form-group container">
                            <input required onChange={(e) => handleChange(e)} type="text" className="form-control" name='password' id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div className="footer">

                            <button onClick={handleSubmit} className='btn btn-primary w-100'>Log in</button>
                            <p className='or' >or</p>
                            <button onClick={googleLogin} className='btn btn-primary w-100 my-2'><i className='fab mx-2 fa-google'></i>Sign in with Google</button>
                            <Link to="/register" className='text-center'>Don't have an account</Link>
                            <p className="alert error">{err}</p>

                        </div>
                    </form>

                </div> : <i className='fa fa-spinner fa-spin'></i>}
        </div>
    )
}
export default Login