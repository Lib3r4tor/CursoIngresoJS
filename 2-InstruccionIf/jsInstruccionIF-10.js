function mostrar()
{
	var numeroRandom;
	var excelente;
	var aprobo;
	var aproboSegundValor;
	var desaprobado;

	excelente = 9;

	aprobo = 5;
	aproboSegundValor = 8;

	desaprobado = 4;

	numeroRandom = ((Math.random() * (10)) + 1);
	numeroRandom = parseInt(numeroRandom);

	if(numeroRandom>excelente){
		alert(numeroRandom + " Excelente examen.");
	}
	if(numeroRandom>aprobo && numeroRandom<aproboSegundValor){
		alert(numeroRandom + " Aprobado.");
	}
	if(numeroRandom<desaprobado){
		alert(numeroRandom + " Desaprobado.")
	}


}//FIN DE LA FUNCIÓN