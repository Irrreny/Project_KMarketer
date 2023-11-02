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




