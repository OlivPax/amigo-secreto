let amigos = []; // Array para armazenar os nomes dos amigos
let amigoSecreto = document.getElementById('listaAmigos'); // Elemento da lista no HTML
let adicionarNome = document.getElementById('amigo'); // Input para adicionar nomes
let resultado = document.getElementById('resultado'); // Elemento onde será exibido o resultado do sorteio

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = adicionarNome.value.trim(); // Remove espaços extras do input

    if (nome === '') { // Verifica se o campo está vazio
        alert('Preencha o campo nome.');
        return;
    }

    if (amigos.includes(nome)) { // Verifica se o nome já foi adicionado
        alert('Nome já adicionado.');
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    let novoItem = document.createElement('li'); // Cria um novo elemento <li>
    novoItem.textContent = nome; // Define o texto do elemento
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

