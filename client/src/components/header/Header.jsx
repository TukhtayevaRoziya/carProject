import React, { useState } from 'react'
import '../style.css'
// Import images
import header_icon from "../../assets/icons/location.svg"
import header_icon_two from "../../assets/icons/smartphone.svg"
import header_icon_three from "../../assets/icons/email.svg"
import search_icon from "../../assets/icons/search.svg"
import header_icon_four from "../../assets/icons/dollar.svg"
import search_icon_two from "../../assets/icons/search.svg"
import number_i from "../../assets/icons/smartphone.svg"
import logo_icon from "../../assets/img/logo.png"
import close_i from "../../assets/icons/close.png"
import arrow_i from "../../assets/icons/arrow.png"
import phone_i from "../../assets/icons/phone.png"
import mail_i from "../../assets/icons/mail.png"
import facebook_icon from "../../assets/icons/facebook.png"
import youtube_icon from "../../assets/icons/youtube.png"
import icon_location from "../../assets/icons/location_white.png"
import instagram_icon from "../../assets/icons/instagram.png"
import { Link } from 'react-router-dom'


const Header = (props) => {
   const [collapseOneOpen, setCollapseOneOpen] =  useState(false)
   const [collapseTwoOpen, setCollapseTwoOpen] =  useState(false)
   const [collapseThreeOpen, setCollapseThreeOpen] =  useState(false)
   console.log(props);
   function search() {
      const searchBtns = document.querySelectorAll('.search');
      const searchInput = document.querySelector('.search-input');
      const closeSearch = document.querySelector('.close-search');
      if (searchBtns.length > 0) {
         for (let index = 0; index < searchBtns.length; index++) {
            const searchBtn = searchBtns[index];
            if (!searchInput.classList.contains("_open")) {
               searchBtn.addEventListener("click", function (e) {
                  searchInput.classList.add("_open");
               })
            }
         }
      }
      if (closeSearch) {
         if (!searchInput.classList.contains("_open")) {
            closeSearch.addEventListener("click", function (e) {
               searchInput.classList.remove("_open");
            })
         }
      }
   }

   function OPEN() {
      const menuOpen = document.querySelectorAll('.menu__open');
      const menu = document.querySelector('.menu');
      if (menuOpen.length > 0) {
         for (let index = 0; index < menuOpen.length; index++) {
            const btn = menuOpen[index];
            btn.addEventListener("click", function (e) {
               menu.classList.add('_open');
            })
         }
      }
      const menuClose = document.querySelectorAll('.menu__close');
      for (let index = 0; index < menuClose.length; index++) {
         const btn = menuClose[index];
         btn.addEventListener("click", function (e) {
            if (menu.classList.contains('_open')) {
               menu.classList.remove('_open');
            }
         })
      }
   }
   function LoginPage() {
      window.location = "/login"
   }
   return (
      <>
         <header className="headers">
            <div className="headers__info">
               <div className="containers">
                  <div className="headers__location">
                     <img src={header_icon} class="headers__icon" alt="location" />
                     <span>г.Ташкент, ул. Усмона Носира 113</span>
                  </div>
                  <div className="headers__connection">
                     <a href="tel: +998951690988" className="headers__tel">
                        <img src={header_icon_two} class="headers__icon" alt="location" /> +99895 169 09 88</a>
                     <a href="mailto:info@rauto.uz" className="headers__email">
                        <img src={header_icon_three} class="headers__icon" alt="icon" />info@rauto.uz</a>
                  </div>
                  <div class="headers__icons ">
                     <a href="#" onClick={search} class="headers__icons-item">
                        <div class="search-input">
                           <input type="text" />
                           <span class="close-search"></span>
                        </div>
                        <button class="search"><img src={search_icon} class="headers__icon" alt="location" /></button>
                     </a>
                  </div>
                  <div class="headers__respons">
                     <div>
                        <button class="search headers__item">
                           <img src={search_icon_two} class="headers__icon" alt="icon" />
                        </button>
                     </div>
                     <a href="#" class="headers__item">
                        <img src={number_i} class="headers__icon" alt="icon" /> +99895 169 09 88</a>
                     <a onClick={OPEN} class="menu__icon nav-icon menu__open">
                        <span></span>
                     </a>
                  </div>

                  <div class="menu headers__item">
                     <div class="menu__body">
                        <h2 class="menu__title">Меню</h2>
                        <a class="menu__close">
                           <img src={close_i} class="headers_close_icon" alt="cross" />
                        </a>
                        <div class="menu__block menu__block-1">
                           <div class="menu__link">
                              <a type='button' onClick={() => setCollapseOneOpen(!collapseOneOpen)}>Главная</a>
                              <div class="menu__link-arrow">
                                 <img src={arrow_i} class="headers___icon" alt="icon" />
                              </div>
                           </div>
                           {collapseOneOpen ? (
                                 <>
                                 <div class="menu__link">
                                 <a href="/">АКЦИИ</a>
                                 </div>
                                 <div class="menu__link">
                                 <a href="/">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</a>
                                 </div>
                                 </>
                              ) : ("")}
                           <div class="menu__link">
                              <a href="#">Автомобили</a>
                              <div class="menu__link-arrow">
                                 <img src={arrow_i} class="headers___icon" alt="icon" />
                              </div>
                           </div>
                           <div class="menu__link" onClick={() => setCollapseTwoOpen(!collapseTwoOpen)}>
                              <a href="#">Услуги</a>
                              <div class="menu__link-arrow">
                                 <img src={arrow_i} class="headers___icon" alt="icon" />
                              </div>
                           </div>
                           {collapseTwoOpen ? (
                           <>
                           <div className='menu__link'>
                              <a href="/">КОМИССИЯ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">ВЫКУП</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">ОЦЕНКА ON-LINE</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">ОБМЕН</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">СТРАХОВАНИЕ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">КРЕДИТОВАНИЕ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">АВТО ИЗ КОРЕИ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">АВТО ИЗ ЕВРОПЫ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">АВТОНОМЕРЫ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">АВТОПОДБОР</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">ФОТОПРОДАЖА</a>
                           </div>
                           
                           </>) : ("")}
                           <div class="menu__link" onClick={() => setCollapseThreeOpen(!collapseThreeOpen)}>
                              <a href="#">Компания</a>
                              <div class="menu__link-arrow">
                                 <img src={arrow_i} class="headers___icon" alt="icon" />
                              </div>
                           </div>
                           {collapseThreeOpen ? (
                           <>
                           <div className='menu__link'>
                              <a href="/">О НАС</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">НАШИ КЛИЕНТЫ</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">НАША КОМАНДА</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">ПОЛИТИКА КАЧЕСТВА</a>
                           </div>
                           <div className='menu__link'>
                              <a href="/">ВАКАНСИИ</a>
                           </div>
                           </>) : ("")}
                           <div class="menu__link">
                              <a href="#">Контакты</a>
                              <div class="menu__link-arrow">
                                 <img src={arrow_i} class="headers___icon" alt="icon" />
                              </div>
                           </div>
                           <div class="menu__link">
                              <Link to="/login">Вход</Link>
                           </div>
                           <div class="menu__link">
                              <a href="#">Сравнения</a>
                           </div>
                        </div>
                        <div class="menu__block">
                           <a href="#" class="headers__link">
                              <img src={phone_i} class="headers____icon" alt="location" /> +99895 169 09 88</a>

                           <a href="#" class="headers__link">
                              <img src={mail_i} class="headers____icon" alt="icon" />
                              info@rauto.uz</a>
                        </div>
                        <div class="menu__block menu__social">
                           <a href="#" class="menu__social-icon">
                              <img src={facebook_icon} class="headers_social_icon" alt="icon" />
                           </a>
                           <a href="#" class="menu__social-icon">
                              <img src={instagram_icon} class="headers_social_icon" alt="icon" />
                           </a>
                           <a href="#" class="menu__social-icon">
                              <img src={youtube_icon} class="headers_social_icon" alt="icon" />
                           </a>
                        </div>
                        <div class="menu__block menu__block-location">
                           <img src={icon_location} class="headers__icon" alt="location" />
                           <address>г.Ташкент, ул.Усмона Носира 113</address>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="headers__main">
               <div class="container">
                  <div class="headers__logo">
                     <a href="/"><img src={logo_icon} alt="logo" /></a>
                  </div>

                  <nav class="headers__nav nav">
                     <a href='/' class="headers__nav-item">
                        <span class="headers__nav-icon"><span class="material-symbols-outlined">
                           store
                        </span></span>
                        <p class="headers__nav-link tooltips">Главная
                           <ul className="tooltipstext">
                              <li className='menu-item'>АКЦИИ</li>
                           </ul>
                           <ul className="tooltipstexttwo">
                              <li className='menu-item'>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</li>
                           </ul>
                        </p>
                     </a>
                     <a href="#" class="headers__nav-item">
                        <span class="headers__nav-icon"><span class="material-symbols-outlined">
                           directions_car
                        </span></span>
                        <span class="headers__nav-link">
                           Автомобили</span>
                     </a>
                     <a href="#" class="headers__nav-item">
                        <span class="headers__nav-icon"><span class="material-symbols-outlined">
                           handshake
                        </span></span>
                        <p class="headers__nav-link tooltips">Услуги
                           <ul className="tooltipstextt">
                              <li className='menu-item'><a href="">КОМИССИЯ</a></li>
                              <li className='menu-item'><a href="">ВЫКУП</a></li>
                              <li className='menu-item'><a href="">ОЦЕНКА ON-LINE</a></li>
                              <li className='menu-item'><a href="">ОБМЕН</a></li>
                              <li className='menu-item'><a href="">СТРАХОВАНИЕ</a></li>
                              <li className='menu-item'><a href="">КРЕДИТОВАНИЕ</a></li>
                           </ul>
                           <ul className="tooltipstexttwot">
                              <li className='menu-item'><a href="">АВТОНОМЕРЫ</a></li>
                              <li className='menu-item'><a href="">АВТОПОДБОР</a></li>
                              <li className='menu-item'><a href="">ФОТОПРОДАЖА</a></li>
                           </ul> </p>
                     </a>
                     <a href="#" class="headers__nav-item">
                        <span class="headers__nav-icon"><span class="material-symbols-outlined">
                           info
                        </span></span>
                        <span class="headers__nav-link">
                           Компания </span>
                     </a>
                     <a href="#" class="headers__nav-item">
                        <span class="headers__nav-icon"><span class="material-symbols-outlined">
                           phone_enabled
                        </span></span>
                        <span class="headers__nav-link">
                           Контакты</span>
                     </a>
                     <Link to='/login' class="headers__nav-item">
                        <span class="headers__nav-icon"><span class="material-symbols-outlined">
                           person
                        </span></span>
                        <span class="headers__nav-link">
                           Вход</span>
                     </Link>
                  </nav>
               </div>
            </div>
         </header>
      </>
   )
}

export default Header