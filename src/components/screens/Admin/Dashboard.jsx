
import App from './App';

import React, {useEffect, useState} from 'react'
import { db, auth } from '../../constants/firebase';
import { collection,getDocs } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ReviewCard from '../User/ReviewCard';


function Dashboard() {

    const navigate=useNavigate()
    const [reviews, setReviews]=useState([])
    useEffect(e => {
        async function loadReviews() {
            const querySnapshot = await getDocs(collection(db, "reviews"));
            let data1 = []
            querySnapshot.forEach((doc) => {
                data1.push(doc.data())
                console.log(doc.data())
            });

            setReviews(data1)
        }
        if(auth.currentUser==null){
            navigate('/login')
        }
        console.log(auth)

        loadReviews()
    }, [])


    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>

        <div id="app" className=' mx-auto'>
            <App />
        </div>

        </div>
    )
}

export default Dashboard