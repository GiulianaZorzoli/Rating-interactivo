//seleccionamos contenedores
const contenedor1=document.querySelector(".contenedor1")
const contenedor2=document.querySelector(".contenedor2")
//seleccionar los submit
const sub1=document.getElementById("submit1")
const sub2=document.getElementById("submit2")
//escuchar los submit
sub1.addEventListener("click",function(){
    console.log("next")
    contenedor1.classList.add("hidden")
    contenedor2.classList.remove("hidden")
})
sub2.addEventListener("click",function(){
    console.log("prev")
    contenedor2.classList.add("hidden")
    contenedor1.classList.remove("hidden")
})

//seleccionamos todos los botones
const botones=document.querySelectorAll(".boton")
const num=document.getElementById("num")
//escuchar los clicks en cada uno
botones.forEach((element)=>{
    element.addEventListener("click",function(){
        console.log(element.innerHTML)
        num.innerHTML=element.innerHTML
    })
})
