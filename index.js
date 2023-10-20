document.addEventListener(`DOMContentLoaded`, function () {
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
    
      let allInputs = [
        {
            value: inputName.value,
            successLabel: `Hi, ${inputName.value}! Your name was successfully added`,
            errorLabel: 'Your name should contain at least 3 characters',
            condition: inputName.value.length > 2,
        },
      ]
  
      const handleSuccess = (value, label = '') => {
        element.querySelector('#result').textContent = label
        element.classList.add('success')
      }
      const handleError = (value, label = '') => {
        element.querySelector('#result').textContent = label
        element.classList.add('error')
      }

      const validateInput = (item) => {
        const { value, condition } = item;

      if (condition) {
        handleSuccess(successLabel);
      } else {
        handleError(errorLabel);
      }
    }
      allInputs.forEach((item) => validateInput(item));
    };














})

/*form.addEventListener('submit', handleSubmit)
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
} */