//-----Home Work 23(promises, async/await)------//
document.addEventListener(`DOMContentLoaded`, function () {
  //----------Async/Await----------//

  const getPostComment = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/3`)
  let user = await response.json()

  let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  let post = await postsResponse.json()
  console.table(post)
  
  let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments?id=${user.id}`)
  let comment = await commentsResponse.json()
  console.table(comment)
}
getPostComment()

//----------Promises----------//

function getPostsComments(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(data => console.table(data))

  fetch(`https://jsonplaceholder.typicode.com/posts/1/comments?id=${userId}`)
  .then(comment => comment.json())
  .then(data2 => console.table(data2))
  .catch(error => console.log(error))
}
getPostsComments(3)
})


//------Form Validation--------//
document.addEventListener(`DOMContentLoaded`, function () {
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



//----------Regex----------//
//----------1----------//

const string = `Today I went to the shop 123 and bought 4 bananas.`
const numbers = /\d+/g
const numbersFind = string.match(numbers)
console.log(numbersFind)

//----------2----------//

const text = `City postal codes: 12345, 98765, 54321`
const postalCode = /\b[0-9]{5}\b/g
const codeMatching =  text.match(postalCode)

codeMatching.forEach((code) => {

if (code) {
console.log(`${code} is valid`)
} else {
  console.log(`The postal code is invalid`)
}
})

//----------3----------//

const moviesList = [
`1 The Shawshank Redemption (1994)`,
`2 The Godfather (1972)`,
`3 The Godfather: Part II (1974)`,
`4 Pulp Fiction (1994)`,
`5 The Good, the Bad and the Ugly (1966)`,
`6 The Dark Knight (2008)`,
`7 12 Angry Men (1957)`,
`8 Schindler's List (1993)`,
`9 The Lord of the Rings: The Return of the King (2003)`,
`10 Fight Club (1999)`
]

moviesList.forEach((movie) => {
  const year = /\d{4}/g
  const movieYear = movie.match(year)

  if (movieYear > 1990) {
    console.log(movie)
  }
})

//----------4----------//

const colors = [
`AliceBlue #F0F8FF`,
`AntiqueWhite #FAEBD7`,
`Aqua #00FFFF`,
`Aquamarine #7FFFD4`,
`Azure #F0FFFF`,
`12 bit:`,
`White #FFF`,
`Red #F00`,
`Green #0F0`,
`Blue #00F`
]

let colorString = colors.toString()
const colorsPattern = /#[A-Za-z0-9]{6}\b/g
const colorsMatch = colorString.match(colorsPattern)
console.log(colorsMatch)
 


