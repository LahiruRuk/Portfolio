import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos accusamus, veniam rerum esse expedita temporibus delectus aspernatur aperiam voluptatum!'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos accusamus, veniam rerum esse expedita temporibus delectus aspernatur aperiam voluptatum!'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos accusamus, veniam rerum esse expedita temporibus delectus aspernatur aperiam voluptatum!'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos accusamus, veniam rerum esse expedita temporibus delectus aspernatur aperiam voluptatum!'
  },




]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination ]}
        spaceBetween={40}
       
        slidesPerView={1}        
        pagination={{ clickable: true }}>
      
     
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonials">
                <div className="client__avator">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
