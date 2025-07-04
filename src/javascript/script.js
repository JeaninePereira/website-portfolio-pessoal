//--- Executa o script mobile da nav --// 
$(document).ready(function() {
    $('.mobile-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active');
        $('.mobile-btn').find('i').toggleClass('fa-x');
    });
});


//--- Validações do formulário de contato --// 
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const message = document.getElementById("message");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
  
});


form.addEventListener('submit', function(event) {
  event.preventDefault();

  this.reset();

});


username.addEventListener("blur", () => {
  checkInputUsername();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})

tel.addEventListener("blur", () => {
  checkInputTel();
})

message.addEventListener("blur", () => {
  checkTextareaMessage();
})

//--- Validações para o nome --// 
function checkInputUsername(){
    const usernameValue = username.value.trim();
    const nameRegex = /^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$/;

    if(usernameValue === ""){
    errorInput(username, "O nome é obrigatório.")
    } else if (!nameRegex.test(usernameValue)) {
    errorInput(username, "Digite nome e sobrenome.");
    }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
    }
}

//--- Validações para o email --// 
function checkInputEmail(){
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
    } else if (!emailRegex.test(emailValue)) {
    errorInput(email, "Digite um email válido.");
    }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
    }   
}

//--- Validações para o telefone --// 
function checkInputTel(){
    const telValue = tel.value.trim();
    const telRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    if(telValue === ""){
    errorInput(tel, "O telefone é obrigatório.")
    } else if (!telRegex.test(telValue)) {
    errorInput(tel, "Digite um telefone válido. Ex: (XX) XXXXX-XXXX");
    }else{
    const formItem = tel.parentElement;
    formItem.className = "form-content"
    }
}

//--- Validações para a mensagem --// 
function checkTextareaMessage(){
    const messageValue = message.value.trim();
    const messageRegex = /^.{10,}$/;
    
    if(messageValue === ""){
    errorInput(message, "A mensagem é obrigatória.")
    } else if (!messageRegex.test(messageValue)) {
    errorInput(message, "A mensagem deve conter pelo menos 10 caracteres.");
    }else{
    const formItem = message.parentElement;
    formItem.className = "form-content"
    }
}


function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputTel();
    checkTextareaMessage();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
    });

    if(isValid){
    alert("MENSAGEM ENVIADA!")
    }
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}


document.addEventListener("click", function (event) {
  if (!form.contains(event.target)) {
    const formItems = form.querySelectorAll(".form-content");

    formItems.forEach((item) => {
      item.classList.remove("error");

      const errorMsg = item.querySelector("a");
      if (errorMsg) {
        errorMsg.innerText = "";
      }
    });
  }

});