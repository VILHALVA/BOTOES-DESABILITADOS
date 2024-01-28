const nameInput = document.getElementById('name'); // Captura o elemento de entrada de nome
const ageInput = document.getElementById('age'); // Captura o elemento de entrada de idade
const exibirButton = document.getElementById('exibir'); // Captura o botão de exibição
const limparButton = document.getElementById('limpar'); // Captura o botão de limpeza
const resDiv = document.getElementById('res'); // Captura a div de resultado

// Adiciona listeners de evento para entrada de nome e idade
nameInput.addEventListener('input', validateInputs);
ageInput.addEventListener('input', validateInputs);

// Função para validar os campos de entrada e atualizar o estado dos botões
function validateInputs() {
    const containsNumbers = /\d/.test(nameInput.value);
    
    // Verificar se ambos os campos estão preenchidos
    const isNameFilled = nameInput.value.trim() !== '';
    const isAgeFilled = ageInput.value.trim() !== '';
    
    // Desabilitar o botão de exibição se houver números no campo de nome ou se um dos campos estiver vazio
    exibirButton.disabled = containsNumbers || !isNameFilled || !isAgeFilled;
    
    // Habilitar o botão de limpar se ambos os campos estiverem preenchidos
    limparButton.disabled = !isNameFilled || !isAgeFilled;
    
    // Atualizar o estado dos botões
    exibirButton.classList.toggle('enabled', !exibirButton.disabled);
    limparButton.classList.toggle('enabled', !limparButton.disabled);
}    

// Listener de evento para o botão de exibição
exibirButton.addEventListener('click', function() {
    if (nameInput.value && ageInput.value) {
        const nomeParagrafo = document.createElement('p');
        nomeParagrafo.textContent = `❇️NOME -> ${nameInput.value}`;
        
        const idadeParagrafo = document.createElement('p');
        idadeParagrafo.textContent = `❇️IDADE -> ${ageInput.value}`;
        
        resDiv.appendChild(nomeParagrafo);
        resDiv.appendChild(idadeParagrafo);
        
        resDiv.style.display = 'block';

        // Desabilita os campos de entrada e o botão de exibição
        document.getElementById('name').disabled = true;
        document.getElementById('age').disabled = true;
        document.getElementById('exibir').disabled = true; 
        nameInput.style.color = '#444'; // Altera a cor do texto do campo de nome
        ageInput.style.color = '#444'; // Altera a cor do texto do campo de idade
    }
});    

// Listener de evento para o botão de limpeza
limparButton.addEventListener('click', function() {
    nameInput.value = '';
    ageInput.value = '';
    resDiv.textContent = '';
    resDiv.style.display = 'none';
    validateInputs();

    // Habilita os campos de entrada e restaura a cor do texto
    document.getElementById('name').disabled = false;
    document.getElementById('age').disabled = false;
    nameInput.style.color = '#fff'; // Restaura a cor do texto do campo de nome
    ageInput.style.color = '#fff'; // Restaura a cor do texto do campo de idade
});
