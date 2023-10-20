// Codigo para quando o usuario clicar em alguma categoria, seja filtrado por item
const categoriaButtons = document.querySelectorAll('.category-button');
const categoriaBlocks = document.querySelectorAll('.category-block');

categoriaButtons.forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.getAttribute('data-filter');
        categoriaBlocks.forEach(block => {
            const blockCategoria = block.getAttribute('data-category');
            if (categoria === 'all' || categoria === blockCategoria) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    });
});
