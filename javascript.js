function encripteishon() {
    var textoAEncriptar = document.getElementById("aEncriptar").value.toString().trim().toLowerCase();
    textoAEncriptar = textoAEncriptar.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    /* var textoAEncriptar = document.getElementById("aEncriptar").value.toString().replace('enter', "e").replace('imes', "i").replace('ai', "a").replace('ober', "o").replace('ufat', "u"); */

    document.getElementById("txtEncriptado").value = textoAEncriptar;
    updateBg();
}

function desencripteishon() {
    var textoAEncriptar = document.getElementById("aEncriptar").value.toString().trim().toLowerCase();
    textoAEncriptar = textoAEncriptar.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById("txtEncriptado").value = textoAEncriptar;
    updateBg();
}

function copiarTxt() {
    var elemento = document.getElementById('txtEncriptado');
    var textoDerecha = elemento.value;
    elemento.value = null;
    document.getElementById('aEncriptar').value = textoDerecha;
    updateBg();
}

function updateBg() {
    var element = document.getElementById('txtEncriptado');
    var hasText = element.value;
    if (hasText || hasText.length > 0) {
        element.classList.remove("special-bg");
    } else {
        element.classList.add("special-bg");
    }
}