import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../constants/firebase'
import helpers from '../../assets/helpers.png'
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

      <section className='course' id='home' >
          <img className="d-block mx-auto w-100 mb-3 " style={{ borderRadius: '20px' }} src="https://w.ndtvimg.com/sites/3/2019/12/04120239/malnutrition-in-india-660.png" alt="First slide" />

        <div>

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
        </div>

      </section>
      <section className='col-10 mx-auto ' id='about'>

        <h3>People who helped us save</h3>
        <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center '>
          <img src={helpers} alt="" className='col-lg-4 col-8 mx-auto' />
          <p className='text-center home-about col-lg-8 col-10 mx-auto' style={{ lineHeight: 2.2 }}>The internship scheme in Anganwadi is a program that allows students, volunteers, and individuals to participate in activities aimed at eradicating malnutrition in the community. Anganwadi centers are government-run centers that provide basic health care, nutrition, and education services to children under six years of age, pregnant women, and lactating mothers. The internship scheme in Anganwadi is designed to give individuals practical experience in running and managing nutrition programs, conducting community outreach, and implementing health and hygiene practices. By participating in this scheme, individuals can contribute to reducing malnutrition in the community and gain valuable skills and knowledge in the process. Through this scheme, Anganwadi centers are better equipped to provide holistic care and support to vulnerable populations, ensuring that children and mothers receive adequate nutrition and care for their healthy growth and development.</p>
        </div>
      </section>
      <section className="testimonials" id="review">
        <h1>Reviews which helped us to save.</h1>
        <p>You can review the care centers where you have worked or are working, and also can provide suggestions which helps authorities to make better and informed desicions and also helps us to fight with malnutrition</p>

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
        <Link to="/login" className=''><p className='btn btn-outline-dark'>Want to Add Yours, Click here</p></Link>

      </section>

      <Footer />
    </>
  )
}
