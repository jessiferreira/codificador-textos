var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function limparTexto() {
    document.getElementById('input-texto').value = '';
    document.getElementById('output').innerHTML = '<img src="/imagens/gato.png" alt="logo-gato">' +
        '<h2>Nenhuma mensagem encontrada!</h2>' +
        '<span>Digite um texto que você deseja criptografar ou descriptografar.</span>';
    document.querySelector('.btn-descriptografar').disabled = true;
    document.querySelector('.btn-limpar').disabled = true;
}

function criptografar() {
    var texto = textInput.value;

    var resultCriptografar = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCriptografar +
        '</textarea>' + '</br><button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

    document.querySelector('.btn-descriptografar').disabled = false;
    document.querySelector('.btn-limpar').disabled = false;
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescriptografar = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "ai")
        .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescriptografar +
        '</textarea>' + '</br><button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

    document.querySelector('.btn-descriptografar').disabled = false;
    document.querySelector('.btn-limpar').disabled = false;
}

function copiar() {
    var textoCopiar = document.getElementById('input-texto');

    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso!");
}