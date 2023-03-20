import React, { useEffect, useState } from 'react'
import {
    doc,
    getDoc,
    query,
    collection,
    where,
    getDocs
} from "firebase/firestore";
import Loader from '../../constants/Loader';
import { auth, db } from '../../constants/firebase';
import ReviewCard from './ReviewCard';
function Profile() {
    const [data, setData] = useState(null)
    const [items, setItems] = useState(null)
    const [loaded, setLoaded] = useState(true)
    var w=JSON.parse(localStorage.getItem('appUser1'))
    console.log(w)


    async function loadItems() {
        setLoaded(false)
        const q = query(collection(db, "reviews"), where("uid", "==", `${auth.currentUser.uid}`));

        let data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
        })
        setItems(data)

        setLoaded(true)
    }
    useEffect(e => {
        loadItems()
    }, [])


    return (
        (loaded === true) ? <div className='text-black' style={{ minHeight: '100vh' }}>
            <div className="d-flex w-75 mx-auto p-4 align-items-center">

            <div className='bg-custom' style={{ height: '20vh' }}>
                <img
                    className="profileDp rounded-circle"
                    alt=""
                    src={auth.currentUser.photoURL} width={120} height={120} />
            </div>
            <div className='text-end text-black px-2 py-2 col-11 mx-auto'>
                <h3 className='my-1'>{auth.currentUser.displayName}</h3>
                <div className='d-flex justify-content-end'>
                    <i className="fa fa-location-arrow mx-2 my-0"></i>
                    <p className='my-auto'>Danishmandan</p>
                </div>
                <p>{auth.currentUser.email}</p>
            </div>
            </div>

            <div className='container text-black'>
                <label style={{ fontSize: '16px' }} className='my-2'>Reviews</label>
                <div>
                    {
                        (data != null) ? data.reviews.map(e => <ReviewCard data={e} />) : <p className='opacity-50 smallText my-1'>No Reviews</p>
                    }
                </div>
            </div>
        </div> : <Loader />
    )
}

export default Profile