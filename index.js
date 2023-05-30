let entrada = document.querySelector('#entradaMensagem');
let saida = document.querySelector('#saidaMensagem');
let criptografar = document.querySelector('#btn-criptografar-PCRJ');
let descriptografar = document.querySelector('#btn-descriptografar-PCRJ');
let btnCopiar = document.querySelector('#btn__copiar__PCRJ');
let sumirDiv = document.querySelector('#sumirDiv__PCRJ');
saida.style.display = "none";

function codifica() {
  let mensagem = entrada.value;

  let entradaDosValores = mensagem.replace(/a/i, "ai");
  entradaDosValores = entradaDosValores.replace(/e/i, "enter");
  entradaDosValores = entradaDosValores.replace(/i/i, "imes");
  entradaDosValores = entradaDosValores.replace(/o/i, "ober");
  entradaDosValores = entradaDosValores.replace(/u/i, "ufat");

  sumirDiv.style.display = "none";
  saida.style.display = "block";

  return saida.value = saida.innerHTML = entradaDosValores;
};

function decodifica() {
  let mensagem = entrada.value;

  let entradaDosValores = mensagem.replace(/ai/i, "a");
  entradaDosValores = entradaDosValores.replace(/enter/i, "e");
  entradaDosValores = entradaDosValores.replace(/imes/i, "i");
  entradaDosValores = entradaDosValores.replace(/ober/i, "o");
  entradaDosValores = entradaDosValores.replace(/ufat/i, "u");

  return saida.value = saida.innerHTML = entradaDosValores;
};

function copiar() {
  saida.select();
  navigator.clipboard.writeText(saida.value);
}

criptografar.onclick = codifica;
descriptografar.onclick = decodifica;
btnCopiar.onclick = copiar;
