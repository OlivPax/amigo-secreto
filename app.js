let amigos = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adicionar").addEventListener("click", adicionarAmigo);
});

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Nome já adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}
