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

var Pikachu = new Pokemon("Pikachu","amarillo",200,50);
var Charmander = new Pokemon("Charmander", "rojo", 300,100);

var pokemon1 = document.getElementById("Pokemon1");
var pokemon2 = document.getElementById("Pokemon2");

var poke1 = pokemon1.options[pokemon1.selectedIndex].class;
var poke2 = pokemon2.options[pokemon2.selectedIndex].class;

function pelea(poke1, poke2){
	alert("Hola");
}

Pikachu.atacar(Charmander);
console.log("Nueva vida " + Charmander.vida);
