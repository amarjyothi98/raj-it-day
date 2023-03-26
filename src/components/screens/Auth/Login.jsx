import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../constants/firebase';
import './auth.css'
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where,getDocs } from '@firebase/firestore';

function Login() {
    const [obj, setObj] = useState({
        email: '',
        password: ''
    })

    const [err, setErr] = useState('')
    const [isLoaded, setIsLoaded] = useState(1)
    const navigate = useNavigate()
    function handleChange(event) {
        var k = obj
        k[event.target.name] = event.target.value
        setObj(k)
        console.log(obj)
    }

    useEffect(e=>{
        setTimeout(()=>{
            setErr("")
        },3000)
    },[err])


    function handleSubmit(e) {
        e.preventDefault()
        if (obj.email === '' || obj.password === '') {
            setErr("Both Details Required")
            return;
        }
        setIsLoaded(false)
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(async(userCredential) => {
                const qw = query(collection(db, 'users'), where("email", '==', obj.email))

                const querySnapshot = await getDocs(qw);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                    localStorage.setItem('appUser1', JSON.stringify({id:doc.id, data:doc.data()}))
                });
                navigate('/home')
                setIsLoaded(true)
            })
            .catch((error) => {
                setErr(error.message.split('/')[error.message.split('/').length - 1])
                setIsLoaded(true)
            });
    }

    return (

        <div className="d-flex justify-content-center align-items-center bg-black" style={{height:'100vh'}}>
            <div className="col-lg-4 bg-white px-2 py-3 rounded col-10 mx-auto">

                <h1 className='heading'> Login Now </h1>

                <form className='w-75 mx-auto'>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="password" className="form-control" name='password' id="exampleFormControlInput1" placeholder="Password" />
                    </div>
                    <div className="footer">

                        <button onClick={handleSubmit} className='btn btn-primary w-100'>{(isLoaded) ? 'Log in' : <i className='fa fa-spinner fa-spin'></i>}</button>
                        <Link to="/register" className='text-center'>Register here</Link>
                        <p className="alert error my-0 py-0">{err}</p>

                    </div>
                </form>

            </div>
        </div>
    )
}
export default Login