// login.js
//function login() {
   // var username = document.getElementById('username').value;
    //var password = document.getElementById('user-password').value;

    // Recupera usuários cadastrados do localStorage
    //var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se as credenciais estão corretas
    //var usuarioValido = usuariosCadastrados.some(function(user) {
      //  return user.username === username && user.password === password;
    //});

    //if (usuarioValido) {
      //  alert('Login bem-sucedido!');
       // window.location.href = '../Home_Page/home.html';
    //} else {
      //  alert('Usuário ou senha incorretos. Tente novamente.');
    //}
//}


    function loginRedirect() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('user-password').value;

        // Verifica se os campos de usuário e senha estão preenchidos
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Redireciona para a página home
            window.location.href = '../Home_Page/home.html';
        }
    }

