import { testhtml } from './HTML_test';
testhtml();
const popUpEnter = document.querySelector(".popUpEnter");
const popUpRegistration = document.querySelector(".popUpRegistration");
const popUpRegistrationBtn =document.querySelector('.form-registration-button');
const closePopUpEnter = document.querySelector(".form-closeButtonEnter");
const closePopUpRegistration = document.querySelector(".form-closeButtonRegistration");
const hide = document.querySelector('.mainSection');

function popUpAuthorization(event){
  hide.classList.add('hidden');
  popUpRegistration.classList.remove('active');
  closePopUpRegistration.addEventListener("click", function (event) {
    event.preventDefault();
    popUpRegistration.classList.add("active");
    hide.classList.remove('hidden');
  });
}
function popUpEnterBtn(event){
  hide.classList.add('hidden');
  popUpEnter.classList.remove('active');
  popUpRegistrationBtn.addEventListener('click',function (event){
    popUpEnter.classList.add("active");
    popUpRegistration.classList.remove('active');
  })
  closePopUpEnter.addEventListener("click", function (event) {
    event.preventDefault();
    popUpEnter.classList.add("active");
    hide.classList.remove('hidden');
  });
  closePopUpRegistration.addEventListener("click", function (event) {
    event.preventDefault();
    popUpRegistration.classList.add("active");
    hide.classList.remove('hidden');
  });
}

window.onload = function () {
  const startLearn = document.getElementsByClassName('main__buttonStartLearn');
  for (let i = 0; i < startLearn.length; i++) {
    startLearn[i].addEventListener("click", popUpAuthorization);
  }
  const enterBtn = document.getElementsByClassName('header__enterBtn');
  for (let i = 0; i < enterBtn.length; i++) {
    enterBtn[i].addEventListener("click", popUpEnterBtn);
  }
  const btnStartTest =document.getElementsByClassName('aboutHTML__startBtn');
  for (let i = 0; i < btnStartTest.length; i++) {
    btnStartTest[i].addEventListener("click", test);
  }
}




