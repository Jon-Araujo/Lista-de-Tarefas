export function mostraCard() {
    if (localStorage.cards) {
        var lista = JSON.parse(localStorage.getItem('cards'));
    } else {
        var lista = [];
    }
    for (let i = 0; i < lista.length; i++) {
        card(lista[i][0], lista[i][1], lista[i][2]);
    }
};

export function card(titulo, descricao, prazo) {
    document.querySelector('.cards').innerHTML +=
        `
    <article class="card">
    <h3 class="titulo-card">${titulo}</h3>
    <button class="btn-exclui">X</button>
        <p class="descricao-card">Descrição: </br>${descricao}</p>
        <div>
            <p class="prazo-card">Prazo:${prazo}</p>
            <p class="prioridade-card">Prioridade: Tranquila</p>
        </div>
        <button class="btn-realizada">Tarefa realizada<span class="material-symbols-outlined">check_circle</span></button>
    </article>
    `;
    btnExclui();
    btnRealizado();
};

function btnExclui() {
    const btn = document.querySelectorAll('.btn-exclui');
    const card = document.querySelectorAll('.card');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            var lista = JSON.parse(localStorage.getItem('cards'));
            card[i].remove();
            lista.splice(i, 1)
            localStorage.cards = JSON.stringify(lista);
        })
    }
};

function btnRealizado() {
    const btn = document.querySelectorAll('.btn-realizada');
    const titulo = document.querySelectorAll('.titulo-card');
    const descricao = document.querySelectorAll('.descricao-card');
    const prazo = document.querySelectorAll('.prazo-card');
    const prioridade = document.querySelectorAll('.prioridade-card');
    const cards = document.querySelectorAll('.card');

    var lista = JSON.parse(localStorage.getItem('cards'));

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            // finalizadasEstilos(titulo, descricao, prazo, prioridade, cards, btn, i);
            titulo[i].style.textDecoration = "line-through";
            descricao[i].style.textDecoration = "line-through";
            prazo[i].style.textDecoration = "line-through";
            prioridade[i].style.textDecoration = "line-through";
            cards[i].style.opacity = "0.8";
            btn[i].style.cursor = "not-allowed";
            btn[i].disabled = true;

            if (lista[i][3] !== 'realizada') {
                lista[i].push('realizada');
            }
            localStorage.cards = JSON.stringify(lista);
        })
    }
};

function finalizadasEstilos(titulo, descricao, prazo, prioridade, card, btn) {
    titulo[i].style.textDecoration = "line-through";
    descricao[i].style.textDecoration = "line-through";
    prazo[i].style.textDecoration = "line-through";
    prioridade[i].style.textDecoration = "line-through";
    card[i].style.opacity = "0.8";
    btn[i].style.cursor = "not-allowed";
    btn[i].disabled = true;
}
