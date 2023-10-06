document.addEventListener(`DOMContentLoaded`, function () {
    const form = document.getElementById('form')
    const inputName = document.getElementById('inputName')
    const resultName = document.getElementById('resultName')
    const inputMessage = document.getElementById(`inputMessage`)
    const resultMessage = document.getElementById(`resultMessage`)
    const inputEmail = document.getElementById(`inputEmail`)
    const resultEmail = document.getElementById(`resultEmail`)
    const select = document.getElementsByClassName(`form-select`)
    const resultSelect = document.getElementById(`resultSelect`)
    
    form.addEventListener('submit', handleName)
    function handleName(event) {
      event.preventDefault()

      const name = inputName.value.trim() 
      const email = inputEmail.value
      const message = inputMessage.value.trim()

      if (name.length < 2) {
        resultName.textContent = `❌ The "Name" field cannot be empty and must contain a minimum of 3 characters`
        resultName.style.color = `red`
      }  else {
        resultName.textContent = `✔️ Hello, ${name}!`
        resultName.style.color = `green`
    }
    if (email === ``) {
        resultEmail.textContent = `❌ Please enter your email`
        resultEmail.style.color = `red`
    }  if  (message.length < 3) {
        resultMessage.textContent = `❌ The "Message" field must contain a minimum of 3 words`
        resultMessage.style.color = `red`
    } else {
        resultEmail.style.display = `none`
        resultMessage.style.display = `none`
    }
    if (select.value === true) {
        resultSelect.style.display = `none`
    } else {
        resultSelect.textContent = `❌ Please select day and time in order to book an appointment`
        resultSelect.style.color = `red`
    }
}
    


















} )