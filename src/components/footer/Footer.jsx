import React from 'react'

function Footer() {
   return (
      <footer class="footer">
         <div class="container">
            <div class="footer__row">
               <div class="footer__block">
                  <h4 class="footer__title">О нас:</h4>
                  <div class="footer__line"></div>
                  <ul class="footer__list">
                     <li class="footer__item"><a className='footer__link' href="#">О НАС</a></li>
                     <li class="footer__item"><a className='footer__link' href="#">НАШИ КЛИЕНТЫ</a></li>
                     <li class="footer__item"><a className='footer__link' href="#">НАША КОМАНДА</a></li>
                     <li class="footer__item"><a className='footer__link' href="#">ПОЛИТИКА КАЧЕСТВА</a></li>
                     <li class="footer__item"><a className='footer__link' href="#">ВАКАНСИИ</a></li>
                  </ul>
               </div>
               <div class="footer__block">
                  <h4 class="footer__title">Акции:</h4>
                  <div class="footer__line"></div>
                  <ul class="footer__list">
                     <li class="footer__item">
                        <a className='footer__link' href="#">ПОКУПАЙ КАСКО И ПОЛУЧАЙ РАСШИРЕНИЕ</a>
                     </li>
                     <li class="footer__item">
                        <a className='footer__link' href="#">УСЛУГА ТРЕЙД-ИН</a>
                     </li>
                  </ul>
               </div>
               <div class="footer__block-map">
                  <h4 class="footer__title">Наш адрес:</h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.97970615525!2d69.22789434470992!3d41.26193457486815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a79dc1f2c67%3A0xd1bf027623674052!2z0JDQstGC0L7RgdCw0LvQvtC9ICJBVVRPIExFQURFUiI!5e0!3m2!1suz!2s!4v1653996881223!5m2!1suz!2s" width="490" height="290" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;