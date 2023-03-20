import React, { useState } from 'react'
import { auth } from '../../constants/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { collection, ref, addDoc } from 'firebase/firestore'
import { db } from '../../constants/firebase'
import './auth.css'
import { Link,useNavigate } from 'react-router-dom'

function Register() {
    const navigate=useNavigate()
    const [obj, setObj] = useState({
        email: '',
        password: '',
        name: '',
        uniqueCode: '',
        phone: '',
        role: '',
        location:''
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
        if (obj.phone.length != 10) {
            alert("Invalid Phone Number")
            return;
        }
        setIsLoaded(false)
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(async (userCredential) => {
                await addDoc(collection(db, 'users'), {...obj}).then(e => {
                    localStorage.setItem('appUser', JSON.stringify({id:'bd9weji2w29', data:obj}))
                    setIsLoaded(true)
                    navigate('/home')
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
                    uniqueCode: '',
                    phone: '',
                    role: '',
                    location:''
                })
                setIsLoaded(true)
            });
    }


    return (

        <div className="container-out">
            <div className="innerBox">

                <h1 className='heading'> Register Yourself </h1>

                <form className='w-75 mx-auto'>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="text" className="form-control" name='name' id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="text" className="form-control" name="phone" id="exampleFormControlInput1" placeholder="Number" />
                    </div>
                    <div className="form-group container">
                        <select className="form-control" onChange={(e) => handleChange(e)} id="exampleFormControlSelect1" name="role">
                            <option>Government Official</option>
                            <option>Government Intern</option>

                        </select>
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="text" name="uniqueCode" className="form-control" id="exampleFormControlInput1" placeholder="Your Unique ID" />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="password" className="form-control" name="password" id="exampleFormControlInput1" placeholder="Password" />
                    </div>
                    <div className="form-group container">
                        <input required onChange={(e) => handleChange(e)} type="text" className="form-control" name="location" id="exampleFormControlInput1" placeholder="Location" />
                    </div>
                    <div className="footer">

                        <button onClick={handleSubmit} className='btn btn-primary w-100'>{ (isLoaded)?"Register":<i className='fa fa-spinner fa-spin'></i>}</button>
                        <Link to="/login" className='text-center'>Already have an account</Link>
                        <p className="alert error">{err}</p>

                    </div>
                </form>

            </div>

        </div>


    )
}

export default Register