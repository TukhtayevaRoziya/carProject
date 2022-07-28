import React from 'react'
import { Link } from 'react-router-dom';
import card_img from "../../assets/img/cards/card.jpg"
// import { Link } from 'react-router-dom'
import '../style.css'

const CardCar = (props) => {
   console.log(props);
   function MorePage() {
      window.location = './more'
   }
   return (
      <>
         <div class="cards__card card">
            <div class="card__img"><img src={card_img} alt="img" /></div>
            <a href="#" class="card__title">{props.car.marka} {props.car.madel} LPI SMART {props.car.yili} </a>
            <ul class="card__info">
               <li class="card__item"><span class="material-symbols-outlined">
                  local_gas_station
               </span><strong> Топливо:</strong> Газ</li>
               <li class="card__item"><span class="material-symbols-outlined">
                  settings
               </span><strong> Передача:</strong> Автомат</li>
               <li class="card__item"><span class="material-symbols-outlined">
                  album
               </span><strong> Случай:</strong> Передный</li>
               <li class="card__item"><span class="material-symbols-outlined">
                  speed
               </span><strong> Пробежка:</strong>  </li>
            </ul>
            <div class="card__line"></div>
            <div class="card__price">Ціна з ПДВ: <strong>{props.car.narxi}</strong> <span>USD</span> 336 466.35 грн.</div>
            <Link to={`/more/${props.car._id}`} class="card__button">Подробнее</Link>
            <div class="card__add"><a href='#' onClick={props.addCompare}>Добавить для сравнения</a> <button title="Сравнивать"
               class="material-symbols-outlined">
               balance
            </button>
            </div>
         </div>
      </>
   )
}

export default CardCar