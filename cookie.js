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

    // Função para marcar um filme como assistido
    function marcarComoAssistido(button, filme) {
        button.textContent = "Assistido";
        button.disabled = true;

        // Armazena o filme assistido em um cookie
        const filmesAssistidos = getCookie("filmesAssistidos") || [];
        filmesAssistidos.push(filme);
        setCookie("filmesAssistidos", JSON.stringify(filmesAssistidos), 365); // O número 365 define a validade do cookie em dias
    }

    // Função para desmarcar todos os filmes
    function desmarcarTodos() {
        const buttons = document.querySelectorAll("button[onclick^='marcarComoAssistido']");
        buttons.forEach(button => {
            button.textContent = "Marcar como Assistido";
            button.disabled = false;
        });

        // Remove o cookie que armazena os filmes assistidos
        deleteCookie("filmesAssistidos");
    }

    // Função para inicializar os filmes assistidos quando a página é carregada
    function inicializarFilmesAssistidos() {
        const filmesAssistidos = getCookie("filmesAssistidos");
        if (filmesAssistidos) {
            const filmesAssistidosArray = JSON.parse(filmesAssistidos);
            filmesAssistidosArray.forEach(filme => {
                const button = document.querySelector(`button[onclick="marcarComoAssistido(this, '${filme}')"]`);
                if (button) {
                    button.textContent = "Assistido";
                    button.disabled = true;
                }
            });
        }
    }

    // Função para definir um cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + "; path=/";
    }

    // Função para obter o valor de um cookie
    function getCookie(name) {
        const cookieName = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) == 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null;
    }

    // Função para excluir um cookie
    function deleteCookie(name) {
        setCookie(name, "", -1);
    }

    // Chama a função de inicialização quando a página é carregada
    window.addEventListener("load", inicializarFilmesAssistidos);

