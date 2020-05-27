function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("anonasci");
  var res = document.querySelector("div#res");

  if (fano.value > ano || fano.value.length == 0) {
    window.alert("Verificque os dados e tente novamente");
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade Calculada ${idade} - ${fsex}`;
  }
}
