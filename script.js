function afficher() {
    // Récupération des données
    let nom2 = document.querySelector("#nom2");
    let email2 = document.querySelector("#email2");
    let satisfaction2 = document.querySelector("#satisfaction2");
    let coach2 =  document.querySelector("#Coach2");
    let aria2  = document.querySelector("#aria2");

// Affichage des données
    let nom  = document.querySelector("#nom");
    let email = document.querySelector("#email");
    let satisfaction = document.querySelector("#satisfaction");
    let coach = document.querySelector("#coach");
    let aria = document.querySelector("#aria");

// Rattachement des champ exact
    nom.innerHTML = nom2.value;
    email.innerHTML = email2.value;
    satisfaction.innerHTML = satisfaction2.value;
    coach.innerHTML = coach2.value;
    aria.innerHTML  = aria2.value;
 
}