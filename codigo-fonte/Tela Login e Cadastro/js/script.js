// script.js

// URL da API JSONServer
const apiUrl = 'https://daniel--danielarmond.repl.co/usuarios'; 

const users = [];

document.getElementById("create-account-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;

    // Criação de um objeto de usuário
    const user = {
        username: username,
        email: email,
        password: password,
    };

    // Adiciona o usuário à lista de usuários (simulando um "Create")
    users.push(user);

    // Limpa os campos após o cadastro
    document.getElementById("username").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-password").value = "";

    // Exibe uma mensagem de sucesso (poderia ser uma janela/modal)
    alert("Conta criada com sucesso!");
});
