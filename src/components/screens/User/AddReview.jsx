import React, { useEffect, useState } from 'react'
import { db, auth } from '../../constants/firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { option } from '../../constants/options'
function AddReview() {

    const navigate = useNavigate()
    
    const [data, setData] = useState({})
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const [userLocation, setUserLocation]=useState('')

    var handleChange = (e) => {
        var k = data
        k[e.target.name] = e.target.value
        setData(k)
        console.log(data)
    }

    const setLoc=(position)=>{
        setUserLocation(`${position.coords.latitude},${position.coords.longitude}`)
    }
    useEffect(e=>{
        if(auth.currentUser==null){
            navigate('/login')
        }
        console.log(auth)

        navigator.geolocation.getCurrentPosition(setLoc)
    },[])




    var [isLoaded, setIsLoaded] = useState(1)
    var handleSubmit = async (e) => {
        e.preventDefault()
        var flag = false;
        option.map(e => {
            if (!data[e.label]) {
                flag = true;
                return;
            }
            if (data[e.label] == '' || data[e.label] == 'Choose a Option') {
                flag = true;
                return;
            }
        })
        console.log("Flag is ", flag);
        if (!flag) {

            setIsLoaded(false)
            setButtonDisabled(true)
            var dt = new Date()
            await addDoc(collection(db, 'reviews'), {
                name: auth.currentUser.displayName || "test",
                from: auth.currentUser.email || "test@gmail.com",
                date: dt.toDateString(),
                data: data,
                location:userLocation
            }).then(e => {
                navigate('/confirm')
            }).catch(err => {
                alert(err.message)
                setIsLoaded(true)
            })
        } else {
            alert("All Fields are Mandatory")
        }
    }
    return (
        <div className='d-flex align-items-center text-center bgimage' style={{ height: '100vh' }}>
            {
                <div className='w-50 mx-auto p-3 rounded' style={{ height: '80vh', overflowY: 'scroll' }}>
                    <h3 className='text-black'> We've some questions</h3>
                    <form>
                        {
                            option.map(e => {
                                return (
                                    <div className='text-black rounded py-3 my-2 d-flex flex-wrap justify-content-between align-items-center'>
                                        <label htmlFor="" className='text-start'>{e.label}</label>
                                        {(e.options.length > 1) ? <select placeholder={e.label} name={e.label} id="" className='p-1 border rounded w-100 my-2' onChange={(e) => handleChange(e)} required={true}>
                                            {
                                                e.options.map(k => {
                                                    return <option style={{ display: (k == 'Choose a Option') ? "none" : "" }} value={k}>{k}</option>
                                                })
                                            }
                                        </select> : <input min={100} name={e.label} className='form-control my-1' onChange={(e) => handleChange(e)} placeholder={""} required />}
                                    </div>
                                )
                            })
                        }
                        <button className="btn btn-warning my-2 w-100" disabled={isButtonDisabled} onClick={(e) => handleSubmit(e)}>{(isLoaded)?"Submit":<i className='fa fa-spinner fa-spin text-white' />}</button>

                    </form>

                </div>
                    
            }
        </div>
    )
}

export default AddReview