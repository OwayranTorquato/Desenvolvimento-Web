// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('tabuadaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const numero = parseInt(document.getElementById('numero').value); // Obtém o número digitado pelo usuário

    // Verifica se o número é um inteiro válido
    if (!Number.isInteger(numero)) {
        alert('Por favor, insira um número inteiro válido.'); // Exibe uma mensagem de erro se o número não for válido
        return;
    }

    let tabuadaHTML = '<h2>Tabuada do ' + numero + '</h2><table>'; // Cria o cabeçalho da tabuada
    for (let i = 1; i <= 10; i++) { // Loop de 1 a 10 para gerar a tabuada
        tabuadaHTML += '<tr><td>' + numero + ' x ' + i + '</td><td>=</td><td>' + (numero * i) + '</td></tr>'; // Adiciona uma linha à tabuada
    }
    tabuadaHTML += '</table>'; // Fecha a tabela
    document.getElementById('tabuada').innerHTML = tabuadaHTML; // Insere a tabuada na página
});
