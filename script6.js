///////////////////////////////////////////////////////////////////////////////////////////////////
// Récupérer des données via le réseau

// Pour envoyer une requete sur le réseau et récupérer les informations 
// sur la partie foireuse de thomas catonnet, on envoie une requête HTTP.
// HTTP (HyperText Transfer Protocol) est le protocole utilisé par le navigateur pour 
// récupérer des fichier distant.
// Par exemple, pour aller sur google, tu utilises l'adresse http://www.google.fr, 
// et google te renvoie le fichier HTML de la page. Le navigateur affiche ce fichier 
// (tu peux voir la requete passer dans l'onglet network des outils développeurs)

// Le JS peut utiliser ce protocole pour demander n'importe quel fichier (HTML, Image, JSON...)

// Il existe plusieurs méthode HTTP. Voici leur utilisation normale (après on fait ce qu'on veut)
// GET : pour récupérer des données distantes 
//       (l'utilisateur consulte les informations de son profil)
// POST : pour mettre à jour des données distantes 
//       (l'utilisateur change son numéro de téléphone)
// PUT : pour ajouter de nouvelles données
//       (un nouvel utilisateur créer un compte sur le site)
// DELETE : pour supprimer une donnée existante
//        (l'utilisateur retire les information de paiement de son compte)
// il y en a d'autre mais on s'en fout.

function sendSynchronousRequest() {
    var request = new XMLHttpRequest();
    // créer un objet requete avec la méthode (voit plus haut), l'adresse à contacter 
    // le dernier paramètre indique si la requete est asynchrone :
    // si false, la requete est synchrone (on verra plus bas)
    request.open("GET", "https://acs.leagueoflegends.com/v1/stats/game/EUW1/3199942524?visiblePlatformId=EUW1&visibleAccountId=206910346", false);

    // Envoi de la requete.
    request.send();
    // La requete est synchrone : on attend d'avoir une réponse avant de passer à l'instruction JS suivante
    // c'est mal, car pendant ce temps le navigateur est "bloqué", l'utilisateur ne peut rien faire.

    // Par contre, lorsque request.send() se termine, on a reçu la réponse on peut donc l'analyser directement
    // On regarde le status: 200 indique que tout est OK
    if (request.status === 200) {
        console.log("sendSynchronousRequest OK");
        console.log(request.response);
    } else {
        // Sinon, il y a eu un souci : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
        console.error("sendSynchronousRequest: Erreur HTTP:" + request.status);
        console.error(request.statusText);
    }
}

function sendAsynchronousRequest() {
    var request = new XMLHttpRequest();

    // si true, la requete est synchrone 
    request.open("GET", "https://acs.leagueoflegends.com/v1/stats/game/EUW1/3199942524?visiblePlatformId=EUW1&visibleAccountId=206910346", true);

    // La requete est asynchrone : elle est envoyé en tache de fond, et on n'attend pas d'avoir une réponse 
    // avant de passer à l'instruction JS suivante
    // On ne peut donc pas traiter la réponse immédiatement, car on ne sait pas quand le serveur va nous répondre
    // Par contre, l'envoie en tache de fond ne bloque pas le navigateur, l'utilisateur 
    // peut donc continuer sa navigation

    // pour traiter le résultat on utilise des événements :
    // onload : fonction appelée lorsque le serveur nous répond (erreur HTTP ou pas)
    request.onload = onAsyncResponse;
    // onerror : fonction appelée en cas d'erreur (si pas de connexion internet apr exemple)
    request.onerror = onAsyncError;

    // Envoi de la requete.
    request.send();

    // rien après, on ne sait pas quand on aura une réponse
}

function onAsyncResponse(event) {
    if (event.target.status === 200) {
        console.log("sendAsynchronousRequest OK");
        console.log(event.target.response);
    } else {
        // Sinon, il y a eu un souci : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
        console.error("sendAsynchronousRequest: Erreur HTTP:" + event.target.status);
        console.error(event.target.statusText);
    }
}

function onAsyncError(event) {
    console.error("sendAsynchronousRequest: Erreur");
}