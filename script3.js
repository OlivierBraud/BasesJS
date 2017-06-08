///////////////////////////////////////////////////////////////////////////////////////////////////
// Exemple de code simple

console.log("*************************************************************************************");
console.log("****** RACINES POLYNOME 2e DEG ******");
console.log("*************************************************************************************");

function calculerRacinesPolynome2(a, b, c){
	// calcul du delta
	var delta = b * b - 4 * a * c;
	var resultat;
	
	// En fonction de la valeur de delta, on retourne soit rien, soit deux racines, soit une racine
	if(delta < 0){
		// en javascript "null" est utilisé pour indiquer spécifiquement qu'une variable n'a pas de valeur
		// au contraire de "undefined" qui signifie qu'une variable n'a jamais été définie ou qu'elle n'existe pas
		resultat = null;
	} else if(delta > 0){
		var racineDelta = Math.sqrt(delta);
		var deuxA = 2 * a;
		
		var x1 = (-b - racineDelta) / deuxA;
		var x2 = (-b + racineDelta) / deuxA;
		resultat = [x1, x2];
	} else{
		resultat = -b / (2 * a)
	}
	
	return resultat;
}

console.log("3 X²-5X+2");
console.log(calculerRacinesPolynome2(3,-5,2));
console.log("9X²-162X+729");
console.log(calculerRacinesPolynome2(9,-162,729));
console.log("9X²+9X+9");
console.log(calculerRacinesPolynome2(9,9,9));

console.log("*************************************************************************************");
console.log("****** MAX TABLEAU ******");
console.log("*************************************************************************************");

function maxTableau(tab){
	// Number.MAX_VALUE est la valeur la plus grande possible pour les nombres en JS
	// Si on prend en compte les négatifs, la valeur la plus petite est -Number.MAX_VALUE
	var currentMax = -Number.MAX_VALUE;
	
	// Parcours du tableau
	for(var i=0; i< tab.length; i++){
		// si l'élément courant du tableau est supérieur au max, alors le max devient l'élément courant du tableau
		if(tab[i] > currentMax){
			currentMax = tab[i];
		}
	}
	
	return currentMax;
}
console.log("max : " +[-3,-5,2]);
console.log(maxTableau([-3,-5,2]));
console.log("max : " +[-9,-162.54,-729.654]);
console.log(maxTableau([-9,-162.54,-729.654]));
console.log("max : " +[8,8,8]);
console.log(maxTableau([8,8,8]));