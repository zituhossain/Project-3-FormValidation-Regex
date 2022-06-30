const formElm = document.querySelector('form');
const nameElm = document.querySelector('#name');
const emailElm = document.querySelector('#email');
const phoneElm = document.querySelector('#phone');
const addressElm = document.querySelector('#address');
const submitElm = document.querySelector('#submit');
const successElm = document.getElementById('success');
const failureElm = document.getElementById('failure');
const passwordBtn  = document.getElementById("generatepass");
const passwordElm = document.getElementById("password");
const websiteElm = document.getElementById("web");

successElm.style.display = 'none';
failureElm.style.display = 'none';


let validUser = false;
let validEmail = false;
let validPhone = false;
let validPass = false;
let validWeb = false;

function resetInput() {
    nameElm.value = '';
    emailElm.value = '';
    phoneElm.value = '';
    addressElm.value = '';
    passwordElm.value = '';
    websiteElm.value = '';
}

nameElm.addEventListener('blur', ()=>{
    // console.log('name is blurred');
    // validate name 
    const regex = /^[a-z]([0-9a-z]){3,10}$/i ;
    const str = nameElm.value;
    if(regex.test(str)) {
        console.log('Your name is Valid');
        nameElm.classList.remove('is-invalid');
        validUser = true;
    }else {
        console.log('Your name is not Valid');
        nameElm.classList.add('is-invalid');
        validUser = false;
    }
});


emailElm.addEventListener('blur', ()=>{
    // console.log('email is blurred');
    // validate email 
    const regex = /^([_\-\.0-9a-z]){2,}@([_\-\.0-9a-z]){2,20}\.[a-z]{2,5}$/i ;
    const str = emailElm.value;
    if(regex.test(str)) {
        console.log('Your Email is Valid');
        emailElm.classList.remove('is-invalid');
        validEmail = true;
    }else {
        console.log('Your Email is not Valid');
        emailElm.classList.add('is-invalid');
        validEmail = false;
    }
});
phoneElm.addEventListener('blur', ()=>{
    // console.log('phone is blurred');
    // validate phone 
    const regex = /\+?(88)?01[1-9]\d{8}$/gi ;
    const str = phoneElm.value;
    if(regex.test(str)) {
        console.log('Your Phone is Valid');
        phoneElm.classList.remove('is-invalid');
        validPhone = true;
    }else {
        console.log('Your Phone is not Valid');
        phoneElm.classList.add('is-invalid');
        validPhone = false;
    }
});

passwordElm.addEventListener('blur', () => {
    // console.log('pass is blurrd');
    // validate pass
    const regex = /^([a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){10,20}$/;
    const str = passwordElm.value;
    if(regex.test(str)) {
        console.log('Your pass is valid');
        passwordElm.classList.remove('is-invalid');
        validPass = true;
    }else {
        console.log('pass is not valid');
        passwordElm.classList.add('is-invalid');
        validPass = false;
    }
});

websiteElm.addEventListener('blur', () => {
    // console.log('pass is blurrd');
    // validate pass
     const regex = /([http:// | htpps:// | www \.])[a-z0-9]{2,8}.[a-z]{2,6}$/;
    // const regex = /((http|https):\/\/)?(www.)?[a-z0-9_-].[a-z]{2,6}/;
    const str = websiteElm.value;
    if(regex.test(str)) {
        console.log('Your Web URL is valid');
        websiteElm.classList.remove('is-invalid');
        validWeb = true;
    }else {
        console.log('Your Web URL is not valid');
        websiteElm.classList.add('is-invalid');
        validWeb = false;
    }
});

// Submit the form
submitElm.addEventListener('click', (e) => {
    e.preventDefault();
     console.log(validUser, validEmail, validPhone);
    // Submit form
    if(validUser && validEmail && validPhone) {
        successElm.style.display = 'block';
        failureElm.style.display = 'none';
        successElm.classList.add('show');
        resetInput();
    }else {
        failureElm.style.display = 'block';
        successElm.style.display = 'none';
        failureElm.classList.add('show');
    }

});


// Generate Password
passwordBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

  let generatePassword = "";
  let characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

  for (let i = 0; i < 10; i++) {
    generatePassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  passwordElm.setAttribute('value', generatePassword);
});