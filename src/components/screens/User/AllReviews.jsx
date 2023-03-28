import React,{useEffect,useState} from 'react'
import ReviewCard from './ReviewCard'
import { db} from '../../constants/firebase';
import { collection, getDocs } from '@firebase/firestore';
function AllReviews() {
    const [data, setData] = useState([])
    const [isLoaded,setLoaded]=useState(true)



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

        loadReviews()
    }, [])
  return (
    <div className='bgimage d-flex align-items-center justify-content-center' style={{height:'100vh'}}>

    <div className='container'>
        <h3>What people suggests to do</h3>
        {(isLoaded)?<div className='w-100 d-flex flex-wrap'>
            {
                data.length?data.map(e=>{
                    return <div className='col-4 p-2'><ReviewCard styleClass={''} data={e} /></div>
                }):<p>No Reviews Available</p>
            }
        </div>:<i className='fa fa-spinner fa-spin'></i>}
    </div>
    </div>
  )
}

export default AllReviews