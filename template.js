document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contact-form');
    let inputFullName = document.getElementById('inputFullName');
    let inputEmail = document.getElementById('inputEmail');
    let inputSelectDate = document.getElementById('inputSelectDate');
    let inputSelectTime = document.getElementById('inputSelectTime');
    let inputMessage = document.getElementById('inputMessage');
  
    form.addEventListener('submit', handleSubmit);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let formElements = [
        {
          element: inputFullName,
          properties: {
            value: inputFullName.value,
            successLabel: `Hi, ${inputFullName.value}! Your fullname was successfully added`,
            errorLabel:
              'Please enter your name that is at least 3 characters long',
            condition: inputFullName.value.length > 2,
          },
        },
        {
          element: inputEmail,
          properties: {
            value: inputEmail.value,
            successLabel: `Your email ${inputEmail.value} was successfully added`,
            errorLabel: 'Please enter your email address',
            condition: !!inputEmail.value,
          },
        },
        {
          element: inputSelectDate,
          properties: {
            value: inputSelectDate.value,
            successLabel: `Great choice! We will be happy to meet you ${inputSelectDate.value}`,
            errorLabel: 'Please select a date to schedule a meeting',
            condition: !!inputSelectDate.value,
          },
        },
        {
          element: inputSelectTime,
          properties: {
            value: inputSelectTime.value,
            errorLabel: 'Please select time to schedule a meeting',
            condition: inputSelectTime.value !== 'select',
          },
        },
        {
          element: inputMessage,
          properties: {
            value: inputMessage.value,
            successLabel: `We received you message!`,
            errorLabel:
              'Please write us about your business and the topics you would like to discuss',
            condition: inputMessage.value.length > 3,
          },
        },
      ];
  
      const resetClass = (element) => {
        // Convert the DOMTokenList to an array
        let classes = [...element.classList];
  
        // Loop through each class
        for (let className of classes) {
          // If the current class is not the one to keep, remove it
          if (className !== 'contact-us__grid-content') {
            element.classList.remove(className);
          }
        }
      };
      const handleSuccess = (element, label = '') => {
        element.querySelector('.form-result').textContent = label;
        element.classList.add('success');
      };
      const handleError = (element, label = '') => {
        element.querySelector('.form-result').textContent = label;
        element.classList.add('error');
      };
      const validateElement = (item) => {
        const { element, properties } = item;
  
        let elementWrapper = element.parentElement;
        resetClass(elementWrapper);
        if (properties.condition) {
          handleSuccess(elementWrapper, properties.successLabel);
        } else {
          handleError(elementWrapper, properties.errorLabel);
        }
      };
  
      formElements.forEach((item) => validateElement(item));
    }
  });
  