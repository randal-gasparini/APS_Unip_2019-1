// Verificação Para Abrir E Fechar O sideMenu

function menuFunction() {

	if (document.getElementById("divMenu").value == "aberto") {

		document.getElementById("mySidenav").style.width = "0";	
  		document.getElementById("divMenu").value = "fechado";

  		mudarBarras(aBtnMenu);

	}else {

		document.getElementById("mySidenav").style.width = "250px";
  		document.getElementById("divMenu").value = "aberto";

  		mudarBarras(aBtnMenu);

	}

}

// Fechar O sideMenu Clicando Fora Do "X"

function closeSideNav() {

	if (document.getElementById("divMenu").value == "aberto") {

		document.getElementById("mySidenav").style.width = "0";	
  		document.getElementById("divMenu").value = "fechado";

  		mudarBarras(aBtnMenu);

	}

}

// Transformar As Barras Do sideMenu Para "X"

function mudarBarras(aBtnMenu) {

	aBtnMenu.classList.toggle("mudar");

}

// Verificação De Largura Da Janela (Para Esconder O sideMenu)

function tamanhoJanela(){

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if (width >= 767 && document.getElementById("divMenu").value == "aberto" || width >= 767) {

  	document.getElementById("mySidenav").style.width = "0";

  	if (document.getElementById("divMenu").value == "aberto") {

		document.getElementById("mySidenav").style.width = "0";	
  		document.getElementById("divMenu").value = "fechado";

  		mudarBarras(aBtnMenu);

	}

  }

};

tamanhoJanela();

window.addEventListener('resize', function(){

	tamanhoJanela();

});



