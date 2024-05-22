let name = document.querySelector('#name');

let pattern_name = /[^а-яА-ЯёЁ\-\s]/;

document.querySelector('#name').addEventListener('blur', function (e) { 
let thisValue = e.target.value;
if (!thisValue || thisValue.match(pattern_name)) {
e.target.style.border = '2px solid red';
e.target.style.color = '#BC0003';
} else {
e.target.style.border = '2px solid green';
e.target.style.color = '#3D0102';
 }
});

let pattern_surname = /[^а-яА-ЯёЁ\-\s]/;

document.querySelector('#surname').addEventListener('blur', function (e) {
let thisValue = e.target.value;
if (!thisValue || thisValue.match(pattern_surname)) {
 e.target.style.border = '2px solid red';
 e.target.style.color = '#BC0003';
 } else {
 e.target.style.border = '2px solid green';
 e.target.style.color = '#3D0102';
}
});

let pattern_patronymic= /[^а-яА-ЯёЁ\-\s]/;
document.querySelector('#patronymic').addEventListener('blur', function (e) {
 let thisValue = e.target.value;
 if (!thisValue || thisValue.match(pattern_patronymic)){
  e.target.style.border = '2px solid red';
 e.target.style.color = '#BC0003';
  } else {
e.target.style.border = '2px solid green';
  e.target.style.color = '#3D0102';
 }
    });
    
let pattern_phone = /\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/;
    
document.querySelector('#phone').addEventListener('blur', function (e) {
let thisValue = e.target.value;
if (!thisValue || thisValue.match(pattern_phone)){
 e.target.style.border = '2px solid red';
 e.target.style.color = '#BC0003';
} else {
    e.target.style.border = '2px solid green';
     e.target.style.color = '#3D0102';
    }
    });
    
    let pattern_email= /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
    
    document.querySelector('#email').addEventListener('blur', function (e) {
     let thisValue = e.target.value;
    if (!thisValue || thisValue.match(pattern_email)){
     e.target.style.border = '2px solid red';
     e.target.style.color = '#BC0003';
     } else {
    e.target.style.border = '2px solid green';
     e.target.style.color = '#3D0102';
    }
    });
    
    let pattern_password =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let pwd = '';
    document.querySelector('#password').addEventListener('blur', function (e) {
    let thisValue = e.target.value;
    pwd = thisValue;
    if (!thisValue || thisValue.match(pattern_password)){
    e.target.style.border = '2px solid red';
    e.target.style.color = '#BC0003';
} else {
    e.target.style.border = '2px solid green';
     e.target.style.color = '#3D0102';
     }
    });
    
    let pattern_password_1 =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let pwd1 = '';
    document.querySelector('#password_1').addEventListener('blur', function (e) {
    let thisValue = e.target.value;
    pwd1 = thisValue;
    if (!thisValue || thisValue.match(pattern_password_1) || pwd != pwd1){
    e.target.style.border = '2px solid red';
    e.target.style.color = '#BC0003';
    } else {
    e.target.style.border = '2px solid green';
    e.target.style.color = '#3D0102';
    }
    });
