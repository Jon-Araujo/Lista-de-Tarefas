import { card } from "./card.js";

const titulo = document.getElementById('nova-tarefa');
const descricao = document.getElementById('input-descricao');
const prazo = document.getElementById('input-prazo');

export function manipulaDados() {
    if (localStorage.cards) {
        var lista = JSON.parse(localStorage.getItem('cards')); 
    } else {
        var lista = [];
    }

    lista.push([titulo.value, descricao.value, prazo.value]);

    localStorage.cards = JSON.stringify(lista);

    card(titulo.value, descricao.value, prazo.value);
    

    titulo.value = '';
    descricao.value = '';
    prazo.value = '';
};