function mudar(){
const html = document.documentElement
html.classList.toggle("claro")

const img= document.querySelector("#profile img")
if(html.classList.contains('claro')){

  img.setAttribute("src", "./assets/Avatar2.png")

}else{ img.setAttribute('src', './assets/avatar.png')}




}