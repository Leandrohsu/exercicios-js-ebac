document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = 'O formulário é válido. Campo B é maior que Campo A.';
        mensagem.className = 'message success';
    } else {
        mensagem.textContent = 'O formulário é inválido. Campo B deve ser maior que Campo A.';
        mensagem.className = 'message error';
    }
});
