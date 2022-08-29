let show = document.getElementById("show")
let text = document.getElementById("text")
let btn = document.getElementById("mode")
let toast = document.getElementById("toast")
let darkMode = false
let menuMode = false
const soloLetras ='^[a-z !ñ]+$';

function borrar() {
    show.innerHTML = ""
}

function cambiar() {
    if (darkMode === false) {
        document.body.classList.add("back")
        document.body.classList.remove("backb")
        document.querySelector("footer").classList.add("red")
        document.querySelector("header").classList.add("red")
        document.querySelector("footer").classList.remove("black")
        document.querySelector("header").classList.remove("black")
        btn.classList.add("move")
        btn.classList.remove("backbtn")
        darkMode = true
    } else {
        document.body.classList.remove("back")
        document.body.classList.add("backb")
        document.querySelector("footer").classList.remove("red")
        document.querySelector("header").classList.remove("red")
        document.querySelector("footer").classList.add("black")
        document.querySelector("header").classList.add("black")
        btn.classList.remove("move")
        btn.classList.add("backbtn")
        darkMode = false
    }
}

function encript() {
    let texto = text.value;
    
    if(texto.match(soloLetras)!=null){
      let palabras = texto.split(' ');
      let nuevasPalabras = [];
      
      for (let palabra of palabras) {
        palabra = palabra.replaceAll('e','epe');
        palabra = palabra.replaceAll('i','ipi');
        palabra = palabra.replaceAll('a','apa');
        palabra = palabra.replaceAll('o','opo');
        palabra = palabra.replaceAll('u','upu');      
        
        nuevasPalabras.push(palabra);    
      }
  
      const resultado = nuevasPalabras.join(' ');
      
      show.innerHTML = resultado;
    } else {
      alert('Ingrese letras minúsculas, sin acentos');
      return;
    }  
  }
  
function des() {
    let texto = text.value;
    
    if(texto.match(soloLetras)!=null){
      let palabras = texto.split(' ');
      let nuevasPalabras = [];
      
      for (let palabra of palabras) {
        palabra = palabra.replaceAll('epe','e');
        palabra = palabra.replaceAll('ipi','i');
        palabra = palabra.replaceAll('apa','a');
        palabra = palabra.replaceAll('opo','o');
        palabra = palabra.replaceAll('upu','u');      
        
        nuevasPalabras.push(palabra);    
      }
  
      const resultado = nuevasPalabras.join(' ');
      
      show.innerHTML = resultado;
    } else {
      mostrarError('Ingrese letras minúsculas, sin acentos');
      return;
    }  
}

function copy() {
    show.select()
    show.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(show.value)

    toast.innerHTML = `<p class="anim">Copiado con éxito</p>`


}

function menu() {
    if (menuMode === false) {
        document.querySelector("header").classList.add("menu")
        menuMode = true
    } else {
        document.querySelector("header").classList.remove("menu")
        menuMode = false
    }
}