/* funcion ocultar imagen*/
function ocultar_imagen() {
    let img1 = document.getElementById('hacker');
    let img2 = document.getElementById('encriptado');

    if (img1.style.visibility == "visible" && img2.style.visibility == "visible" ) {
        img1.style.visibility = "hidden"
        img2.style.visibility = "visible"
    } else{
        img1.style.visibility = "hidden"
        img2.style.visibility = "visible"
    }
}

/* ocultar imagen 2 */
function ocultar_imagen_2() {
    let img = document.getElementById('encriptado');
    let img3 = document.getElementById('desencriptado');
    let imgh = document.getElementById('hacker');
    
    if (img.style.visibility == "visible" && img3.style.visibility == "visible" && imgh.style.visibility == "visible" ) {
          img.style.visibility = "hidden"
          img3.style.visibility = "visible"
          imgh.style.visibility = "hidden"
    } else {
        img.style.visibility = "hidden"
        img3.style.visibility = "visible"
        imgh.style.visibility = "hidden"
    }
}

/* restablecer imagen */
function restablecer() {
    let img1 = document.getElementById('hacker');

    if (img1.style.visibility == "hidden") {
        img1.style.visibility = "visible"
    } else {
         img1.style.visibility = "visible"
    }
}

/* funcion encriptar texto */
function encriptar() {
    let texto = document.getElementById("textarea1").value;
    let titulo = document.getElementById("titulo_mensaje");
    let resultado =document.getElementById("resultado");
    let texto_cifrado = texto
.replace(/e/ig, "enter")   
.replace(/i/ig, "imes")
.replace(/a/ig, "ai")
.replace(/o/ig, "ober")
.replace(/u/ig, "ufat");

if (texto.length != 0) {
    document.getElementById("textarea1").value = texto;
    document.getElementById("resultado").value = texto_cifrado;
    document.getElementById("titulo_mensaje").innerHTML = 'texto encriptado con exito!!';
}  else{
    alert('dedes ingresar algun texto');
} if (texto.length != 0) {
    ocultar_imagen();
}
}

/* funcion desencriptar texto */
function desencriptar() {
    let texto = document.getElementById("textarea1").value;
    let titulo = document.getElementById("titulo_mensaje");
    let resultado =document.getElementById("resultado");
    let texto_cifrado = texto
.replace(/enter/ig, "e")   
.replace(/imes/ig, "i")
.replace(/ai/ig, "a")
.replace(/ober/ig, "o")
.replace(/ufat/ig, "u");

if (texto.length != 0) {
    document.getElementById("textarea1").value = texto;
    document.getElementById("resultado").value = texto_cifrado;
    document.getElementById("titulo_mensaje").innerHTML = 'texto desencriptado con exito!!';
}  else{
    alert('dedes ingresar algun texto');
} if (texto.length != 0) {
    ocultar_imagen_2();
}
}

/* funcion copiar texto de textarea1 */
function copiar() {
    var copiart = document.getElementById("textarea1");
    copiart.select();
    document.execCommand("copy");
}

/* funcion copiar texto de resultado */
function copiarR() {
    var copiarr = document.getElementById("resultado");
    copiarr.select();
    document.execCommand("copy");
}

//funcion borrar.
function borrar(){
    document.getElementById("textarea1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("titulo_mensaje").innerHTML = 'ningun mensaje fue encontrado';
    restablecer();
}