// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.


   // const divNum = document.querySelector(".numbers")
   // for (let i = 100; i >= 50; i-=10) {
   //     {
   //       divNum.innerHTML += `<p>${i}</p>`
   //    }
   // }

 // Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
  
//  const masStrok = [
//    "moloko",
//    "maslo",
//    "kofe",
//    "voda",
//    "limon"
//  ]
//  const strings_container = document.querySelector(".strings_container")
//  for ( let i = 0; i<masStrok.length; i++) {
//    strings_container.innerHTML+=`<p>${masStrok[i]}</p>`
//  }

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
   {
      first_name: "Anna",
      last_name: "Ivanova",
      age: 25
   },
   {
      first_name: "Olga",
      last_name: "Egorova",
      age: 10
   },
   {
      first_name: "Ivan",
      last_name: "Petrov",
      age: 66
   },
   {
      first_name: "Marta",
      last_name: "Eliseeva",
      age: 24
   }

]
const users_container = document.querySelector(".users_container")
for (i=0; i<users.length; i++)
if (users[i].age >18) {
   users_container.innerHTML += `<div class=user>
   <p>${users[i].first_name}</p>
   <p>${users[i].last_name}</p>
   <p>${users[i].age}</p>
   </div>`
}