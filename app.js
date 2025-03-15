let amigos = []; 
let amigoSecreto = document.getElementById('listaAmigos');
let adicionarNome = document.getElementById('amigo');
let resultado = document.getElementById('resultado'); 
let botaoReiniciar = document.getElementById('reiniciar'); 

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = adicionarNome.value.trim(); // Remove espaços extras 

    if (nome === '') { // Verifica se o campo está vazio
        alert('Preencha o campo nome.');
        return;
    }

    if (amigos.includes(nome)) { // Verifica se o nome já foi adicionado
        alert('Nome já adicionado.');
        return;
    }

    amigos.push(nome); 
    let novoItem = document.createElement('li'); 
    novoItem.textContent = nome; 
    amigoSecreto.appendChild(novoItem); // Adiciona o nome à lista na interface
    adicionarNome.value = ''; // Limpa o campo de entrada
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há nomes disponíveis para o sorteio
        resultado.innerHTML = "Todos os amigos já foram sorteados";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove e obtém o nome sorteado

    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Exibe o nome sorteado
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigos = []; // Limpa o array de amigos
    amigoSecreto.innerHTML = ''; // Remove os itens da lista na interface
    resultado.innerHTML = ''; // Limpa o resultado do sorteio
}

// Adiciona evento ao botão de reinício
document.getElementById('reiniciar').addEventListener('click', reiniciarSorteio);
