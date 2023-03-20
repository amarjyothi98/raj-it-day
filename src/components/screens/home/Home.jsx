import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../constants/firebase'
export default function Home() {
  var [data, setData] = useState([])
  useEffect(e => {
    async function loadReviews() {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      let data1 = []
      querySnapshot.forEach((doc) => {
        data1.push(doc.data())
        console.log(doc.data())
      });
      setData(data1)
    }

    loadReviews()
  }, [])
  return (
    <>
      <Navbar />

      <section className="course" id='home'>
       

        <img className="d-block w-100 mb-3" style={{ borderRadius: '50px' }} src="https://w.ndtvimg.com/sites/3/2019/12/04120239/malnutrition-in-india-660.png" alt="First slide" />
        <h1>What is Malnutrition?</h1>
        <p>Malnutrition is the condition that develops when the body is deprived of vitamins, minerals and other nutrients it needs to maintain healthy tissues and organ function. Malnutrition occurs in people who are either undernourished or overnourished.</p>
        <div className="row">
          <div className="course-col">
            <h3>Causes</h3>
            <p>The possible causes of malnutrition could be unsuitable dietary choices
              ,having a low income
              ,difficulty obtaining food
              ,various physical and mental health conditions</p>
          </div>
          <div className="course-col">
            <h3>Symptoms</h3>
            <p>weight loss, a lack of appetite or interest in food or drink, tiredness and irritability, an inability to concentrate, always feeling cold, depression, getting sick and taking longer to heal
longer healing time for wounds</p>
          </div>
          <div className="course-col">
            <h3>Treatment</h3>
            <p>ongoing screening and monitoring
making a dietary plan, which might include taking supplements
treating specific symptoms,any infections that may be present
checking for any mouth or swallowing problems
suggesting alternative eating utensils</p>
          </div>
        </div>

      </section>

      <section className="testimonials" id="review">
        <h1>Reviews which helped us to save.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis quidem voluptate officiis modi? Nulla rerum deleniti quos distinctio perspiciatis facere accusamus molestias.</p>

        <div className="row">

          {
            data.map((obj, count) => {
              return (
                (count < 2) ? <div className="testimonial-col">
                  <div>
                    <p>{obj.data.review}</p>
                    <h3>{obj.name}</h3>
                    <p>{obj.date}</p>
                  </div>
                </div> : null
              )
            })
          }
        </div>
        <Link to="/login"><p className=''>Want to Add Yours, Click here</p></Link>

      </section>

      <Footer />
    </>
  )
}
