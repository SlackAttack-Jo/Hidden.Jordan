'use strict'

const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

 
  const formData = {
    name: name,
    email: email,
    message: message
  };

 
  localStorage.setItem('formData', JSON.stringify(formData));

 
  form.reset();

  
  alert('Form data saved successfully!');
});