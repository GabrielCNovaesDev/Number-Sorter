
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    let quantidadeNumeros = ate - de;

    if(de > ate){
        alert("Verifique se os intervalos numéricos estão corretos! (O segundo campo deve ser menor que o terceiro)");
        return ; // esse return vazio serve para que o código seja interrompido
    }

    for(let i = 0;i < quantidade; i++){
        numero = obterNumeroAleatorio(de,ate); // não declarar variaveis dentro do loop

        if(quantidadeNumeros < sorteados.length){
            alert("Coloque um intervalo de numeros maior!");
            return ;
        }else{
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de,ate) // dentro do while eu posso armazenar variaveis
            }
            sorteados.push(numero);
        }      
    }

    exibirNumerosSorteados(sorteados);
    alterarStatusBotao();
}

function exibirNumerosSorteados(array){ 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${array}</label>`;
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; // função geradora de numeros aleatorios
}

function limparCampo(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar(){
    limparCampo();
    alterarStatusBotao();
    
}
