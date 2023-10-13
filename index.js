document.addEventListener(`DOMContentLoaded`, function () {
    /*const form = document.getElementById('form')
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

    
    form.addEventListener('submit', handleName)
    function handleName(event) {
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
    


fetch(`https://jsonplaceholder.typicode.com/users`)
.then ((response) => {
    if (!response.ok) {
        throw new Error(`Netwrok response was not ok`)
    }
    return response.json()
})
.then((usersData) => {
    handleUser(usersData)
})
.catch((error) => {
    console.log(`There was a problem with the fetch operations`, error.message)
})

const handleUser = (users) => {
const form = document.querySelector(`#user_block form`)
const input = form.querySelector(`input[type=text]`)

form.addEventListener(`submit`, handleSubmit)
function handleSubmit(event) {
    event.preventDefault()

    let inputValue = input.value 
    let myUser = users.find((el) => el.name === inputValue)
    let myUserId
    
    if (myUser) {
        myUserId = myUser.id
        getUserPosts(myUserId)
    } else {
        const userBlock = document.getElementById(`user_block`)
        const postsList = document.getElementById(`user_info`)

        if (!!postsList) {
            userBlock.removeChild(postsList)
        }
        const errorMessage = document.createElement(`p`)
        errorMessage.textContent = `User with the name ${inputValue} does not exist`
        form.removeChild(errorMessage)
        form.appendChild(errorMessage)
    }
 }
}

const getUserPosts = (myUserId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${myUserId}`)
    .then((response) => {
        return response.json()
    })
    .then((posts) => {
        let postsList = document.getElementById(`user_info`)

        posts.forEach((post) => {
            const listItem = document.createElement(`li`)
            const postTitle = document.createElement(`h3`)
            const postBody = document.createElement(`p`)

            postTitle.textContent = post.postTitle
            postBody.textContent = post.postBody

            postsList.appendChild(listItem)
            listItem.appendChild(postTitle)
            listItem.appendChild(postBody)
        })
    })
    .error((error) => {
        console.log(`Error`, error)
    })
}














} )