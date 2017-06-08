///////////////////////////////////////////////////////////////////////////////////////////////////
// LES CLASSES

console.log("*************************************************************************************");
console.log("****** CLASSES ******");
console.log("*************************************************************************************");

// Javascript n'était initialement pas un langage orienté objet (pas dans le sens Java du terme)
// Des concepts ont été rajoutés au fur et à mesure pour ressembler aux langage modernes en adaptant les éléments existant.
// Pour cette raison, la synthaxe n'est pas forcément très intuitive.

// Rappel : en java, une classe se déclare comme ceci
// Note: en javascript on utilise les backquote `` (alt gr + è) pour écrire une chaine de caractère sur plusieurs lignes
`
public class MaClasse {
    // Attribut privé, seulement accessible à l'intérieur de la classe
    private int monAttributPrive;

    // Attribut d'objet public : accessible de partout à partir d'un objet de type MaClasse
    public String monAttributPublic;

    // Attribut de classe public : valeur partagée entre tous les objets de la classe
    public static String monAttributStaticPublic = "Static public";

    // Constructeur : initialise l'objet et ses attributs
    public MaClasse(int attribut){
        this.monAttributPrive = maMethodePrivee(attribut);
    }

    // Méthode d'objet publique (accessible sur tous les objets du type MaClasse)
    public int maMethodePublique(){
        return monAttributPrive;
    }

    // Méthode de classe, qui n'a pas besoin d'un objet pour être appelée
    // par exemple, une méthode utilitaire qui fait un calcul à partir de paramêtres
    public static String maMethodeStatique(int a, int b){
        return a + b;   
    }

    // Méthode d'objet privée, accssible uniquement à l'intérieur de la classe
    private int maMethodePrivee(int attribut){
        return attribut + 2;
    }
}
`;

// On  l'utilise comme suit:
`
// création d'un objet à partir de la classe
MaClasse monObjet = new MaClasse(23);

// utilisation d'une méthode d'objet publique
int maValeur = monObjet.maMethodePublique();
// utilisation d'un attribut d'objet public
System.out.println(monObjet.monAttributPublic);

// utilisation d'une méthode de classe publique
int maValeur2 = MaClasse.maMethodeStatique(1,2);
// utilisation d'un attribut de classe public
System.out.println(MaClasse.monAttributStaticPublic);
`;

// En javascript, une classe se déclare de cette manière (entre autre, mais celle là est la plus courante)
function MaClasse(attribut) {
    // variable attachée à l'objet this => variable publique
    this.monAttributPublic = attribut;

    // variable qui n'existe qu'à l'intérieur de la fonction
    // ce qui correspond à peut pret à un attribut privé
    var monAttributPrive = 10;

    // On attache uné méthode à l'objet this => méthode publique
    this.maMethodePublique = function () {
        return monAttributPrive;
    }

    // On définit une méthode dans la classe de manière classique => méthode privée
    function maMethodePrivee(attribut) {
        return this.monAttributPublic + 2;
    }
}

// On est obligé de définir les méthodes statiques en dehors de la classe
MaClasse.monAttributStaticPublic = "Static public";
MaClasse.maMethodeStatique = function (a, b) {
    return a + b;
}

// Un classe JavaScript s'utilise de cette manière:
var monObjet = new MaClasse(10);
// le mot clef "new" indique que l'objet "this" à l'intérieur de la fonction est un nouvel objet vide {}
// il applique la fonction sur "this" (ajout des propriétés) puis il renvoie sa valeur.
console.log("monObjet");
console.log(monObjet);
console.log("monObjet.maMethodePublique()");
console.log(monObjet.maMethodePublique());
console.log("monObjet.monAttributPublic");
console.log(monObjet.monAttributPublic);
console.log("MaClasse.monAttributStaticPublic");
console.log(MaClasse.monAttributStaticPublic);
console.log("MaClasse.maMethodeStatique(1,3)");
console.log(MaClasse.maMethodeStatique(1, 3));

// On peut vérifier si un objet est de type MaClasse avec le mote clé "instanceof" qui renvoie un booléen
console.log("monObjet instanceof MaClass =>");
console.log(monObjet instanceof MaClasse); // renvoie true
console.log("monObjet instanceof Number =>");
console.log(monObjet instanceof Number); // renvoie false





