// Função de envio de link mágico
function sendMagicLink(email) {
    const adminEmail = document.getElementById('adminEmail');
    const loginMessage = document.getElementById('loginMessage');

    // Validação do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage('Por favor, insira um e-mail válido.');
        return;
    }

    // Lógica para envio do link mágico
    // ... (lógica de envio)

    showMessage('Um link mágico foi enviado para o seu e-mail!');
}