import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import './gameSwiper.css'

import { EffectCoverflow,Navigation,Autoplay} from 'swiper/modules'

const GameSwiper = ({ games }) => {
    const [active, setActive] = useState(false);
    const handToggleVideo = () => {
        setActive(!active);
    }
  return (
      <Swiper
          effect={'coverflow'}
          grabCursor={true}
          navigation={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
              rotate: 35,
              stretch: 200,
              depth: 250,
              modifier: 1,
              slideShadows:true,
          }}
          autoplay={{
              delay: 2000,
              disableOnInteraction:false
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
      className='gameSwiper'>
          {games.map(game => (
              <SwiperSlide key={game._id}>
                  <div className="gameSlider">
                      <img src={game.img} alt="Game Image" className="" />
                      <div className={`video ${active ? 'active':undefined}`}>
                          <iframe width="1280" height="720" src={game.trailer} title={game.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                      <div className="content">
                          <h2 className="">
                              {game.title}
                          </h2>
                          <p>
                              {game.description}
                          </p>
                          <div className="buttons">
                              <a href="#" className="orderBtn">Order Now</a>
                              <a href="#" className={`playBtn ${active? 'active':undefined}`} onClick={handToggleVideo}>
                                  <span className="pause">
                                      <i className="bi bi-pause-fill"></i>
                                  </span>
                                  <span className="play">
                                      <i className="bi bi-play-fill"></i>
                                  </span>
                              </a>
                          </div>
                      </div>
                  </div>
                  
                  
              </SwiperSlide>
          ))
              
          }
      
    </Swiper>
  )
}

export default GameSwiper
