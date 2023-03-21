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

        <img className="d-block w-75 mx-auto mb-3" style={{ borderRadius: '50px' }} src="https://w.ndtvimg.com/sites/3/2019/12/04120239/malnutrition-in-india-660.png" alt="First slide" />
      <section className='w-75 mx-auto d-flex justify-content-center align-items-center' id='home' style={{height:'100vh'}}>

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
      <section className='w-75 mx-auto d-flex justify-content-center align-items-center' id='about' style={{height:'100vh'}}>
        <div>

      <h3>About</h3>
        <p className='text-justify' style={{lineHeight:2.2}}>Malnutrition is a serious problem that affects millions of people around the world. It can lead to a wide range of health problems, from stunted growth and cognitive development in children to weakened immune systems and chronic diseases in adults. That's why we created our web app, a powerful tool designed to help fight malnutrition and improve the health and well-being of people everywhere.

          Our app is packed with features and resources to help you understand and combat malnutrition. From detailed nutritional information on thousands of foods to personalized meal plans and recipes, we've got everything you need to make informed decisions about your diet and take control of your health.

          With our app, you can easily track your daily nutrient intake and monitor your progress over time. Our intuitive interface makes it easy to input your food choices and see exactly how they contribute to your overall nutrition. Plus, our app is constantly updated with the latest research and recommendations, so you can be sure you're getting the most up-to-date information and advice.

          But our app isn't just about tracking your diet – it's also about connecting with others who are fighting malnutrition and sharing your experiences and insights. Our community forum is a great place to ask questions, share tips, and find support from others who are on the same journey as you.

          Whether you're looking to improve your own health or help others who are struggling with malnutrition, our web app is the perfect tool to get started. With its wealth of resources, powerful tracking features, and supportive community, you'll have everything you need to make a real difference in the fight against malnutrition. So why wait? Sign up today and start taking control of your health!</p>
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
        <Link to="/login" className=''><p className='btn btn-warning'>Want to Add Yours, Click here</p></Link>

      </section>

      <Footer />
    </>
  )
}
