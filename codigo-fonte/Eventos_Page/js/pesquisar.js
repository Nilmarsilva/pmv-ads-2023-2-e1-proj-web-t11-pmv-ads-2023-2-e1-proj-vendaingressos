// Os eventos serao filtrados quando o usuario escrever na barra de pesquisa

const campoPesquisa = document.getElementById('search');

campoPesquisa.addEventListener('input', filtrarCategorias);

function filtrarCategorias() {
    const textoPesquisa = campoPesquisa.value.toLowerCase(); 
    const blocosCategoria = document.querySelectorAll('.category-block'); 

    blocosCategoria.forEach((bloco) => {
        const textoCategoria = bloco.innerText.toLowerCase(); 
        if (textoCategoria.includes(textoPesquisa)) {
            bloco.style.display = 'block'; 
        } else {
            bloco.style.display = 'none'; 
        }
    });
}
