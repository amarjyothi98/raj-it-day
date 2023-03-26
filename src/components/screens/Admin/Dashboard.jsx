
import App from './App';

import React, { useEffect, useState } from 'react'
import { db, auth } from '../../constants/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { option } from '../../constants/options';
import Loader from '../../constants/Loader';

function Dashboard() {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [selectedOption, setOptionSelected]=useState('')
    const [metrics, setMetrics]=useState({})
    const [isLoaded,setLoaded]=useState(true)
    var newOptions=[{label:"Choose a Question"},...option]
    useEffect(e => {
        async function loadReviews() {
            setLoaded(false)
            const querySnapshot = await getDocs(collection(db, "reviews"));
            let data1 = []
            querySnapshot.forEach((doc) => {
                data1.push(doc.data())
            });

            setData(data1)
            setLoaded(true)
    
        }
        // if(auth.currentUser==null){
        //     navigate('/login')
        // }
        // console.log(auth)

        loadReviews()
    }, [])
    
    function calcValues(question){
        let obj={}
        data.map(review=>{
            if(!obj[review.data[question]]){
                obj[review.data[question]]=1
            }else{
                obj[review.data[question]]+=1
            }
        })

        setMetrics(obj)

    }
    useEffect(e=>{
        calcValues(selectedOption)
    },[selectedOption])

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            {(isLoaded)?(isLoaded && data.length>0)?<div><div className='px-3 py-2 d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-center my-2 align-items-center'>
                    <i className='fa fa-angle-left mx-2' onClick={()=>navigate('/home')}></i>
                    <h5 className='my-0'>Total Reviews : {data.length}</h5>
                </div>
                <Link to="/allreviews">View All Reviews</Link>
            </div>
            <select name="" onChange={(e)=>setOptionSelected(e.target.value)} className='p-2 border rounded' id="">
                {newOptions.map((e,index)=>{
                    return <option key={index} style={{display:(e.label=="Choose a Question")?"none":""}} value={e.label}>{e.label}</option>
                })}
            </select>
            <div id="app" className='col-4 d-flex mx-auto'>
                {selectedOption?<App title={selectedOption} metrics={metrics} />:null}
            </div></div>:"No Reviews for Now":<i className='fa fa-spinner fa-spin'></i>}
        </div>
    )
}

export default Dashboard