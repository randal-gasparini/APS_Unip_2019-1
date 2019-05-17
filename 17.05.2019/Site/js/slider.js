var value = document.getElementById("getImagem").value;

function mudarImagem(x) {

  var value = document.getElementById("getImagem").value;

  if (x == 1) {

    if (value == 1) {

    document.getElementById("imagem").src = "img/imgSlider2.jpg";
    document.getElementById("getImagem").value = 2;

    document.getElementById("descTitle").innerHTML = "Complexo Eólico de Osório";
    document.getElementById("descText").innerHTML = "O maior complexo eólico no Brasil, localizado em RS e formado por 150 aerogeradores de 2MW.";

    }

    if (value == 2) {

      document.getElementById("imagem").src = "img/imgSlider3.jpeg";
      document.getElementById("getImagem").value = 3;

      document.getElementById("descTitle").innerHTML = "Vagas de Emprego";
      document.getElementById("descText").innerHTML = "Parques eólicos podem gerar 24 mil vagas de emprego na Bahia até 2023.";

    }

    if (value == 3) {

      document.getElementById("imagem").src = "img/imgSlider1.jpeg";
      document.getElementById("getImagem").value = 1;

      document.getElementById("descTitle").innerHTML = "Parque Eólico Marítimo";
      document.getElementById("descText").innerHTML = "O maior parque eólico marítimo foi inaugurado por uma empresa dinamarquesa chamada Orsted, atualmente o parque tem um complexo de 87 turbinas.";

    }

  }

  if (x == -1) {

    if (value == 1) {

      document.getElementById("imagem").src = "img/imgSlider3.jpeg";
      document.getElementById("getImagem").value = 3;

      document.getElementById("descTitle").innerHTML = "Vagas de Emprego";
      document.getElementById("descText").innerHTML = "Parques eólicos podem gerar 24 mil vagas de emprego na Bahia até 2023.";

    }

    if (value == 2) {

      document.getElementById("imagem").src = "img/imgSlider1.jpeg";
      document.getElementById("getImagem").value = 1;

      document.getElementById("descTitle").innerHTML = "Parque Eólico Marítimo";
      document.getElementById("descText").innerHTML = "O maior parque eólico marítimo foi inaugurado por uma empresa dinamarquesa chamada Orsted, atualmente o parque tem um complexo de 87 turbinas.";

    }

    if (value == 3) {

      document.getElementById("imagem").src = "img/imgSlider2.jpg";
      document.getElementById("getImagem").value = 2;

      document.getElementById("descTitle").innerHTML = "Complexo Eólico de Osório";
      document.getElementById("descText").innerHTML = "O maior complexo eólico no Brasil, localizado em RS e formado por 150 aerogeradores de 2MW.";

    }

  }

}

setTimeout(mudarImagem(1), 5000);





