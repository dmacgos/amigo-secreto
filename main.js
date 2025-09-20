let listaDeAmigos = [];
let listaNomeSorteados = [];

function adicionarAmigo() {

    let botao =  document.getElementById('amigo').value
    if(botao.trim()==""){
        alert("Por favor, insira um nome.");
    } else{
        
        console.log(botao);
        listaDeAmigos.push(botao);
        console.log(listaDeAmigos);
        exibirTextoNaTela(botao);
        document.getElementById('amigo').value = "";
    }

}

function exibirTextoNaTela(texto) {
    let nomes =  document.getElementById('listaAmigos');
    nomes.innerHTML += `<li>${texto}</li>`;

}
function sortearAmigo() {
    let numeroSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigo = listaDeAmigos[numeroSorteado];
    if(listaDeAmigos.length == 0){
        alert("Adicione amigos para sortear!");
        return;
    }
    
        if(listaNomeSorteados.includes(amigo)){
            sortearAmigo();}
    
    else {

    document.getElementById('resultado').innerHTML = `O amigo secreto é: ${amigo}`;
        listaNomeSorteados.push(amigo);
        
        if(listaNomeSorteados.length == listaDeAmigos.length){
            
            listaDeAmigos = [];
        listaNomeSorteados = [];
        document.getElementById('listaAmigos').innerHTML = "";

        }

    }
}