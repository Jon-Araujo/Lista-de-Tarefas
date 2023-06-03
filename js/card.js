export function mostraCard() {
    if (localStorage.cards) {
        var lista = JSON.parse(localStorage.getItem('cards'));
    } else {
        var lista = [];
    }
    for (let i = 0; i < lista.length; i++) {
        card(lista[i][0], lista[i][1], lista[i][2])
    }
};

export function card(titulo, descricao, prazo) {
    document.querySelector('.cards').innerHTML +=
        `
    <article class="card">
        <div>
            <h3>${titulo}</h3>
            <button class="btn-exclui">X</button>
        </div>
        <p class="descricao-card">Descrição: </br>${descricao}</p>
        <div>
            <p>Prazo:${prazo}</p>
            <p>Prioridade: Tranquila</p>
        </div>
        <button class="btn-realizada">Tarefa realizada<span class="material-symbols-outlined">check_circle</span></button>
    </article>
    `
    btnExclui();
    btnRealizado(titulo, descricao, prazo)
};

function btnExclui() {
    const btn = document.querySelectorAll('.btn-exclui');
    const card = document.querySelectorAll('.card');
    var lista = JSON.parse(localStorage.getItem('cards'));

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            card[i].remove();
            lista.splice(i, 1)
            localStorage.cards = JSON.stringify(lista);
        })
    }
};

function btnRealizado(titulo, descricao, prazo) {
    const btn = document.querySelectorAll('.btn-realizada');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            titulo.style.textDecoration = lineThrough;
            descricao.style.textDecoration = lineThrough;
            prazo.style.textDecoration = lineThrough;
        })
    }
}
