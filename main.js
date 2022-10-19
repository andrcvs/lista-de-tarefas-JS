    import BotaoConclui from "./componentes/cocluiTarefa.js";
    import BotaoDeleta from "./componentes/deletaTarefa.js";

    const criarTarefa = (evento) => {

        evento.preventDefault()

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');

        const conteudo = `<p class= "content">${valor}</p>`;  //aplicação template string

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);
        input.value = ""; // limpa o valor do input
    }

    const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa);

