import React, { useEffect, useState } from 'react'
import { db, auth } from '../../constants/firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom'
function AddReview() {

    const navigate = useNavigate()
    
    const [data, setData] = useState({})
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const option = [

        {
            label: "How frequently, height & weight of childrens is measured at Anganbari?",
            options: ['Choose a Option', 'Weekly', 'Monthly', 'quarterly', 'other']
        },
        {
            label: "Who creates health regulations, including nutritional ones?",
            options: ['Choose a Option', 'State Funded Hospitals', 'Private Hospitals', 'Both']
        },
        {
            label: "How do you set energy goals in critically challenged childrens?",
            options: ['Choose a Option', 'All the time', 'Sometimes', 'Never']
        },
        {
            label: "How do you asses knowledge about nutrition of physicians, who visit anganbari? ",
            options: ['Choose a Option', 'Good', 'Average', 'Poor']
        },
        {
            label: "What problems you have faced in anganbari?",
            options: ['Choose a Option', 'Irregularity in Distribution', 'Unhygenic Cooking Process', 'Bad Food Quality']
        },
        {
            label: "What's the condition of toilets in anganbari?",
            options: ['Choose a Option', 'Clean', 'Unhygenic', 'No Proper Toilets']
        },
        {
            label: "Drinking water provided to the students is",
            options: ['Choose a Option', 'at normal pH Level', 'not properly disinfected', 'not free from contaminants']
        },
        {
            label: "Tell us about the food condition there?",
            options: ['Choose a Option',]
        },
        {
            label: "Centre Name",
            options: ['Choose a Option',]
        },
    ]

    var handleChange = (e) => {
        var k = data
        k[e.target.name] = e.target.value
        setData(k)
        console.log(data)
    }
    useEffect(e=>{
        if(auth.currentUser==null){
            navigate('/login')
        }
        console.log(auth)
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
                data: data
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
        <div className='d-flex align-items-center text-center' style={{ height: '100vh' }}>
            {
                <div className='w-50 mx-auto' style={{ height: '80vh', overflowY: 'scroll' }}>
                    <h3> We've some questions</h3>
                    <form>


                        {
                            option.map(e => {
                                return (
                                    <div className='bg-white rounded py-3 my-2 d-flex flex-wrap justify-content-between align-items-center'>
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
                        <button className="btn btn-primary my-2 w-100" disabled={isButtonDisabled} onClick={(e) => handleSubmit(e)}>{(isLoaded)?"Submit":<i className='fa fa-spinner fa-spin text-white' />}</button>

                    </form>

                </div>
                    
            }
        </div>
    )
}

export default AddReview