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

////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Função para marcar um filme como assistido
    function marcarComoAssistido(button, filme) {
        button.textContent = "Assistido";
        button.disabled = true;
        
        // Armazena o filme assistido no armazenamento local
        const filmesAssistidos = JSON.parse(localStorage.getItem("filmesAssistidos")) || [];
        filmesAssistidos.push(filme);
        localStorage.setItem("filmesAssistidos", JSON.stringify(filmesAssistidos));
    }

    // Função para desmarcar todos os filmes
    function desmarcarTodos() {
        const buttons = document.querySelectorAll("button[onclick^='marcarComoAssistido']");
        buttons.forEach(button => {
            button.textContent = "Marcar como Assistido";
            button.disabled = false;
        });

        // Limpa a lista de filmes assistidos no armazenamento local
        localStorage.removeItem("filmesAssistidos");
    }

    // Função para inicializar os filmes assistidos quando a página é carregada
    function inicializarFilmesAssistidos() {
        const filmesAssistidos = JSON.parse(localStorage.getItem("filmesAssistidos")) || [];
        filmesAssistidos.forEach(filme => {
            const button = document.querySelector(`button[onclick="marcarComoAssistido(this, '${filme}')"]`);
            if (button) {
                button.textContent = "Assistido";
                button.disabled = true;
            }
        });
    }

    // Chama a função de inicialização quando a página é carregada
    window.addEventListener("load", inicializarFilmesAssistidos);

