function Pokemon(nombre,color,vida,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + "y soy de color: " + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

function pelea(poke1, poke2){
	var llamarPokemon1 = document.getElementById("Pokemon1").value;
	var llamarPokemon2 = document.getElementById("Pokemon2").value;

	var pokemon1 = new Pokemon(llamarPokemon1, "amarillo", 100, 20);
	var pokemon2 = new Pokemon(llamarPokemon2, "rojo", 200, 40);

	pokemon1.atacar(pokemon2);

	var pelea = document.getElementsByClassName("pokemones");

	alert(pokemon1.nombre + " atacó a " + pokemon2.nombre + ". El nivel de vida de " + pokemon2.nombre + " quedó en: " + pokemon2.vida);
}


