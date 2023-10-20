document.addEventListener('DOMContentLoaded', function () {
    const generoCheckboxes = document.querySelectorAll('#filtro input[name="genero"]');

    function filtrar() {
        const filmes = document.querySelectorAll('.movie');

        generoCheckboxes.forEach(checkbox => {
            const genero = checkbox.value;
            const filmesDoGenero = document.querySelectorAll(`.movie.${genero}`);

            if (checkbox.checked) {
                filmesDoGenero.forEach(filme => {
                    filme.style.display = 'inline-block';
                });
            } else {
                filmesDoGenero.forEach(filme => {
                    filme.style.display = 'none';
                });
            }
        });
    }

    generoCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filtrar);
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variável para rastrear o estado de exibição dos filmes da trilogia
let filmesTrilogiaVisiveis = false;

// Função para alternar a exibição dos filmes da trilogia
function alternarFilmesTrilogia() {
    // Se os filmes da trilogia estiverem visíveis, oculte-os; caso contrário, mostre-os
    const trilogia = document.getElementById('eastrail177-movies');
    if (filmesTrilogiaVisiveis) {
        trilogia.style.display = 'none';
    } else {
        trilogia.style.display = 'flex';
    }
    filmesTrilogiaVisiveis = !filmesTrilogiaVisiveis; // Inverta o estado
}

// Evento de clique na capa da trilogia
const capaTrilogia = document.querySelector('.trilogy-cover');
capaTrilogia.addEventListener('click', alternarFilmesTrilogia);


// Função para marcar ou desmarcar como assistido e salvar nos cookies
function marcarComoAssistido(button, filme) {
    if (button.textContent === "Marcar como Assistido") {
        button.textContent = "Assistido";
        button.disabled = true;

        // Armazene o filme assistido no localStorage
        adicionarFilmeAssistido(filme);
    } else if (button.textContent === "Assistido") {
        button.textContent = "Marcar como Assistido";
        button.disabled = false;

        // Remova o filme da lista de filmes assistidos no localStorage
        removerFilmeAssistido(filme);
    }
}

// Função para adicionar um filme à lista de filmes assistidos no localStorage
function adicionarFilmeAssistido(filme) {
    const filmesAssistidos = JSON.parse(localStorage.getItem('filmesAssistidos')) || [];
    if (!filmesAssistidos.includes(filme)) {
        filmesAssistidos.push(filme);
        localStorage.setItem('filmesAssistidos', JSON.stringify(filmesAssistidos));
    }
}

// Função para remover um filme da lista de filmes assistidos no localStorage
function removerFilmeAssistido(filme) {
    const filmesAssistidos = JSON.parse(localStorage.getItem('filmesAssistidos')) || [];
    const index = filmesAssistidos.indexOf(filme);
    if (index !== -1) {
        filmesAssistidos.splice(index, 1);
        localStorage.setItem('filmesAssistidos', JSON.stringify(filmesAssistidos));
    }
}

// Carregue filmes assistidos previamente ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const filmesAssistidos = JSON.parse(localStorage.getItem('filmesAssistidos')) || [];
    filmesAssistidos.forEach(filme => {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            if (button.textContent === "Marcar como Assistido" && button.parentElement.querySelector("h3").textContent === filme) {
                button.textContent = "Assistido";
                button.disabled = true;
            }
        });
    });
});

// Função para desmarcar todos os filmes e limpar o localStorage
function desmarcarTodos() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (button.textContent === "Assistido") {
            button.textContent = "Marcar como Assistido";
            button.disabled = false;
        }
    });

    // Limpe o localStorage
    localStorage.removeItem('filmesAssistidos');
}

// Adicione um evento de clique ao botão "Desmarcar Todos"
const desmarcarTodosButton = document.querySelector(".movie button");
desmarcarTodosButton.addEventListener("click", desmarcarTodos);
