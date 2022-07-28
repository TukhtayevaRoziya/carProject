import React, { useState, useEffect } from "react";
// Import style
import '../style.css'
// Import images
import slide_one from "../../assets/img/slider/rauto-imgmn2.png"
import slide_two from "../../assets/img/slider/damas.png"
import slide_three from "../../assets/img/slider/infnexia-tinified.png"
import slide_four from "../../assets/img/slider/coba2-tinified.png"
import hyundai_img from "../../assets/img/cards/card.jpg"
import client_img1 from "../../assets/img/clients/client1.webp"
import client_img2 from "../../assets/img/clients/client2.webp"
import client_img3 from "../../assets/img/clients/client3.webp"
import client_img4 from "../../assets/img/clients/client4.webp"
import advantage_img1 from "../../assets/icons/ico1.png"
import advantage_img2 from "../../assets/icons/ico3.png"
import advantage_img3 from "../../assets/icons/ico4.png"
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import CardCar from "../card_car/Card_car";
import Footer from "../footer/Footer";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
   injectStyle();
}

function Home() {
   const [compare, setCompare] = useState(true)
   function CardsPage() {
      window.location = "/cards"
   }
   const marka = "Hyundai"
   const madel = "Sonata"
   const narxi = 9900
   const yili = 2016
   const yurgani = 212000
   const selectedIndex = -1
   const [compareData, setCompareData] = useState([])

   const showCompare = () => {
      setCompare(!compare)
   }
   function addCompare() {
      const newCompare = {
         car_markasi: marka,
         car_madel: madel,
         car_narxi: narxi,
         car_yili: yili,
         car_yurgani: yurgani
      }
      if (selectedIndex > 0) {
         compareData[selectedIndex] = newCompare
         selectedIndex = -1
      } else {
         compareData.push(newCompare)
         toast.success('Добавлено для сравнения')
      }
      setCompareData(compareData)
   }
   function deleteCompare(index) {
      compareData.splice(index, 1)
      setCompareData(compareData)
   }



   const [cars, setCars] = useState([])
   const [clients, setClients] = useState([])
   const getCars = async () => {
      await axios.get("http://localhost:3001/Car/all", {
         headers: {
            'Content-Type': 'multipart/form-data'
         },
      }).then(res => {
         // console.log(res)
         setCars(res.data)
      })
         .catch(err => new Error(err))
   }
   const getClients = async () => {
      await axios.get("http://localhost:3001/client/all", {
         headers: {
            'Content-Type': 'multipart/form-data'
         },
      }).then(res => {
         console.log(res)
         setClients(res.data)
      })
         .catch(err => new Error(err))
   }
   useEffect(() => {
      getCars()
      getClients()
   }, [])


   return (
      <>
         {compare ? (
            <div className="wrapper">
               <Header showCompare={showCompare} />
               <ToastContainer />
               <main>
                  <section class="slider">
                     <div class="slider__title">
                        <span>Sayt test rejimida ishlamoqda</span>
                        <span>Сайт работает в тестовом режиме</span>
                     </div>
                     <div class="row-slide">

                        <div class="slider__body">
                           <h2 class="slider__body-title">Выгодный автокредит
                              в Узбекистане</h2>
                           <div class="slider__body-descr">
                              Поможем <span> <a href="/">купить или продать</a> </span> автомобиль по выгодной цене!
                           </div>
                           <button class="slider__body-button">
                              <a href="/">КОНСУЛЬТАЦИЯ</a>
                           </button>
                        </div>
                        <div class="slider__container">
                           <div class="swiper swiper-slide-big">
                              <Swiper spaceBetween={30} autoplay={{ delay: 3000, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} className="swiper-wrapper">
                                 <SwiperSlide className="swiper-slide">
                                    <a href=" ">
                                       <img src={slide_one} alt="img" />
                                    </a>
                                 </SwiperSlide>
                                 <SwiperSlide className="swiper-slide">
                                    <a href=" ">
                                       <img src={slide_two} alt="img" />
                                    </a>
                                 </SwiperSlide>
                                 <SwiperSlide className="swiper-slide">
                                    <a href=" ">
                                       <img src={slide_three} alt="img" />
                                    </a>
                                 </SwiperSlide>
                                 <SwiperSlide className="swiper-slide">
                                    <a href=" ">
                                       <img src={slide_four} alt="img" />
                                    </a>
                                 </SwiperSlide>
                              </Swiper>

                           </div>
                        </div>
                     </div>
                  </section>
                  <div class="social__title">
                     <span></span>
                     <h2>Наши текущие клиенты</h2> <span></span>
                  </div>
                  <section class="social">
                     <div class="container">
                        <div className="text">
                           <span>4</span>
                        </div>
                        <div className="text">
                           <span>9</span>
                        </div>
                        <div className="text">
                           <span>0</span>
                        </div>
                        <div className="text">
                           <span>7</span>
                        </div>
                     </div>
                  </section>
                  <section class="cards-avto">
                     <div class="social__title">
                        <span></span><h2>Новые поступления</h2><span></span>
                     </div>
                     <div class="cards__row">
                        {cars.length && cars.map((item, index) => (
                           <>
                              {index < 6 && <CardCar key={index} car={item} addCompare={addCompare} />}
                           </>
                        ))}
                     </div>
                     <button onClick={CardsPage} class="cards__button">ПОКАЗАТЬ ВСЕ АВТОМОБИЛИ</button>
                  </section>
                  <section class="form-block">
                     <div class="container">

                        <div class="forms">
                           <div class="form">
                              <h3 class="form__title">Купить автомобиль</h3>
                              <h4 class="form__item-name">Кузов</h4>
                              <div class="form__item">
                                 <select name="met">
                                    <option value="1">Хетчбек</option>
                                    <option value="2">Кроссовер</option>
                                    <option value="3">Седан</option>
                                    <option selected value="4">Универсал</option>
                                 </select>
                              </div>

                              <h4 class="form__item-name">Год выпуска</h4>
                              <div class="renge-wrapper">
                                 <div class="slider">
                                    <div class="progress"></div>
                                 </div>
                                 <div class="range-input">
                                    <input type="range" class="range-min" min="0" max="10000" value="2500" step="100" />
                                    <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" />
                                 </div>
                                 <div class="price-input">
                                    <div class="field">
                                       <span>От</span>
                                       <input type="number" class="input-min" value="2500" />
                                    </div>
                                    <div class="field">
                                       <span>К</span>
                                       <input type="number" class="input-max" value="7500" />
                                    </div>
                                 </div>
                              </div>
                              <h4 class="form__item-name">Километраж</h4>
                              <div class="renge-wrapper">
                                 <div class="slider">
                                    <div class="progress"></div>
                                 </div>
                                 <div class="range-input">
                                    <input type="range" class="range-min" min="0" max="10000" value="2500" step="100" />
                                    <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" />
                                 </div>
                                 <div class="price-input">
                                    <div class="field">
                                       <span>От</span>
                                       <input type="number" class="input-min" value="2500" />
                                    </div>
                                    <div class="field">
                                       <span>К</span>
                                       <input type="number" class="input-max" value="7500" />
                                    </div>
                                 </div>
                              </div>
                              <h4 class="form__item-name">Цена</h4>
                              <div class="renge-wrapper">
                                 <div class="slider">
                                    <div class="progress"></div>
                                 </div>
                                 <div class="range-input">
                                    <input type="range" class="range-min" min="0" max="10000" value="2500" step="100" />
                                    <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" />
                                 </div>
                                 <div class="price-input">
                                    <div class="field">
                                       <span>От</span>
                                       <input type="number" class="input-min" value="2500" />
                                    </div>
                                    <div class="field">
                                       <span>К</span>
                                       <input type="number" class="input-max" value="7500" />
                                    </div>
                                 </div>
                                 <button class="form__button">Продать автомобиль</button>
                              </div>
                           </div>
                           <div class="form">
                              <h3 class="form__title">Купить автомобиль</h3>
                              <h4 class="form__item-name">Марка</h4>
                              <div class="form__item">
                                 <input type="text" placeholder="Марка вашего автомобиля" />
                              </div>
                              <h4 class="form__item-name">Модель</h4>
                              <div class="form__item">
                                 <input type="text" placeholder="Модель вашего автомобиля" />
                              </div>
                              <h4 class="form__item-name">Год выпуска</h4>
                              <div class="form__item">
                                 <input type="text" placeholder="Год выпуска вашего автомобиля (цифрами). Например: 2007" />
                              </div>
                              <h4 class="form__item-name">Пробег</h4>
                              <div class="form__item">
                                 <input type="text" placeholder="Пробег в км. вашего автомобиля (цифрами). Например: 25000" />
                              </div>


                              <h4 class="form__item-name form__item-name-row">Контактные данные</h4>
                              <div class="form__list">
                                 <div class="form__item">
                                    <input type="text" placeholder="Ваше Имя" />
                                 </div>
                                 <div class="form__item">
                                    <input type="text" placeholder="Ваш Телефон" />
                                 </div>
                                 <div class="form__item">
                                    <input type="text" placeholder="Ваш Email" />
                                 </div>
                              </div>
                              <button class="form__button">Продать автомобиль</button>
                           </div>
                        </div>
                     </div>
                  </section>
                  <section class="cards-slider">
                     <div class="container">
                        <div class="cards-slider__title">
                           <span></span>
                           <h2>АКЦИИ, СКИДКИ, СПЕЦПРЕДЛОЖЕНИЯ</h2> <span></span>
                        </div>
                        <div class="swiper cards-swiper-slide">
                           <Swiper
                              breakpoints={{
                                 200: {
                                    slidesPerView: 1
                                 },
                                 640: {
                                    slidesPerView: 2
                                 },
                                 1100: {
                                    slidesPerView: 3
                                 },
                                 1300: {
                                    slidesPerView: 4
                                 }
                              }}
                              spaceBetween={30}
                              modules={[Pagination]}
                              pagination={{
                                 clickable: true,
                              }}
                              class="cards-slider__cadrs swiper-wrapper">
                              {cars.length && cars.map((item, index) => (
                                 <SwiperSlide class="swiper-slide">
                                    {console.log(item)}
                                    <div class=" cards-slider__card card">
                                       <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                       <a href=" " class="card__title">{item.madel}</a>
                                       <ul class="card__info">
                                          В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                          летней
                                          резины...
                                       </ul>
                                       <div class="card__line"></div>
                                       <div class="card__price"><strong class="red">{item.narxi}</strong> <span>USD</span></div>
                                       <div class="card__buttons">
                                          <Link to={`more/${item._id}`} class="card__button-mini">Подробнее</Link>
                                          {/* <button class="card__button-mini">Подробнее</button> */}
                                       </div>
                                    </div>
                                 </SwiperSlide>
                              ))}
                              {/* <SwiperSlide class="swiper-slide">
                                 <div class="cards-slider__card card">
                                    <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                    <a href=" " class="card__title">Hyundai Sonata LPI SMART 2016</a>
                                    <ul class="card__info">
                                       В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                       летней
                                       резины...
                                    </ul>
                                    <div class="card__line"></div>
                                    <div class="card__price"><strong class="red">9999</strong> <span>USD</span></div>
                                    <div class="card__buttons">
                                       <button class="card__button-mini">Подробнее</button>
                                       <button class="card__button-mini">Подробнее</button>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="cards-slider__card card">

                                    <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                    <a href=" " class="card__title">Hyundai Sonata LPI SMART 2016</a>
                                    <ul class="card__info">
                                       В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                       летней
                                       резины...
                                    </ul>
                                    <div class="card__line"></div>
                                    <div class="card__price"><strong class="red">9999</strong> <span>USD</span></div>
                                    <div class="card__buttons">
                                       <button class="card__button-mini">Подробнее</button>
                                       <button class="card__button-mini">Подробнее</button>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="cards-slider__card card">


                                    <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                    <a href=" " class="card__title">Hyundai Sonata LPI SMART 2016</a>
                                    <ul class="card__info">
                                       В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                       летней
                                       резины...
                                    </ul>
                                    <div class="card__line"></div>
                                    <div class="card__price"><strong class="red">9999</strong> <span>USD</span></div>
                                    <div class="card__buttons">
                                       <button class="card__button-mini">Подробнее</button>
                                       <button class="card__button-mini">Подробнее</button>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class=" cards-slider__card card">


                                    <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                    <a href=" " class="card__title">Hyundai Sonata LPI SMART 2016</a>
                                    <ul class="card__info">
                                       В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                       летней
                                       резины...
                                    </ul>
                                    <div class="card__line"></div>
                                    <div class="card__price"><strong class="red">9999</strong> <span>USD</span></div>
                                    <div class="card__buttons">
                                       <button class="card__button-mini">Подробнее</button>
                                       <button class="card__button-mini">Подробнее</button>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="cards-slider__card card">


                                    <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                    <a href=" " class="card__title">Hyundai Sonata LPI SMART 2016</a>
                                    <ul class="card__info">
                                       В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                       летней
                                       резины...
                                    </ul>
                                    <div class="card__line"></div>
                                    <div class="card__price"><strong class="red">9999</strong> <span>USD</span></div>
                                    <div class="card__buttons">
                                       <button class="card__button-mini">Подробнее</button>
                                       <button class="card__button-mini">Подробнее</button>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="cards-slider__card card">
                                    <div class="card__img"><img src={hyundai_img} alt="img" /></div>
                                    <a href=" " class="card__title">Hyundai Sonata LPI SMART 2016</a>
                                    <ul class="card__info">
                                       В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект
                                       летней
                                       резины...
                                    </ul>
                                    <div class="card__line"></div>
                                    <div class="card__price"><strong class="red">9999</strong> <span>USD</span></div>
                                    <div class="card__buttons">
                                       <button class="card__button-mini">Подробнее</button>
                                       <button class="card__button-mini">Подробнее</button>
                                    </div>
                                 </div>
                              </SwiperSlide> */}
                           </Swiper>
                        </div>
                        <button onClick={CardsPage} class="cards-swiper__button">ВСЕ ПРЕДЛОЖЕНИЯ </button>
                     </div>
                  </section>
                  <section class="advantages">
                     <div class="container">
                        <div class="advantages__title cards-slider__title">
                           <span></span>
                           <h2>НАШИ ПРЕИМУЩЕСТВА</h2> <span></span>
                        </div>
                        <div class="advantages__row">
                           <div class="advantages__item">
                              <div class="advantages__img"><img src={advantage_img1} alt="icons" /></div>
                              <div class="advantages__name">Минимум документов</div>
                              <div class="advantages__descr">Вам понадобятся всего один документ - паспорт</div>
                           </div>
                           <div class="advantages__item">
                              <div class="advantages__img"><img src={advantage_img2} alt="icons" /></div>
                              <div class="advantages__name">Привлекательные условия</div>
                              <div class="advantages__descr">У нас действуют специальные партнерские программы с выгодными условиями по кредиту и гибкий график</div>
                           </div>
                           <div class="advantages__item">
                              <div class="advantages__img"><img src={advantage_img3} alt="icons" /></div>
                              <div class="advantages__name">Досрочное погашение</div>
                              <div class="advantages__descr">Возможность погасить кредит полностью или частично в любую дату без комиссий</div>

                           </div>
                        </div>
                     </div>
                  </section>
                  <section class="clients">
                     <div class="container">
                        <div class="clients__title cards-slider__title">
                           <span></span>
                           <h2>НАШИ КЛИЕНТЫ</h2> <span></span>
                        </div>
                        <div class=" swiper clients-swiper-slide">
                           <Swiper
                              slidesPerView={4}
                              spaceBetween={30}
                              modules={[Pagination]}
                              pagination={{
                                 clickable: true,
                              }}
                              class="swiper-wrapper">
                              {clients && clients.map((item, index) => (
                                 <SwiperSlide class="swiper-slide">
                                    {console.log(item.photo)}
                                    <div class="clients__item">
                                       <div class="clients__img"><img src={'http://localhost:3001' + item.photo} alt="icons" /></div>
                                       <div class="clients__name">{item.ismizuz}</div>
                                    </div>
                                 </SwiperSlide>
                              ))}
                              {/* <SwiperSlide class="swiper-slide">
                                 <div class="clients__item">
                                    <div class="clients__img"><img src={client_img2} alt="icons" /></div>
                                    <div class="clients__name">Александр, г. Мариуполь</div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="clients__item">
                                    <div class="clients__img"><img src={client_img3} alt="icons" /></div>
                                    <div class="clients__name">Николай, г. Киев</div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="clients__item">
                                    <div class="clients__img"><img src={client_img4} alt="icons" /></div>
                                    <div class="clients__name">Александр, г. Киев</div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="clients__item">
                                    <div class="clients__img"><img src={client_img1} alt="icons" /></div>
                                    <div class="clients__name">Сергей, г. Чернигов</div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide class="swiper-slide">
                                 <div class="clients__item">
                                    <div class="clients__img"><img src={client_img2} alt="icons" /></div>
                                    <div class="clients__name">Николай, г. Киев</div>
                                 </div>
                              </SwiperSlide> */}

                           </Swiper>
                        </div>
                     </div>
                  </section>
               </main>
               <Footer />
            </div>
         ) : (
            <div className='wrapped'>
               <Header />
               <main>
                  <div className="compare container">
                     <div className="row">
                        <div className="col-10 offset-1">
                           <div class="table-responsive">
                              <table class="table table-hover mt-5">
                                 <thead class="thead-dark">
                                    <tr>
                                       <th scope="col">Marka</th>
                                       <th scope="col">Model</th>
                                       <th scope="col">Yili</th>
                                       <th scope="col">Yurgani</th>
                                       <th scope="col">Narxi</th>
                                    </tr>
                                 </thead>
                                 {compareData.map((item, index) => {
                                    return (
                                       <tbody>
                                          <tr>
                                             <td>{item.car_markasi}</td>
                                             <td>{item.car_madel}</td>
                                             <td>{item.car_yili}</td>
                                             <td>{item.car_yurgani}</td>
                                             <td>{item.car_narxi}$</td>
                                          </tr>
                                       </tbody>
                                    )
                                 })}

                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </main>
               <Footer />
            </div>
         )}
      </>

   )
}
export default Home