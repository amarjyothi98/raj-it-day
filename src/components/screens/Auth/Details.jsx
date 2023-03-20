import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
function Details() {
    const params = useLocation()
    const { google } = params.state
    const [obj, setObj] = useState({})

    function handleChange(event) {
        var k = obj
        k[event.target.name] = event.target.value
        setObj(k)
        console.log(obj)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (obj['location'] && obj['location'] == '') {
            alert("location is required")
        }
        if (obj['name'] && obj['name'] == '') {
            alert("name is required")
        }

        const docRef = doc(db, "users", "qBiWZETD6fv0mfs6DUe3");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }


    }


    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>

            <div className=''>
                <h4 className='text-center'>Give us more info</h4>
                {(google) && <input onChange={(e) => handleChange(e)} className='form-control my-2' placeholder='Name'></input>}
                <input onChange={(e) => handleChange(e)} className='form-control my-2' placeholder='Location'></input>
                <button className='btn btn-primary w-100'>Continue</button>
            </div>
        </div>
    )
}

export default Details