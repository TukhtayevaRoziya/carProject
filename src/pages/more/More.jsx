import React, { useEffect, useState } from 'react'
import star_img from '../../assets/icons/star.png'
import star_b_img from '../../assets/icons/star_bold.png'
import paint_img from '../../assets/icons/paint.png'
import date_img from '../../assets/icons/date.png'
import cube_img from '../../assets/icons/cube.png'
import fuel_img from '../../assets/icons/fuel.png'
import setting_img from '../../assets/icons/setting.png'
import car_img from '../../assets/icons/car.png'
import speed_img from '../../assets/icons/speed.png'
import Header from '../../components/header/Header'
import card_img from "../../assets/img/cards/card.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import axios from 'axios'

import { Autoplay, Pagination, Navigation } from "swiper";
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'

function More() {
   const { id } = useParams()
   const [data, setData] = useState({ ismiz: "", gmail: "" })
   const order = async () => {
      await axios.post("http://localhost:3001/order/add", data, {
         headers: {
            'Content-Type': 'multipart/form-data'
         },
      }).then(res => {
         console.log(res)
         console.log(data);
      })
         .catch(err => new Error(err))
   }

   const [car, setCar] = useState(null)
   useEffect(() => {
      axios.get(`http://localhost:3001/Car/${id}`).then(res => {
         console.log(res);
         setCar(res.data)
      }).catch(err => {
         console.log(err);
      })
   }, [])

   return (
      <>
         <Header />
         {car ? <main>
            <section className="about">
               <div className="about__title">
                  <span></span> <h2>{car.madel}</h2> <span></span>
               </div>
               <div className="about__container">
                  <div className="about__slider">
                     <Swiper pagination={{ type: "progressbar" }} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
                        <SwiperSlide><img src={card_img} alt="img" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={card_img} alt="img" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={card_img} alt="img" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={card_img} alt="img" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={card_img} alt="img" /></SwiperSlide>
                     </Swiper>
                  </div>
                  <div className="about__card">
                     <p className="about__text"><img src={star_img} alt="star" /> Марка : . . . . . . . . . . . . . . {car.marka}</p>
                     <p className="about__text"><img src={star_b_img} alt="star" /> Модель : . . . . . . . . . . . . . . {car.madel}</p>
                     <p className="about__text"><img src={paint_img} alt="star" /> Цвет : . . . . . . . . . . . . . . . . . {car.color}</p>
                     <p className="about__text"><img src={date_img} alt="star" /> Год выпуска : . . . . . . . . . . . {car.yili}</p>
                     <p className="about__text"><img src={cube_img} alt="star" /> Объем двигателя : . . . . . . . . {car.divigitel}</p>
                     <p className="about__text"><img src={fuel_img} alt="star" /> Топливо:. . . . . . . . . . . . . . . . . . {car.yoqilgi}</p>
                     <p className="about__text"><img src={setting_img} alt="star" /> Трансмиссия : . . . . . . .  {car.transmission}</p>
                     <p className="about__text"><img src={car_img} alt="star" /> Кузов : . . . . . . . . . . . . . . . . . {car.kuzuv}</p>
                     <p className="about__text"><img src={speed_img} alt="star" /> Пробег: . . . . . . . . . . . . . . . {car.yurgani}</p>
                  </div>
                  <div className="sale-card">
                     <div className="sale-card_wrapper">
                        <span className='card-price card-price_sum'>Sumda<span class="valyut_uzb"> So'm</span></span>
                        <span className='card-price'>AQSH dollari<span class="material-symbols-outlined">
                           attach_money
                        </span></span>
                        <div className="input-wrap"><span class="material-symbols-outlined">
                           person</span>
                           <input onChange={(e) => setData({ ...data, ismiz: e.target.value })} type="text" class="form-control page_title_uz" name="auto_price" required placeholder='Ismingizni kiriting' />
                        </div>
                        <div className="input-wrap"><span class="material-symbols-outlined">
                           email</span>
                           <input onChange={(e) => setData({ ...data, gmail: e.target.value })} type="email" class="form-control page_title_uz" name="auto_price" required placeholder='Emailingizni kiriting' />
                        </div>
                     </div>
                     <button onClick={order} class="more-btn">
                        Buyurtma berish
                     </button>
                  </div>
                  <div className='comment'>
                     <div className="comment_title">
                        <h4 type='button'>ОПИСАНИЕ</h4>
                     </div>
                     <div className="comment_card">
                        <h4 className='comment_first'>Собственный импорт из Кореи. Без пробега по Украине.</h4>
                        <h4 className='comment_second'>Автомобили растаможены в июне 2021г. Модельный год 2017. ТП 2016. Отличное техническое и эстетическое состояние. Заводская газовая установка 6 поколения, двигатель работает без бензина. В обслуживании очень дешевый автомобиль. Двигатель "миллионник" - надежный, проверенный временем. Классическая АКПП – 6 ступенчатый гидротрансформатор. ДВА ключа. Ждем ВАС на тест-драйв=)) Вкусный кофе и хорошее настроение гарантировано! Перед покупкой есть возможность диагностики у официального дилера. Продажа возможна в КРЕДИТ И ЛИЗИНГ до 7ми лет. !!! Дополнительные услуги: СТРАХОВАНИЕ, ТРЕЙД-ИН (обмен на Ваш автомобиль). За дополнительной информацией обращайтесь по телефону, рады будем помочь.</h4>
                     </div>
                  </div>
               </div>

            </section>
         </main> : <h1>No data</h1>}

         <Footer />
      </>
   )
}

export default More