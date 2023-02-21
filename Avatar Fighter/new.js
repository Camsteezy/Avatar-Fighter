const Aang= document.querySelector("#Aang")
const Katara = document.querySelector("#Katara")
const Toph = document.querySelector ("#Toph")
const Sokka = document.querySelector("#Sokka")
const Zuko = document.querySelector("#Zuko")

document.querySelector('#pick1').addEventListener('click',pick1)
document.querySelector('#pick2').addEventListener('click',pick2)
document.querySelector('#pick3').addEventListener('click',pick3)
document.querySelector('#pick4').addEventListener('click',pick4)
document.querySelector('#pick5').addEventListener('click',pick5)

function pick1 (){
 Katara.classList.add('hidden')
 Toph.classList.add('hidden')
 Sokka.classList.add('hidden')
 Zuko.classList.add ('hidden')
 Aang.classList.toggle('hidden')
 Zuko.classList.toggle('hidden')
}
function pick2 (){
    Toph.classList.add('hidden')
    Sokka.classList.add('hidden')
    Zuko.classList.add('hidden')
    Aang.classList.add ('hidden')
    Katara.classList.toggle('hidden')
    Zuko.classList.toggle('hidden')
   }
   function pick3 (){
    Sokka.classList.add('hidden')
    Zuko.classList.add('hidden')
    Aang.classList.add('hidden')
    Katara.classList.add ('hidden')
    Sokka.classList.toggle('hidden')
    Zuko.classList.toggle('hidden')
   }
   function pick4 (){
    Zuko.classList.add('hidden')
    Aang.classList.add('hidden')
    Katara.classList.add('hidden')
    Sokka.classList.add ('hidden')
    Toph.classList.toggle('hidden')
    Zuko.classList.toggle('hidden')
   }
   function pick5 (){
    Aang.classList.add('hidden')
    Katara.classList.add('hidden')
    Toph.classList.add('hidden')
    Sokka.classList.add ('hidden')
    Zuko.classList.toggle('hidden')
   
   }