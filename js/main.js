async function pesquisaArtista(nomeArtista){

const url = `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(nomeArtista)}&fmt=json`;

const response = await fetch(url);
const dados = await response.json();

if(dados.nomeArtista.length > 0){
    localStorage.setItem("Nome Artista". JSON.stringify(dados.nomeArtista[0]));
}else{
    alert("Artista/ banda não encontrado!!")
}

//console.log("Pesquisa artista")
}

function pesquisaMusica(){
//console.log("Pesquisa musica")

}


















/*
Comentários
encodeURI, pega a variavel, no caso nome, e passa ela como parametro para a api de forma segura
de acordo com que mesmo que o nome tenha espaços, a url seja aceita.
*/