const plus =document.querySelectorAll('.fold')
const hug = document.querySelectorAll('.hug')

const objects=['Пирс','Офис','Cтадион','Вход','Отель','Вокзал','Ресторан','Дом','Склад','Дом']

Array.from(plus).forEach((e,i)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle('hug')
       if (e.textContent.includes('-')){
         e.textContent='+'
        }
        else {
            setTimeout(()=>e.textContent=`- ${objects[i]}`,200)

        }
    })
})