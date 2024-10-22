document.getElementById('captureForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    // Simula envio de dados
    if (name && email) {
        messageElement.textContent = `Obrigado, ${name}! Sua promoção será enviada para ${email}.`;
        messageElement.style.color = '#00ff00';
    } else {
        messageElement.textContent = 'Por favor, preencha todos os campos.';
        messageElement.style.color = '#ff0000';
    }

    // Limpa o formulário
    document.getElementById('captureForm').reset();
});
