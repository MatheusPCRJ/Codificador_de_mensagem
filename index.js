let entrada = document.querySelector('#entradaMensagem');
let saida = document.querySelector('#saidaMensagem')
let criptografar = document.querySelector('#btn-criptografar-PCRJ')
let descriptografar = document.querySelector('#btn-descriptografar-PCRJ')
let letraA = "a"
let letraE = "e"
let letraI = "i"
let letraO = "o"
let letraU = "u"


let consoantes = ["a", "e", "i", "o", "u"];

function codifica() {
  for (let i = 0; i <= consoantes.length; i++) {
    let entradaDosValores = entrada.value[i];
    if(entradaDosValores == consoantes[i]) {
      let substituindo = entradaDosValores.replaceAll("a", "1");
      
      saida.value = substituindo
    }
  }
  
}


criptografar.onclick = codifica;
