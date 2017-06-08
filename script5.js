///////////////////////////////////////////////////////////////////////////////////////////////////
// Intéragir avec le HTML en JS pur

// Imaginons que l'on veuille ajouter dynamiquement le contenu d'un champs de saisie libre
// à une liste lors de l'appui d'un bouton

// <button onclick="appuiSurBouton()"></button>
// Lorsqu'on clique sur le bouton (et uniquement sur le bouton),
// l'évenement HTML onclick est lancé, et le navigateur exécute le bloc de code JS qui est indiqué dans "onclick".
// Dans notre exemple, il s'agit de la fonction suivante:

function appuiSurBouton() {
    // JS peut récupérer un élément du HTML (aussi appelé le DOM)
    // pour cela, on utilise l'objet global "document" fourni par le navigateur
    // "document" permet de récupérer n'importe quel élément à l'aide de son attribut "id", 
    // de sa classe css, du type de balise (exemple : <div>)...

    // On préfère l'ID si on veut sélectionner un élément bien précis (car l'ID est unique, contrairement au reste)

    // Dans le DOM, on veut récupérer la valeur du champ de saisie
    // <input id="champSaisie" type="text" placeholder="Taper un truc ici" />
    var monChampSaisie = document.getElementById("champSaisie");
    // récupération de la valeur du champ de saisie
    var valeurDuChamp = monChampSaisie.value;

    // Vérification que le champ a bien une valeur non vide
    if (valeurDuChamp !== undefined && valeurDuChamp !== null && valeurDuChamp.length > 0) {
        // Création d'un nouvel élément HTML "paragraphe" pour mettre dans la liste
        var monElementDeListe = document.createElement("p");
        // on y met le contenu du champ de saisie
        monElementDeListe.innerText = valeurDuChamp;

        // Récupération de ma div à l'aide de sa classe css (à titre d'exemple)
        // <div class="listeTrucs"></div>
        // Attention, comme l'indique le "s" dans le nom de la méthode, elle retourne un tableau d'élements,
        // car plusieurs éléments peuvent avoir la même classe.
        var mesDivs = document.getElementsByClassName("listeTrucs");
        var maDiv = mesDivs[0];

        // Ajout de l'élément "p" créé précédement dans le HTML, en tant que dernier enfant de la div
        maDiv.appendChild(monElementDeListe);

        // On change la couleur de fond de la div en fonction du nombre d'élement qui la contienne
        // % 2 => Modulo 2
        var childCount = maDiv.childElementCount % 2;
        if (childCount === 1) {
            // setAttribute permet de changer la valeur d'un attribut html
            // <div style="background-color: red;"></div>
            maDiv.setAttribute("style", "background-color: coral;");
        } else {
            maDiv.setAttribute("style", "background-color: teal;");
        }
    }
}

