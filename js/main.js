import { manipulaDados } from "./manipulaDados.js";
import { mostraCard } from "./card.js";

document.getElementById('btn-inserir').addEventListener("click", manipulaDados);

mostraCard();

var lista = JSON.parse(localStorage.getItem('cards'));
const btn = document.querySelectorAll('.btn-realizada');
const tituloCard = document.querySelectorAll('.titulo-card');
const descricaoCard = document.querySelectorAll('.descricao-card');
const prazoCard = document.querySelectorAll('.prazo-card');
const prioridade = document.querySelectorAll('.prioridade-card');
const cards = document.querySelectorAll('.card');

for (let i = 0; i < lista.length; i++) {
    if (lista[i][3] === 'realizada') {
        // finalizadasEstilos(tituloCard[i], descricaoCard[i], prazoCard[i], prioridade[i], cards[i], btn[i]);
        tituloCard[i].style.textDecoration = "line-through";
        descricaoCard[i].style.textDecoration = "line-through";
        prazoCard[i].style.textDecoration = "line-through";
        prioridade[i].style.textDecoration = "line-through";
        cards[i].style.opacity = "0.8";
        btn[i].style.cursor = "not-allowed";
        btn[i].disabled = true;
    }
}