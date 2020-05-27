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
    var genero = "";

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = "Homem"
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'img/criancamenino.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'img/jovemhomem.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'img/homem.png')
      } else {
        // idoso
        img.setAttribute('src', 'img/idosohomem.png')
      }
    } else {
      genero = "Mulher"
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'img/criancamenina.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'img/jovemmulher.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'img/mulher.png')
      } else {
        // idoso
        img.setAttribute('src', 'img/idosomulher.png')
      }

    }

    res.style.textAlign = 'center' //formatação de estilo pelo JS
    res.innerHTML = `Detectamos ${genero}, com idade ${idade} anos`;
    res.appendChild(img)
  }
}
