import React, { useState } from 'react'
import Screen from './reviewScreens/Screen'
import { db, auth } from '../../constants/firebase'
import { collection, addDoc } from '@firebase/firestore'
import { reload } from '@firebase/auth'
function AddReview() {
    const [data, setData] = useState({})
    const option = [

        {
            label: "Lorem isdms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "Lorem isdmdksmms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "Lorkdskem isdms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "Lorem ismddms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "Lodmrem isdms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "Lorem isdms dmdldmck",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "Lorem il,ldmcsdms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
        {
            label: "kdmldmkcml isdms dmdk",
            options: ['skdmskd', 'sdssdm', 'dsdmk']
        },
    ]

    var handleChange = (e) => {
        var k = data
        k[e.target.name] = e.target.value
        setData(k)
        console.log(data)
    }

    var [err, setErr] = useState('')
    var [isLoaded, setIsLoaded] = useState(1)
    var handleSubmit = async () => {
        if(!Object.keys(data).length){
            alert("Choose options please")
            setActive(1)
            return;
        }
        setIsLoaded(false)
        var dt = new Date()
        await addDoc(collection(db, 'reviews'), {
            name: localStorage.getItem('appUser') + `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`,
            data: data
        }).then(e => {
            alert("Successfully Added Review")
            setIsLoaded(true)
        }).catch(err => {
            setErr(err.message)
            setIsLoaded(true)
        })
    }
    const [active, setActive] = useState(1)
    return (
        (isLoaded)?
        <div>
            
            {(active == 1) ? <Screen onChange={(e) => handleChange(e)} data={[option[0], option[1]]} active={1} setActive={(val) => setActive(val)} /> : null}
            {(active == 2) ? <Screen onChange={(e) => handleChange(e)} data={[option[2], option[3]]} active={2} setActive={(val) => setActive(val)} /> : null}
            {(active == 3) ? <Screen onChange={(e) => handleChange(e)} data={[option[4], option[5]]} active={3} setActive={(val) => setActive(val)} /> : null}
            {(active == 4) ? <Screen onChange={(e) => handleChange(e)} data={[option[6], option[7]]} active={4} setActive={(val) => setActive(val)} /> : null}
            {(active>4)?<p>Please Submit</p>:null}
            <button disabled={active <= 4} onClick={() => handleSubmit()}>Submit</button>
            {err}
        </div>:<i className='fa fa-spinner fa-spin'></i>
    )
}

export default AddReview