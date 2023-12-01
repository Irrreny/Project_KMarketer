
import Swiper from 'swiper/bundle'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'



document.addEventListener(`DOMContentLoaded`, function () {

  //------Swiper Clients section-----//

  new Swiper(".swiper", {
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
  });

   //------Swiper Teams section-----//

   
//-------My Swiper------//
const swiperWrapper = document.querySelector('.my-swiper-wrapper')
const slides = document.querySelectorAll('.my-swiper-slide')
const slidesPerView = 3
let currentIndex = 0

function goToSlide(index) {
  if (index < 0 || index >= slides.length - slidesPerView + 1) return

  currentIndex = index
  const offset = -currentIndex * (100 / slidesPerView)
  swiperWrapper.style.transform = `translateX(${offset}%)`
}

function nextSlide() {
  currentIndex = Math.min(currentIndex + 1, slides.length - slidesPerView)
  if (currentIndex === slides.length - slidesPerView) {
    currentIndex = 0
  }
  goToSlide(currentIndex)
}

function prevSlide() {
  currentIndex = Math.max(currentIndex - 1, 0);
  goToSlide(currentIndex);
}

const nextButton = document.querySelector('.my-next-button')
const prevButton = document.querySelector('.my-prev-button')

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)

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






