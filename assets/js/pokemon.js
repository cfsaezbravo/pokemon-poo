function Pokemon(nombre,color, vida, poderDeAtaque){
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

var Pikachu = new Pokemon("Pikachu","amarillo",500,50);
var Charmander = new Pokemon("Charmander", "rojo", 1000,100);

Pikachu.atacar(Charmander);

document.write(Charmander.vida);