// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const square = document.querySelector(".square")
// const but = document.querySelector("button")
// but.addEventListener("click",function(){
//    square.style.backgroundColor = "green";
//    square.style.width = "100px";
//    square.style.height = "100px";
// })
/////////////////////////////////////////////////////////////

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const square = document.querySelector(".pink")
// const but = document.querySelector("button")
// but.addEventListener("click",function(){
//    square.style.backgroundColor = "blue";
//    console.log("blue");

// })
// ///////////////////////////////////////////////////////////

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const square = document.querySelector("div")
// const but = document.querySelector("button")

// but.addEventListener("click",function(){
//       square.style.width = "170px";
//       square.style.height = "170px";
  
// })

///////////////////////////////////////////////////////////

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.


// const square = document.querySelector("div")
// const but = document.querySelector("button")

// but.addEventListener("click",function(){
//       square.innerHTML = "<p>рандомный текст синего цвета</p>";
  
// })

// ////////////////////////////////////////////////////////////

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const square = document.querySelector("div")
const but = document.querySelector("button")

but.addEventListener("click",function(){
    
       setTimeout(function() {
         square.innerHTML = "<p class=green>рандомный текст зеленого  цвета</p>";
      }, 3000 )
      setTimeout(function() {
         square.innerHTML = "<p class=blue>рандомный текст синего  цвета</p>"
      }, 2000 ) 
      
  
})