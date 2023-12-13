
//barra alfabetica
document.addEventListener('DOMContentLoaded', function () {
    const alphabetNav = document.getElementById('alphabet-nav');

    
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const letterElement = document.createElement('div');
        letterElement.className = 'alphabet-letter';
        letterElement.textContent = letter;

       
        letterElement.addEventListener('click', function () {
           
            alert(`Filtrar por letra: ${letter}`);
        });

        alphabetNav.appendChild(letterElement);
    }
});

//fim barra alfabetica

//banner botoes
// Função para alternar entre as categorias
function changeCategory(category) {
    
    const buttons = document.querySelectorAll('#category-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    
    document.getElementById(`${category}-btn`).classList.add('active');
}

function addEntertainment() {
    const title = document.getElementById('title').value;
    const category = document.querySelector('#category-buttons button.active').innerText;

   
    console.log(`Título: ${title}, Categoria: ${category}`);

   
    document.getElementById('title').value = '';
}

//fim banner botoes