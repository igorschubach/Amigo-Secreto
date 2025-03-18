let amigos =[];

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.ariaValueMax.trim();

    if(nome = ""){
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo}` ja está na lista);
        return;
    }

    amigos.push(nomeAmigo);

    inputAmigo.ariaValu = "";
    
    atualizarLista();

}                                                                                             

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length = 0){
        alert("não tem amigos disponíveis para sortear, adicione pelo menos um.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigo[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}