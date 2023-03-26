
import App from './App';

import React, { useEffect, useState } from 'react'
import { db, auth } from '../../constants/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { option } from '../../constants/options';

function Dashboard() {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [selectedOption, setOptionSelected]=useState('')

    var newOptions=[{label:"Choose a Question"},...option]
    useEffect(e => {
        async function loadReviews() {
            const querySnapshot = await getDocs(collection(db, "reviews"));
            let data1 = []
            querySnapshot.forEach((doc) => {
                data1.push(doc.data())
                console.log(doc.data())
            });


            let obj = {
                total: 0,
            }
            obj.total = data1.length

            setData(obj)
        }
        // if(auth.currentUser==null){
        //     navigate('/login')
        // }
        // console.log(auth)

        loadReviews()
    }, [])

    useEffect(e=>{

    },[selectedOption])

    return (
        <div className='container' style={{ height: '100vh' }}>
            <div className='px-3 py-2 bg-light d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-center my-2 align-items-center'>
                    <i className='fa fa-angle-left mx-2' onClick={()=>navigate('/home')}></i>
                    <h5 className='my-0'>Total Reviews : {data.total}</h5>
                </div>
                <Link to="/allreviews">View All Reviews</Link>
            </div>
            <select name="" onChange={(e)=>setOptionSelected(e.target.value)} className='p-2 border rounded' id="">
                {newOptions.map(e=>{
                    return <option style={{display:(e.label=="Choose a Question")?"none":""}} value={e.label}>{e.label}</option>
                })}
            </select>
            <div id="app" className='w-25 mx-auto'>
                {selectedOption?<App title={selectedOption} />:null}
            </div>

        </div>
    )
}

export default Dashboard