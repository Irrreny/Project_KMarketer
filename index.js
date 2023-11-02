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




//------Form Validation not finished--------//
/*document.addEventListener(`DOMContentLoaded`, function () {
    const form = document.getElementById('form')
    const inputName = document.getElementById('inputName')
    const resultName = document.getElementById('resultName')
    const inputMessage = document.getElementById(`inputMessage`)
    const resultMessage = document.getElementById(`resultMessage`)
    const inputEmail = document.getElementById(`inputEmail`)
    const resultEmail = document.getElementById(`resultEmail`)
    const selectDate = document.getElementById(`inputDate`)
    const resultDate = document.getElementById(`resultDate`)
    const selectTime = document.getElementById(`inputTime`)
    const resultTime = document.getElementById(`resultTime`)

form.addEventListener('submit', handleSubmit)
    function handleSubmit(event) {
      event.preventDefault()

      const name = inputName.value.trim() 
      if (name.length < 2) {
        resultName.textContent = `❌ Name should contain at least 2 letters`
        resultName.style.color = `red`
      }  else {
        resultName.textContent = `✔️ Hello, ${name}!`
        resultName.style.color = `green`
    }

    const email = inputEmail.value
    if (email === ``) {
        resultEmail.textContent = `❌ Please enter your email`
        resultEmail.style.color = `red`
    }  else {
        resultEmail.textContent = `✔️ Your ${email} was added`
        resultEmail.style.color = `green`
    }

    const daySelect = selectDate.value
    if (daySelect === ``) {
        resultDate.textContent = `❌ Please select day to book an appointment`
        resultDate.style.color = `red`
    } else {
        resultDate.style.display = `none`
    }

    const timeSelect = selectTime.value
    if (timeSelect === ``) {
        resultTime.textContent = `❌ Please select time to book an appointment`
        resultTime.style.color = `red`
    } else {
        resultTime.style.display = `none`
    }

    const message = inputMessage.value
    if  (message.length < 10) {
        resultMessage.textContent = `❌ The "Message" field must contain a minimum of 3 words`
        resultMessage.style.color = `red`
    } else {
        resultMessage.style.display = `none`
    }
}

})*/