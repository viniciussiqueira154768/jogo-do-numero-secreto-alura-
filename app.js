//array para evitar repetição dos numeros//
let listaDosNumerosSorteados = [];
let numeroLimite = 10;
//estamos aqui transformando o que seria "infinitas" repetições da linha em apenas uma função simplificando//

let numeroSecretp = gerarUmNumeroAleatorio();
    console.log(numeroSecretp);
let tentativas = 1;
//função para substituir o espaço livre no html//
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

//escrever as mensagens inicais//

function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}



//aparecer os textos inicias na tela//

mensagemInicial();


//função para verificar o numero e escrever o total de tentativas, alem das variaveis que usamos para acertar a concordância verbal//
function verificarChute(){
    let chute = document.querySelector('input').value; 
    console.log(chute == numeroSecretp);
    if(chute == numeroSecretp){
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `vc descobriu o numero secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecretp){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        LimparCampo();
    }
}
//função para gerar o numero//
function gerarUmNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeNumerosNaLista = listaDosNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == 3){
        listaDosNumerosSorteados = [];
    }
    if(listaDosNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
    }else{
        listaDosNumerosSorteados.push(numeroEscolhido);
        console.log(listaDosNumerosSorteados);
        return numeroEscolhido;
    }
}

//função para limpar o campo//

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//reiniciar o jogo//

function reiniciarJogo(){
    numeroSecretp = gerarUmNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//escrever as mensagens inicais//

