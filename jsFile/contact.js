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

  
});
let popup = document.getElementById("popup");
    function openPopup(){
        let userName =document.getElementById("name")
        let userEmail =document.getElementById("email")
        let userMessage =document.getElementById("message")
        if (userName.value !=="" && userEmail.value !=="" && userMessage.value !=="") {
            popup.classList.add("open-popup");
        }
       
      }
      function closePopup(){
        popup.classList.remove("open-popup");
      }    

