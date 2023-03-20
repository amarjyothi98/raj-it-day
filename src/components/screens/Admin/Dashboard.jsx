
import App from './App';

import React, {useEffect} from 'react'
import { db } from '../../constants/firebase';
import { collection,getDocs } from '@firebase/firestore';


function Dashboard() {
    // let questionArray = {
    //     "How frequently, height & weight of childrens is measured at Anganbari?": {},
    //     "Who creates health regulations, including nutritional ones?": {},
    //     "How do you set energy goals in critically challenged childrens?": {},
    //     "How do you asses knowledge about nutrition of physicians, who visit anganbari?": {},
    //     "What's the condition of toilets in anganbari?": {},
    //     "Drinking water provided to the students is":{}}
    useEffect(e => {
        async function loadReviews() {
            const querySnapshot = await getDocs(collection(db, "reviews"));
            let data1 = []
            querySnapshot.forEach((doc) => {
                data1.push(doc.data())
                console.log(doc.data())
            });

            // let count=0;
            // while(count<questionArray.length){
                
            //     data1.map(obj=>{
            //         console.log(obj)
            //         if(!questionArray[obj.data[Object.keys(obj.data)[count]]]){
            //             questionArray[obj.data[Object.keys(obj.data)[count]]]=1
            //         }else{
            //             questionArray[obj.data[Object.keys(obj.data)[count]]]+=1
            //         }
            //     })

            //     count=count+1;
            // }

            // console.log(questionArray)
        }

        loadReviews()
    }, [])
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>

        <div id="app" className='w-25 mx-auto'>
            <App />
        </div>
        </div>
    )
}

export default Dashboard