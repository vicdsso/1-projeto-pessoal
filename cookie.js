 // Pega o botão
 let mybutton = document.getElementById("myBtn");
    
 // Quando o usuário descer 20px o botão aparece
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // Quando o usuário clicar no botão, sobe a página
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }


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
