
import Swiper from 'swiper/bundle'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'



document.addEventListener(`DOMContentLoaded`, function () {

  //------Swiper Clients section-----//

  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
        
      },
      // when window width is >= 480px
      580: {
        slidesPerView: 2,
      
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 3,
        
      }
    },
    pagination: {
      el: ".swiper-pagination",
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    //------Saved slide task-----//
    on: {
      slideChange: function () {
        localStorage.setItem('currentSlide', this.activeIndex);
      }
    }
  });
  
  const savedSlide = localStorage.getItem('currentSlide')
  if (savedSlide) {
    swiper.slideTo(savedSlide)
}

   //------Swiper Teams section-----//

   //------Cookies----//
   function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1)
      }
    }
    return null
  }

  function setCookie(name, value, daysToExprire) {
    const date = new Date()
    date.setTime(date.getTime() + (daysToExprire * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + date.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
  }

  const loggedIn = getCookie('loggedIn')
  if (!loggedIn) {
  const username = prompt('Insert your login:')
  const password = prompt('Insert your password:')
  
  setCookie('loggedIn', 'true', 30)
  setCookie('username', username, 30)
  setCookie('password', password, 30)
} else {
  
  getCookie('username')
  getCookie('password')
  
}
//------Login time task-----//
const currentTime = new Date().toLocaleString()

sessionStorage.setItem('loginTime', currentTime)
const savedTime = sessionStorage.getItem('loginTime')
console.log('The Login Date and Time', savedTime)

//------Form Validation--------//

  const form = document.getElementById('form')
  const inputName = document.getElementById('inputName')
  const inputEmail = document.getElementById(`inputEmail`)
  const selectDate = document.getElementById(`inputDate`)
  const selectTime = document.getElementById(`inputTime`)
  const inputMessage = document.getElementById(`inputMessage`)

  const fields = [
    { 
    element: inputName, 
    result: document.getElementById('resultName'), 
    errorMessage: 'Name should contain at least 2 letters', 
    successMessage: 'Your name was succesfully added' },
    { 
    element: inputEmail, 
    result: document.getElementById('resultEmail'), 
    errorMessage: 'Please enter your email',
    successMessage: 'Your email was succesfully added' },
    { 
    element: selectDate, 
    result: document.getElementById('resultDate'), 
    errorMessage: 'Please select day to book an appointment',
    successMessage: 'The date was selected' },
    { 
    element: selectTime, 
    result: document.getElementById('resultTime'), 
    errorMessage: 'Please select time to book an appointment',
    successMessage: 'The time was selected' },
    { 
    element: inputMessage, 
    result: document.getElementById('resultMessage'), 
    errorMessage: 'The "Message" field must contain a minimum of 3 words',
    successMessage: 'Youe message was added' }
  ]

  form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault();

    fields.forEach(field => {
      validateFieldOrSelect(field)
    });
  }

  function validateFieldOrSelect({ element, result, errorMessage, successMessage}) {
    const value = element.value.trim()
    if (value.length < 2) {
      displayErrorMessage(result, errorMessage)
    } else {
      displaySuccessMessage(result, successMessage)
    }
  }

  function displayErrorMessage(element, message) {
    element.textContent = `❌ ${message}`
    element.style.color = `red`
  }

  function displaySuccessMessage(element, message) {
    element.textContent = `✔️ ${message}`
    element.style.color = `green`
  }






})






