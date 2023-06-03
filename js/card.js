const titulo = document.getElementById('nova-tarefa');
const descricao = document.getElementById('input-descricao');
const prazo = document.getElementById('input-prazo');
const listaCards = document.querySelector('.cards');

export function adicionaCard() {
    listaCards.innerHTML += 
    `
    <article class="card">
        <div>
            <h3>${titulo.value}</h3>
            <button>X</button>
        </div>
        <p class="descricao-card">Descrição: </br>${descricao.value}</p>
        <div>
            <p>Prazo:${prazo.value}</p>
            <p>Prioridade: Tranquila</p>
        </div>
        <button>Tarefa realizada<span class="material-symbols-outlined">check_circle</span></button>
    </article>
    `
    titulo.value = '';
    descricao.value = '';
    prazo.value = '';
};
