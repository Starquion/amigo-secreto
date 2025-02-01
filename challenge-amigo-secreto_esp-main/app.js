// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let elementoHTML;

function agregarAmigo(){
    let novoAmigo = document.getElementById('amigo').value;
    if(novoAmigo.trim() !== ""){
        amigos.push(novoAmigo);
        limpiarCampo("amigo");
        actualizarListaAmigos("listaAmigos");
        asignarTextoElemento("resultado","");
    }
    else{
        alert("Ingrese un valor");
    }
}

function limpiarCampo(elemento){
    let input = document.getElementById(elemento);
    input.value = '';
}

function limpiarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos = [];
}

function actualizarListaAmigos(elemento) {
    elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        elementoHTML.appendChild(li);
    })
    return;
}

function asignarTextoElemento(elemento, valor) {
    elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = valor;
    return;
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let numAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numAleatorio];
    let texto = `El amigo secreto sorteado es: ${amigoSorteado}`;
    asignarTextoElemento("resultado", texto);
    limpiarListaAmigos();
    amigos = [];
}
