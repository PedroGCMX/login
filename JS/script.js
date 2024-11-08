function login() {
    // Usuário e senha predefinidos
    const user1 = "pedro";
    const pass1 = "1234";

    const user2 = "tais";
    const pass2 = "1234";
  
    // Obtendo os valores dos inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
  
    // Verifica se as credenciais estão corretas
    if (username === user1 && password === pass1 || username === user2 && password === pass2) {
      messageDiv.textContent = "Login bem-sucedido!";
      messageDiv.className = "message success";
      window.location.href = 'home.html';
      
    } else {
      messageDiv.textContent = "Usuário ou senha incorretos!";
      messageDiv.className = "message error";
    }
  }
  
  