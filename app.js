let listaDeNumerosSorteados = [];
let limiteDeValores = 10;
let numeroAleatorio;
let tentativas;
let reiniciar = document.getElementById('reiniciar');
let chutar = document.getElementById('chutar');

function zerarTentativas() {
    return tentativas = 1;
}

function aleatorizarNumero() {
    numeroAleatorio = gerarNumeroAleatorio();
}

function desabilitarBotao(id) {
    id.setAttribute('disabled', true)
}

function habilitarBotao(id) {
    id.removeAttribute('disabled')
}

function exibeTextoNaTela(tag, texto) {
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function comparadorDeCondicoes(cond1, cond2, exp1, exp2) {
    return cond1 > cond2 ? exp1 : exp2
}

function exibirMensagemInicial() {
    exibeTextoNaTela('h1', 'Jogo do número secreto');
    exibeTextoNaTela('p', `Escolha um número entre 1 e ${limiteDeValores}`);   
}

zerarTentativas()
aleatorizarNumero()
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibeTextoNaTela('h1', 'Acertou');

        let palavraTentativa = comparadorDeCondicoes(tentativas, 1, 'tentativas', 'tentativa');
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

        exibeTextoNaTela('p', mensagemTentativas);
        habilitarBotao(reiniciar)
        desabilitarBotao(chutar);
    } else {
        let comparacaoDoChute = comparadorDeCondicoes(chute, numeroAleatorio, 'menor', 'maior')
        
        exibeTextoNaTela('p', `O numero secreto é ${comparacaoDoChute}`)
        
        tentativas++;
        limparCampo();
    }
 


}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeValores + 1);
    quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista == limiteDeValores) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    aleatorizarNumero();
    zerarTentativas();
    exibirMensagemInicial();
    desabilitarBotao(reiniciar);
    habilitarBotao(chutar);
}