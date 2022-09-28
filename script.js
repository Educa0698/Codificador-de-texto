
var input1 = document.querySelector('textarea#txt-area1');
var input2 = document.querySelector('textarea#txt-area2');
var message = document.getElementById("msg")

var button1 = document.querySelector('button.btn-1');
button1.onclick = encrypt;

var button2 = document.querySelector('button.btn-2');
button2.onclick = decrypt;

var button3 = document.querySelector('button.btn-3');
button3.onclick = limpiar;



document.getElementById('none').innerHTML = '';
input1.focus();

// Funcion para encriptar//
function encrypt() {
    
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">c</h2>';
        input1.focus();
    } else {
        //limpiar el area de texto 2(desencriptar)//
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';

        //claves para encriptar 
        var text = input1.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('txt-area2').innerHTML = `${txt}`;
       
        // El botón Copiar se muestra en la pantalla cuando se llama a la función cifrar()// 
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
       
    }
}
// función descifrar el texto ingresado por el usuario si el valor no está vacío//
function decrypt() {
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = ' <h2 id="none">¡Ningun mensaje encontrado!</h2>';
        document.querySelector('img.icone').style.display;
        input1.focus();
    } else {
        //Limpia el area de texto 2//
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('txt-area1').innerHTML = '';

        //claves para desencriptar 
        var text = input1.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        // txt = txt.replace(/[áãàâªäåæ]/,"a");
        // txt = txt.replace(/[éêèęėēë]/,"e");
        // txt = txt.replace(/[íîìïi]/,"i");
        // txt = txt.replace(/ç/,"c");

        document.getElementById('txt-area2').innerHTML = `${txt}`;
     
        // El botón Copiar se muestra en la pantalla cuando se llama a la función "cifrar ()"//
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
    }
}

function copy() {
    document.querySelector('#txt-area2').select();
    document.execCommand('copy');
    // document.execCommand('cut');
    message.innerHTML = "¡El texto copiado ya está en el portapapeles!";
    document.querySelector("#txt-area1").value = "";
    // input1.focus();
    // input2.value = "";
}

function limpiar(){
    document.querySelector("#txt-area1").value = "";

}



