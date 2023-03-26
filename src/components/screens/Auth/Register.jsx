import React, { useState } from 'react'
import { auth } from '../../constants/firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../constants/firebase'
import './auth.css'
import { Link,useNavigate } from 'react-router-dom'
import { langProvider, userLang } from '../../language/languageProvider'

function Register() {
    const navigate=useNavigate()
    const [obj, setObj] = useState({
        email: '',
        password: '',
        name: '',
    })

    const [err, setErr] = useState('')
    const [isLoaded, setIsLoaded] = useState(1)


    function handleChange(event) {
        var k = obj
        k[event.target.name] = event.target.value
        setObj(k)
        console.log(obj)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErr('')
        if (obj.password.length < 6) {
            alert("Min 6 length Password Required")
            return;
        }

        setIsLoaded(false)
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(async (userCredential) => {
                await addDoc(collection(db, 'users'), {...obj}).then(e => {
                    localStorage.setItem('appUser', JSON.stringify({id:'bd9weji2w29', data:obj}))
                    setIsLoaded(true)
                    navigate('/login')
                }).catch(err=>{
                    setErr(err.message)
                    setIsLoaded(true)
                })
            })
            .catch((error) => {
                setErr(error.message.split('/')[error.message.split('/').length-1])
                setObj({
                    email: '',
                    password: '',
                    name: '',
                })
                setIsLoaded(true)
            });
    }


    return (

        <div className="container-out">
            <div className="innerBox">

                <h1 className='heading'>{langProvider[userLang].register.heading1}</h1>

                <form className='w-75 mx-auto'>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="text" className="form-control" name='name' id="exampleFormControlInput1" placeholder={langProvider[userLang].register.placeholder1} />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder={langProvider[userLang].register.placeholder2} />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="password" className="form-control" name="password" id="exampleFormControlInput1" placeholder={langProvider[userLang].register.placeholder3} />
                    </div>
                    <div className="footer">

                        <button onClick={handleSubmit} className='btn btn-primary w-100'>{ (isLoaded)?langProvider[userLang].register.btn1:<i className='fa fa-spinner fa-spin'></i>}</button>
                        <Link to="/login" className='text-center'>{langProvider[userLang].register.link1}</Link>
                        <p className="alert error">{err}</p>

                    </div>
                </form>

            </div>

        </div>


    )
}

export default Register