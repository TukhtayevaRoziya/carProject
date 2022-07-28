import React, { useEffect, useState } from 'react'
import CardCar from '../../components/card_car/Card_car'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import '../../components/style.css'
import axios from "axios"

function CardsCar() {
  const [cars, setCars] = useState([])
  const getCars = async () => {
    await axios.get("http://localhost:3001/Car/all", {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(res => {
      console.log(res)
      setCars(res.data)
    })
      .catch(err => new Error(err))
  }
  useEffect(() => {
    getCars()
  }, [])

  return (
    <>
      <Header />
      <main>
        <div class="social__title">
          <span></span>
          <h2>Все автомобили</h2>
          <span></span>
        </div>
        <section class="cards">
          <div class="cards__row">
            {
              cars.length ? cars.map((item, index) => (
                <CardCar car={item} />
              )) : (<h1>No data</h1>)
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CardsCar;