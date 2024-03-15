//mostar resultado
var resu = document.getElementsByClassName("resultado");

//pegar evento do botao
var btnMedia = document.getElementById("media");
var btnSoma = document.getElementById("soma");


//https://pt.stackoverflow.com/questions/21860/como-pegar-input-usando-html-e-javascript
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

//pegar valores do input do usuario
function pegarValor(){
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var notas = {
    nota01 : nota1,
    nota02 : nota2,
    nota03 : nota3
  };
  return notas;
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
// calculo da media e soma com paradigma da oritentação a objeto
class Notas {
  constructor(nota1, nota2, nota3) {
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3  = nota3;
  }
  media(){
   var media =  (this.nota1+this.nota2+this.nota3)/3;
   return media;
  }
  soma(){
    var soma = this.nota1 + this.nota2+ this.nota3;
    return soma;
  }
}

// calcular media da nota
function calculaMedia(){
  var notas = pegarValor();
  const notaMedia = new Notas(notas.nota01,notas.nota02,notas.nota03); 
  var media = notaMedia.media();// teste media
  //console.log(notas[0],notas[1],notas[2]);
 // console.log(media);
  //aprovacaoValidar(media);
  alert(`Sua media das notas é ${media.toFixed(1)}, logo você esta ${aprovacaoValidar(media)}.`);
}

//calcular soma da nota
function calculaSoma(){
  var notas = pegarValor();
  const notaSoma = new Notas(notas.nota01,notas.nota02,notas.nota03); 
  //console.log(notaSoma.soma());// teste soma
  //console.log(notas[0],notas[1],notas[2]);
  alert(`A soma das notas é ${notaSoma.soma()}.`);
}

//função que verifica aprovação
function aprovacaoValidar(minhaNota){
/*  
if ( minhaNota >= 6){
  //console.log("Aluno aprovado");
  var a = "Aprovado"
  return a
}else{
 // console.log("Aluno reprovado");
  var r = "Reprovado"
  return r
}
 
 */
  
return  minhaNota >= 6? "aprovado" : "reprovado";
  
  
}

// evento de click do botao e pegar valores
//fazer media
btnMedia.addEventListener("click", (event) => {
  console.log("clicou media");
  calculaMedia();
  
});

//fazer soma
btnSoma.addEventListener("click", (event) => {
  console.log("clicou soma");
  calculaSoma();
  
});