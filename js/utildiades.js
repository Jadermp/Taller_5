 
function crearElemento (nombreElemento) {
    return document.createElement(nombreElemento)
}



function crearElementoContexto (nombreElemento, textoElemento) {
    var elemento = crearElemento(nombreElemento);
    var elemetText = document.createTextNode(textoElemento);
    elemento.appendChild(elemetText);
    return elemento;
}

function crearImagen (urlImagen) {
     var img = crearElemento("img");
     img.src = urlImagen;
     return img;
}

function adicionarHijo (padre, hijo) {
    padre.appendChild(hijo);
}


function adicionarBody (elemento) {
      document.body.appendChild(elemento);
}