import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../constants/firebase'
import helpers from '../../assets/helpers.png'
import { userLang, langProvider } from '../../language/languageProvider'
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

          <h1>{langProvider[userLang].home.heading1}</h1>
          <p>{langProvider[userLang].home.para1}</p>
          <div className="row">
            <div className="course-col">
              <h3>{langProvider[userLang].home.cardHeading1}</h3>
              <p>{langProvider[userLang].home.cardPara1}</p>
            </div>
            <div className="course-col">
              <h3>{langProvider[userLang].home.cardHeading2}</h3>
              <p>{langProvider[userLang].home.cardPara2}</p>
            </div>
            <div className="course-col">
              <h3>{langProvider[userLang].home.cardHeading3}</h3>
              <p>{langProvider[userLang].home.cardPara3}</p>
            </div>
            
          </div>
        </div>

      </section>
      <section className='col-10 mx-auto ' id='about'>

        <h3>{langProvider[userLang].home.heading2}</h3>
        <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center '>
          <img src={helpers} alt="" className='col-lg-4 col-8 mx-auto' />
          <p className='text-center home-about col-lg-8 col-10 mx-auto' style={{ lineHeight: 2.2 }}>{langProvider[userLang].home.para2}</p>
        </div>
      </section>
      <section className="testimonials" id="review">
        <h1>{langProvider[userLang].home.heading3}</h1>
        <p>{langProvider[userLang].home.para3}</p>

        <div className="row">

          {
            data.map((obj, count) => {
              return (
                (count < 2) ? <div className="testimonial-col">
                  <div>
                    <p>{obj.data['Tell us about the food condition there?']}</p>
                    <h3>{obj.name}</h3>
                    <p>{obj.date}</p>
                  </div>
                </div> : null
              )
            })
          }
        </div>
        <Link to="/login" className=''><p className='btn btn-outline-dark'>{langProvider[userLang].home.bottomBtn}</p></Link>

      </section>

      <Footer />
    </>
  )
}
