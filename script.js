// INTRO
// Ceci est un fichier Javascript. Par convention, un fichier javascript a pour extention ".js".
// Lorsque que le HTML charge ce fichier avec une balise <script>, il execute ligne par ligne son contenu.

///////////////////////////////////////////////////////////////////////////////////////////////////
// LES VARIABLES

// Ca c'est pour mettre des messages dans la console du navigateur
console.log("*************************************************************************************");
console.log("****** VARIABLES ******");
console.log("*************************************************************************************");

// En javascript, une variable se déclare avec "var".
// Contrairement au Java, les variables peuvent contenir n'importe quel type de données (nombre, chaine de caractère, objet complexe...)
// On parle alors de typage "dynamique":
var maVariableEntiere = 10;
var maVariableBooleene = false;
var maVariableString = "Une chaine de caractère";
var maVariableTableau = [];
var maVariableObjet = {};

// De la même manière, il est possible changer le type d'une même variable à la volée:
var maVariableChangeDeType = "Chaine de caractère";
console.log("maVariableChangeDeType =>");
console.log(maVariableChangeDeType);
maVariableChangeDeType = 10.879;
console.log("maVariableChangeDeType =>");
console.log(maVariableChangeDeType);
maVariableChangeDeType = true;
console.log("maVariableChangeDeType =>");
console.log(maVariableChangeDeType);
// La valeur finale de la variable "maVariableChangeDeType" est "true"

// Si aucune valeur n'est indiqué lors de la déclaration, une variable contient la valeur "undefined"
var maVariableUndefined;
console.log("maVariableUndefined =>");
console.log(maVariableUndefined);
// Cela équivaut à :
var maVariableUndefined2 = undefined;

// Lorsque l'on définit une variable en brut dans un fichier JS (comme c'est fait au dessus), celle-ci sera accessible
// dans tout le code qui s'éxécutera à la suite (y compris dans les autres fichiers JS).
// On dit alors que la variable est "globale".
// Le navigateur défini lui même un certain nombre de variables globales:
window; // donne des infos sur la fenêtre du navigateur (taille, adresse courante)
document; // permet de modifier la structure du HTML 
console; // Permet d'afficher des informations dans la console du navigateur
// etc...

///////////////////////////////////////////////////////////////////////////////////////////////////
// LES FONCTIONS

console.log("*************************************************************************************");
console.log("****** FONCTIONS ******");
console.log("*************************************************************************************");
// Une fonctions est un bloc de codes qui ne s'éxécute que lorsqu'on l'appelle.
// Une fonction peut avoir des paramètres. Les paramètres ne sont pas typés
// Une fonction peut retourner une valeur. Cette valeur n'est pas typée.

// En javascript, une fonction se déclare de la manière suivante :
function maFonctionAPlusB(a, b) {
    var resultat = a + b;
    return resultat;
}

// Ou bien en la stockant dans une variable (moins bien, mais possible)
var maFonctionDansUneVariable = function(a, b){
    var resultat = a + b;
    return resultat;
}

// Dans les deux cas, la fonction s'appelle comme suit:
maFonctionAPlusB(1, 23);

// On peut mettre le resultat dans une variable
var resultatFonction = maFonctionAPlusB(1, 23);
console.log("maFonctionAPlusB(1, 23) =>");
console.log(resultatFonction);
// Ici, resultatFonction sera égale à 24

// Avec le typage dynamique, rien n'empêche de faire comme suit:

resultatFonction = maFonctionAPlusB("Chaine", " de caractères");
console.log("maFonctionAPlusB('Chaine', ' de caractères') =>");
console.log(resultatFonction);
// Ici, resultatFonction sera égale à "Chaine de caractères"

resultatFonction = maFonctionAPlusB("Chaine", 567);
console.log("maFonctionAPlusB('Chaine', 567) =>");
console.log(resultatFonction);
// Ici, resultatFonction sera égale à "Chaine567"

resultatFonction = maFonctionAPlusB(undefined, 567);
console.log("maFonctionAPlusB(undefined, 567) =>");
console.log(resultatFonction);
// Ici, resultatFonction sera égale à NaN (not a number)

resultatFonction = maFonctionAPlusB(["coucou", 80], { cle: "valeur" });
console.log("maFonctionAPlusB(['coucou', 80], { cle: 'valeur' }) =>");
console.log(resultatFonction);
// Ici, resultatFonction renvoie un truc chelou

// Et c'est pour ça qu'il faut faire attention, car le langage ne t'empêche pas de faire n'importe quoi.

// Une fonction peut accéder à une variable définie en dehors de celle-ci
var maVariableHorsFonction = 89;
function maFonctionAjoute1() {
    maVariableHorsFonction = maVariableHorsFonction + 1;
}
maFonctionAjoute1();
console.log("maVariableHorsFonction =>")
console.log(maVariableHorsFonction); // La valeur est 90 après appel de la fonction


// Les variables définies à l'intérieur des fonctions ne sont pas accessibles en dehors
function maFonctionTestInside() {
    var testInside = 12;
}
console.log("Variable testInside définie dans maFonctionTestInside =>")
console.log(testInside); // Pete une erreur car testInside n'existe pas en dehors de la fonction