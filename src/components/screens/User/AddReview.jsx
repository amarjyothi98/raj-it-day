import React, { useState } from 'react'
import Screen from './reviewScreens/Screen'
import { db, auth } from '../../constants/firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Loader from '../../constants/Loader'
function AddReview() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const option = [

        {
            label: "How frequently, height & weight of childrens is measured at Anganbari?",
            options: ['Weekly', 'Monthly', 'quarterly', 'other']
        },
        {
            label: "Who creates health regulations, including nutritional ones?",
            options: ['State Funded Hospitals', 'Private Hospitals', 'Both']
        },
        {
            label: "How do you set energy goals in critically challenged childrens?",
            options: ['All the time', 'Sometimes', 'Never']
        },
        {
            label: "How do you asses knowledge about nutrition of physicians, who visit anganbari? ",
            options: ['Good', 'Average', 'Poor']
        },
        {
            label: "What problems you have faced in anganbari?",
            options: ['Irregularity in Distribution', 'Unhygenic Cooking Process', 'Bad Food Quality']
        },
        {
            label: "What's the condition of toilets in anganbari?",
            options: ['Clean', 'Unhygenic', 'No Proper Toilets']
        },
        {
            label: "Drinking water provided to the students is",
            options: ['at normal pH Level', 'not properly disinfected', 'not free from contaminants']
        },
        {
            label: "Tell us about the food condition there?",
            options: []
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
        if(data['centre']===''){
            setErr("Centre is Required!")
            return;
        }
        if (!Object.keys(data).length) {
            setErr("Choose options please")
            return;
        }
        setIsLoaded(false)
        var dt = new Date()
        await addDoc(collection(db, 'reviews'), {
            name: auth.currentUser.displayName || "test",
            from:auth.currentUser.email || "test@gmail.com",
            date:dt.toDateString(),
            data: data
        }).then(e => {
            navigate('/confirm')
        }).catch(err => {
            setErr(err.message)
            setIsLoaded(true)
        })
    }
    const [active, setActive] = useState(1)
    return (
        <div className='d-flex align-items-center text-center' style={{ height: '100vh' }}>
            {(isLoaded)?
            <div className='w-50 mx-auto'> 
            {/* {JSON.parse(localStorage.getItem('appUser')).data.name},  */}
                <h3> We've some questions</h3>
                {(active === 1) ? <Screen onChange={(e) => handleChange(e)} data={[option[0], option[1]]} active={1} setActive={(val) => setActive(val)} /> : null}
                {(active === 2) ? <Screen onChange={(e) => handleChange(e)} data={[option[2], option[3]]} active={2} setActive={(val) => setActive(val)} /> : null}
                {(active === 3) ? <Screen onChange={(e) => handleChange(e)} data={[option[4], option[5]]} active={3} setActive={(val) => setActive(val)} /> : null}
                {(active === 4) ? <Screen onChange={(e) => handleChange(e)} data={[option[6], option[7]]} active={4} setActive={(val) => setActive(val)} /> : null}
                {(active > 4) && <input placeholder='Centre Location'  className="form-control" onChange={(e)=>handleChange(e)} />}
                {(active > 4) && <button  className="btn btn-primary my-2 w-100" onClick={() => handleSubmit()}>Submit</button>}
                {err}
            </div>:<Loader/>}
        </div>
    )
}

export default AddReview