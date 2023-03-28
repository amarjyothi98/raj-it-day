import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../constants/firebase';
import './auth.css'
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from '@firebase/firestore';
import { langProvider, userLang } from '../../language/languageProvider';

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

    useEffect(e => {
        setTimeout(() => {
            setErr("")
        }, 6000)
    }, [err])


    useEffect(e => {

        function handleSubmit(email, password) {
            console.log(email, password)
            if (email === '' || password === '') {
                setErr("Both Details Required")
                return;
            }
            setIsLoaded(false)
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const qw = query(collection(db, 'users'), where("email", '==', obj.email))

                    const querySnapshot = await getDocs(qw);
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data())
                        localStorage.setItem('appUser', JSON.stringify({ id: doc.id, data: doc.data() }))
                    });
                    navigate('/home')
                    setIsLoaded(true)
                })
                .catch((error) => {
                    setErr(error.message.split('/')[error.message.split('/').length - 1])
                    setIsLoaded(true)
                });
        }
        if (localStorage.getItem('appUser') != null) {
            var user = JSON.parse(localStorage.getItem('appUser'))
            handleSubmit(user.data.email, user.data.password)
        }
    }, [])


    return (

        <div className="d-flex justify-content-center align-items-center bg-black" style={{ height: '100vh' }}>
            <div className="col-lg-4 bg-white px-2 py-3 rounded col-10 mx-auto">

                <h1 className='heading'>{langProvider[userLang].login.heading1}</h1>

                <form className='w-75 mx-auto'>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder={langProvider[userLang].login.placeholder1} />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="password" className="form-control" name='password' id="exampleFormControlInput1" placeholder={langProvider[userLang].login.placeholder2} />
                    </div>
                    <div className="footer">

                        <button type='button' onClick={() => handleSubmit(obj.email, obj.password)} className='btn btn-primary w-100'>{(isLoaded) ? langProvider[userLang].login.btn1 : <i className='fa fa-spinner fa-spin'></i>}</button>
                        <Link to="/register" className='text-center'>{langProvider[userLang].login.link1}</Link>
                        <p className="alert error my-0 py-0">{err}</p>

                    </div>
                </form>

            </div>
        </div>
    )
}
export default Login