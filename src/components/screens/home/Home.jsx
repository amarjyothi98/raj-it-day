import React from 'react'
import '../../../index.css'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>

    <section class="course">
      <h1>What is Malnutrition?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo consequuntur esse, illo aspernatur deserunt tempore, provident quos accusamus, sit nulla nam quisquam vitae.</p>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/turtle.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/horse.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/cisco.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      <div class="row">
        <div class="course-col">
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit veniam nihil aliquam, ducimus quo mollitia consequatur animi fuga totam eveniet alias similique voluptatem eos. Aliquam facilis id culpa rem architecto nemo maiores illum natus debitis? Voluptatem, commodi! Quos neque quas cumque dolorem dolore libero dignissimos sunt voluptatum quidem laboriosam!</p>
        </div>
        <div class="course-col">
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit veniam nihil aliquam, ducimus quo mollitia consequatur animi fuga totam eveniet alias similique voluptatem eos. Aliquam facilis id culpa rem architecto nemo maiores illum natus debitis? Voluptatem, commodi! Quos neque quas cumque dolorem dolore libero dignissimos sunt voluptatum quidem laboriosam!</p>
        </div>
        <div class="course-col">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit veniam nihil aliquam, ducimus quo mollitia consequatur animi fuga totam eveniet alias similique voluptatem eos. Aliquam facilis id culpa rem architecto nemo maiores illum natus debitis? Voluptatem, commodi! Quos neque quas cumque dolorem dolore libero dignissimos sunt voluptatum quidem laboriosam!</p>
        </div>
      </div>
        
    </section>

    <section class="testimonials">
      <h1>Reviews which helped us to save.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis quidem voluptate officiis modi? Nulla rerum deleniti quos distinctio perspiciatis facere accusamus molestias.</p>

      <div class="row">
        <div class="testimonial-col">
          <img src="/turtle.jpg" className='test-img' />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui rem ratione corrupti delectus quia commodi consequatur repudiandae, impedit et natus repellat itaque sequi. Similique sapiente dolore adipisci consequuntur, quis error?</p>
            <h3>Harshit Kandu</h3>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-o"></i>
          </div>
        </div>
        <div class="testimonial-col">
          <img src="/turtle.jpg" className='test-img' />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui rem ratione corrupti delectus quia commodi consequatur repudiandae, impedit et natus repellat itaque sequi. Similique sapiente dolore adipisci consequuntur, quis error?</p>
            <h3>Priyankar Dutta</h3>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-o"></i>
          </div>
        </div>
      </div>

    </section>

    <Footer/>
    </>
  )
}
