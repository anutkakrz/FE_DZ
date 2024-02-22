// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.

// const username = document.querySelector(".username");
// const lastname = document.querySelector(".lastname");
// const age = document.querySelector(".age");
// const button = document.querySelector("button");

// button.addEventListener("click",function (event) {
   
//    event.preventDefault()
//    console.log(username.value, lastname.value, age.value);
   
// })
// ///////////////////////////////////////////////////////

// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.

const username = document.querySelector(".username");
const lastname = document.querySelector(".lastname");
const age = document.querySelector(".age");
const button = document.querySelector("button");

const users = [];
const user = {
   username: username.value,
   lastname: lastname.value,
   age: age.value
}
button.addEventListener("click",function (event) {
   
   event.preventDefault()
   console.log(username.value, lastname.value, age.value); 
})
users.push(user)
console.log(users);
