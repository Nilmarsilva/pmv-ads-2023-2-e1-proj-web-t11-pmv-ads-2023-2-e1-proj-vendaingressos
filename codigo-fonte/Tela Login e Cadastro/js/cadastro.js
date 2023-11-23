// cadastro.js
// URL da API JSONServer
const apiUrl = 'https://daniel--danielarmond.repl.co/usuarios'; 

document.getElementById("create-account-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('user-email').value;
    var password = document.getElementById('user-password').value;

    // Verifica se o usuário já existe no localStorage
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioExistente = usuariosCadastrados.find(function(user) {
        return user.username === username;
    });

    if (usuarioExistente) {
        alert('Usuário já cadastrado. Escolha outro nome de usuário.');
    } else {
        // Adiciona o novo usuário aos cadastrados
        usuariosCadastrados.push({ username: username, email: email, password: password });
        localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

        alert('Cadastro realizado com sucesso! Redirecionando para o login...');

        // Redireciona para a tela de login
        window.location.href = './login.html';
    }
});
