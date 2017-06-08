///////////////////////////////////////////////////////////////////////////////////////////////////
// LES TABLEAUX
console.log("*************************************************************************************");
console.log("****** TABLEAUX ******");
console.log("*************************************************************************************");

// Les tableaux sont un type de variable représentant un liste ordonnée de valeurs.
// Initialiser un tableau vide
var monTableauVide = [];
// Initialiser un tableau avec des nombres, séparées par des virgules
var monTableauNombres = [1, 2.56, 3];
// Initialiser un tableau avec ce qu'on veut :
// Javascript te permet de mettre n'importe quel type de données dans un seul tableau
var monTableauDivers = [1, "mot", [], {}, function test(){}];

// On peut accéder à la valeur à l'intérieur d'un tableau à partir de sa postion (index) dans le tableau
// L'index d'un tableau va de 0..n-1, avec n le nombre d'élément du tableau
var tableau = [10, 8, 9, 56];
console.log(tableau);
console.log("3e élément : ");
console.log(tableau[2]);

// Si on essaye d'accéder à un index qui n'existe pas, la valeur reournée est "undefined"
console.log("7e élément : ");
console.log(tableau[8]);

// On peut récupérer le nombre d'élément d'un tableau avec l'attribut 'length'
console.log(tableau);
console.log("taille du tableau : ")
console.log(tableau.length);

// Contrairement à Java, les tableaux n'ont pas une taille fixe, on peut ajouter ou supprimer un élément
console.log("Ajout de la valeur 8 à la fin du tableau:");
tableau.push(8965.564);
console.log(tableau);

console.log("Suppression de l'élement numéro 3 :");
tableau.splice(2, 1);
console.log(tableau);

// On parcourt les valeur d'un tableau avec un boucle for
console.log("boucle for dans tableau : ")
for(var index = 0; index < tableau.length; index++ ){
	console.log(tableau[index]);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// LES OBJETS

console.log("*************************************************************************************");
console.log("****** OBJETS ******");
console.log("*************************************************************************************");

// Les objets permettent de stocker des données sous forme de paire clef:valeur séparées par des virgules.
// Les valeurs peuvent contenir n'importe quel type de données (nombres, strings, tableaux, objets, fonctions...)
// On les écrit avec le format JSON (javascript object notation)
var monObjet = {
	unNombre : 10,
	uneString: "Chaine de caractère",
	unTableau: [10, 20],
	unObjet: {
		unTableauObjet:[{
			cle1 : 8, 
			cle2 : 10
		}, {
			cle1 : 4, 
			cle2 : 5
		}],
		uneFonctionQuiAjoute: function(param1, param2){
			return param1 + param2;
		}
	}
}
console.log(monObjet);

// On récupère les valeurs à l'intérieur d'un objet comme suit:
console.log("monObjet.unNombre");
console.log(monObjet.unNombre);
console.log("monObjet.unTableau");
console.log(monObjet.unTableau);
console.log("monObjet.unObjet.unTableauObjet[0]");
console.log(monObjet.unObjet.unTableauObjet[0]);
console.log("monObjet.unObjet.uneFonctionQuiAjoute(3,4)");
console.log(monObjet.unObjet.uneFonctionQuiAjoute(3,4));

// Si on tente de récupérer une propriété qui n'existe pas, on obtient "undefined"
console.log("monObjet.unObjet.uneProprieteInexistante");
console.log(monObjet.unObjet.uneProprieteInexistante);