///////////////////////////////////////////////////////////////////////////////////////////////////
// Pièges de javascript

console.log("****** PIEGES JS ******");

console.log("****** VALEURS TRUTHY/FALSY ******");

// VALEURS TRUTHY/FALSY
// Avec le typage dynamique, JS est en mesure d'évaluer si une expression non booléene est vraie ou fausse
// et ce afin de simplifier la synthaxe dans les conditions if/else
// Le problème, c'est que ce n'est pas forcément instinctif

// Valeurs équivalentes à false:
var varFalse = false;
var varUndefined = undefined;
var varNull = null;
var varEmptyString = "";
var varZero = 0;
var varNaN = NaN;

// Rappel : || est le OU logique
if (varFalse || varUndefined || varNull || varEmptyString || varZero || varNaN) {
    // Ne doit jamais rentrer ici car la condition est toujours fausse
    console.log("Ligne jamais atteinte");
} else {
    console.log("varFalse || varUndefined || varNull || varEmptyString || varZero || varNaN <=> false");
}

// A l'inverse, les valeurs suivantes sont considérées comme "vraies"
var varTrue = true;
var varObject = {};
var varArray = [];
var varNonEmptyString = "Blabla";
var varNonZeroNumber = -0.675;

// Rappel : && est le ET logique
if (varTrue && varObject && varArray && varNonEmptyString && varNonZeroNumber) {
    console.log("varTrue && varObject && varArray && varNonEmptyString && varNonZeroNumber <=> true")
} else {
    // Ne doit jamais rentrer ici car la condition est toujours vraie
    console.log("Ligne jamais atteinte");
}

console.log("****** OPERATEUR D'EGALITE ******");

// Il existe deux opérateurs d'égalité en JS : "==" et "==="
// ===/!== teste un égalité/inégalité de valeur et de type
// ==/!= teste une égalité de valeur

console.log('"1" === 1 =>');
console.log("1" === 1); // Renvoie false, car on a d'un coté une string et de l'autre un nombre
console.log('"1" == 1 =>');
console.log("1" == 1); // Renvoie true, car la valeur est la même (1), même si les types sont défférent

// l'utilisation de "==" et "!=" est considéré comme une mauvaise pratique, car elle est source de confusion
// Il faut donc TOUJOURS utiliser "===" et "!=="

console.log("****** OPERATION AVEC DES DECIMAUX ******");

// Pour des raisons un peu techniques (j'ai pas tout compris), les opérations mathématiques 
// simples sur des nombres décimaux peuvent renvoyer des résultats imprécis
var additionDecimale = 0.1 + 0.2;
console.log("0.2 + 0.1 =>")
console.log(additionDecimale); //renvoie 0.30000000000000004

// Cela pose problème lorsque qu'on veut faire une égalité avec le resultat d'une opération
console.log("0.2 + 0.1 === 0.3 =>");
console.log(additionDecimale === 0.3); // renvoie false

// En général, on s'arrange pour faire les calculs coté serveur.
// Ou alors, il faut utiliser une librairie pour faire des opération comme Big.js https://github.com/MikeMcl/big.js/

console.log("****** MOT CLEF THIS ******");
// En JS, "this" est un mot clef que l'on peut utiliser dans une fonction pour récupérer le contexte
// d'appel de cette dernière

// La valeur de this dépend donc de la manière dont on appelle une fonction!

// Prenons la classe suivante
function MaClasseThis() {
    this.attribut = 2;
    this.fonction = function () {
        this.attribut = this.attribut + 1;
    }
}

// On instancie l'objet
var monObjetThis = new MaClasseThis();
console.log("monObjetThis (instance de MaClasseThis)");
console.log(monObjetThis);
console.log("Application de la fonction sur monObjetThis =>");
monObjetThis.fonction();
console.log(monObjetThis);

// On récupère la même fonction en la mettant dans un autre objet
var unAutreObjetSansRapport = {
    methode: monObjetThis.fonction
}

console.log("unAutreObjetSansRapport (instance d'Object)");
console.log(unAutreObjetSansRapport);
// on appelle cette fonction (c'est la même!)
console.log("Application de la fonction sur unAutreObjetSansRapport =>");
unAutreObjetSansRapport.methode();
console.log(unAutreObjetSansRapport);
// La fonction est appelée à partir de "unAutreObjetSansRapport", "this" deviens donc "unAutreObjetSansRapport"
// Comme la propriété "attribut" n'existait pas dans "unAutreObjetSansRapport", 
// l'opération fait undefined + 1, ce qui renvoie NaN (not a number), puis créé la propriété "attribut" dans 
// "unAutreObjetSansRapport"

// Si cet exemple est un peu abstrait, il faut savoir que l'on va avoir ce problème à chaque foit que l'on
// traite des événements (callbacks)
// Par exemple, dans script6.js, nous avons utilisé des évenement pour récupérer une réponse http
// Rappel:
// request.onload = onAsyncResponse;
// si la fonction "onAsyncResponse" contient "this", ce dernier sera égal à "request" lorsque la réponse sera reçue
