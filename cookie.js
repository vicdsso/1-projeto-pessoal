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
