// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

"use strict";

let amigos = [];
let inputNombreAmigo = document.querySelector("#amigo");
let ulAmigos = document.querySelector("#listaAmigos");
let ulResultado = document.querySelector("#resultado");
let amigoSorteado = "";

inputNombreAmigo.focus();

function validarEntrada() {
  let nombreAmigo = inputNombreAmigo.value.trim().replace(/  +/g, " ");
  if (nombreAmigo == "") {
    alert("Por favor, inserte un nombre.");
    return;
  } else {
    amigos.push(nombreAmigo);
  }
}

function agregarAmigo() {
  validarEntrada();
  vaciarInput();
  actualizarLista();
}

function vaciarInput() {
  inputNombreAmigo.value = "";
  inputNombreAmigo.focus();
}

function actualizarLista() {
  ulAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let liItem = document.createElement("li");
    liItem.innerHTML = amigos[i];
    ulAmigos.appendChild(liItem);
  }
}

function validarLista() {
  if (amigos.length == 0) {
    alert("No hay amigos para sortear.");
    return;
  }
}

function generarAleatorio() {
  let indice = Math.floor(Math.random() * amigos.length);
  return indice;
}

function sortearAmigo() {
  if(amigoSorteado == ""){
    validarLista();
    amigoSorteado = amigos[generarAleatorio()];
    ulAmigos.innerHTML = "";
    ulResultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    amigos = [];
    return;
  } else {
    alert("El Amigo secreto ya ha sido sorteado.");
  }
}
