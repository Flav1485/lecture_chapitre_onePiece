function handleValidation() {
    const totalChapters = 1149; // Nombre total de chapitres
    const chaptersReadInput = document.getElementById('chapters-read');
    const chaptersRead = parseInt(chaptersReadInput.value, 10);

    // Enregistrement du nombre de chapitres lus dans le localStorage
    localStorage.setItem('chaptersRead', chaptersRead); 

    const data = {
        sagas: [
            // Nom des sagas, début et fin des chapitres, image associée
            { name: "East Blue", start: 1, end: 100, image: "images/images_saga/east_blue.jpg" },
            { name: "Alabasta", start: 101, end: 217, image: "images/images_saga/alabasta.jpg" },
            { name: "Skypiea", start: 218, end: 302, image: "images/images_saga/skypiea.jpg" },
            { name: "Water 7", start: 303, end: 441, image: "images/images_saga/water_seven.webp" },
            { name: "Thriller Bark", start: 442, end: 489, image: "images/images_saga/thriller_bark.webp" },
            { name: "Guerre au Sommet", start: 490, end: 597, image: "images/images_saga/guerre_sommet.webp" },
            { name: "Île des Hommes-Poissons", start: 598, end: 653, image: "images/images_saga/ile_2_hommes_poissons.webp" },
            { name: "Dressrosa", start: 654, end: 801, image: "images/images_saga/dressrosa.jpeg" },
            { name: "Whole Cake Island", start: 802, end: 908, image: "images/images_saga/whole_cake_island.webp" },
            { name: "Pays des Wa", start: 909, end: 1057, image: "images/images_saga/pays_2_wa.webp" },
            { name: "Finale", start: 1058, end: 1148, image: "images/images_saga/finale.jpg" } 
        ],
        arcs: [
            // Nom des arcs, début et fin des chapitres
            { name: "Romance Dawn", start: 1, end: 7 },
            { name: "Ville d'Orange", start: 8, end: 21 },
            { name: "Village Sirop", start: 22, end: 41 },
            { name: "Baratie", start: 42, end: 68 },
            { name: "Arlong Park", start: 69, end: 95 },
            { name: "LogueTown", start: 96, end: 100 },
            { name: "Reverse Mountain", start: 101, end: 105 },
            { name: "Whiskey Peak", start: 106, end: 114 },
            { name: "Little Garden", start: 115, end: 129 },
            { name: "Île de Drum", start: 130, end: 154 },
            { name: "Alabasta", start: 155, end: 217 },
            { name: "Jaya", start: 218, end: 236 },
            { name: "Skypiea", start: 237, end: 302 },
            { name: "Long Ring Long Land", start: 303, end: 321},
            { name: "Water Seven", start: 322, end: 374 },
            { name: "Enies Lobby", start: 375, end: 430 },
            { name: "Post-Enies Lobby", start: 431, end: 441},
            { name: "Thriller Bark", start: 442, end: 489},
            { name: "Sabaody", start: 490, end: 513 },
            { name: "Amazon Lily", start: 514, end: 524 },
            { name: "Impel Down", start: 525, end: 549 },
            { name: "Marine Ford", start: 550, end: 580 },
            { name: "Post-Marine Ford", start: 581, end: 597},
            { name: "Retour à Sabaody", start: 598, end: 602},
            { name: "Île des Hommes-Poissons", start: 603, end: 653},
            { name: "Punk Hazard", start: 654, end: 699},
            { name: "Dressrosa", start: 700, end: 801},
            { name: "Zo", start: 802, end: 824},
            { name: "Tougato", start: 825, end: 902},
            { name: "Rêverie", start: 903, end: 908},
            { name: "Pays des Wa", start: 909, end: 1057},
            { name: "Île d'Egg Head", start: 1058, end: 1125},
            { name: "Erbaf", start: 1126, end: 1148}
        ]
    };

    // récuppération des sagas et arcs
    const sagas = data.sagas;
    const arcs = data.arcs;

    // Vérification de la validité de l'entrée
    if (!isNaN(chaptersRead) && chaptersRead >= 0 && chaptersRead <= totalChapters) {
        // Calcul du pourcentage de chapitres lus
        const percentage = ((chaptersRead / totalChapters) * 100).toFixed(2);
    
        // Récupération de la saga en cours
        const currentSagaIndex = sagas.findIndex(saga => chaptersRead >= saga.start && chaptersRead <= saga.end);
        const currentSaga = currentSagaIndex !== -1 ? sagas[currentSagaIndex] : null;
        const sagaName = currentSaga ? currentSaga.name : "Inconnu";
        const sagaImage = currentSaga ? currentSaga.image : "images/roger.webp";

        // Récupération de l'arc en cours
        const currentArcIndex = arcs.findIndex(arc => chaptersRead >= arc.start && chaptersRead <= arc.end);
        const currentArc = currentArcIndex !== -1 ? arcs[currentArcIndex] : null;
        const arcName = currentArc ? currentArc.name : "Inconnu";

        // Récupération de la saga suivante
        const nextSaga = currentSagaIndex !== -1 && currentSagaIndex + 1 < sagas.length ? sagas[currentSagaIndex + 1] : null;
        const nextSagaName = nextSaga ? nextSaga.name : "Aucune saga suivante";

        // Récupération de l'arc suivant
        const nextArc = currentArcIndex !== -1 && currentArcIndex + 1 < arcs.length ? arcs[currentArcIndex + 1] : null;
        const nextArcName = nextArc ? nextArc.name : "Aucun arc suivant";

        // Récupération des résultats
        const resultDiv = document.querySelector('.chapter-read');
        const resultDiv1 = document.querySelector('.moyenne');
        const resultDiv2 = document.querySelector('.saga_arc');
        const sagaImageElement = document.getElementById('saga-image');

        // Affichage des résultats
        resultDiv.innerText = `Vous avez lu ${chaptersRead} chapitres sur ${totalChapters}.`;
        resultDiv1.innerText = `Vous avez lu ${percentage}% des chapitres.`;
        sagaImageElement.src = sagaImage;
        sagaImageElement.alt = `Image de la saga : ${sagaName}`

        if (chaptersRead < currentArc.end) {
            resultDiv2.innerText = `Vous êtes actuellement dans l'arc : ${arcName}, de la saga : ${sagaName}.`;
        } else if (chaptersRead === currentArc.end && chaptersRead < currentSaga.end) {
            resultDiv2.innerText = `Vous avez terminé l'arc : ${arcName}, de la saga : ${sagaName}. Vous êtes maintenant dans l'arc : ${nextArcName}.`;
        } else if (chaptersRead === currentArc.end && chaptersRead === currentSaga.end) {
            resultDiv2.innerText = `Vous avez terminé l'arc : ${arcName} et la saga : ${sagaName}. Vous êtes maintenant dans l'arc : ${nextArcName}, de la saga : ${nextSagaName}.`;
        }
    } else {
        document.querySelector('.moyenne').innerText = `Veuillez entrer un nombre valide entre 0 et ${totalChapters}.`;
    }
}

// Restaurer les données sauvegardées au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const savedChaptersRead = localStorage.getItem('chaptersRead');
    if (savedChaptersRead) {
        document.getElementById('chapters-read').value = savedChaptersRead;
        handleValidation(); // Appel de la fonction pour afficher les résultats
    }
});

// Événements pour le bouton et la touche "Entrée"
document.getElementById('submit-button').addEventListener('click', handleValidation);
document.getElementById('chapters-read').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleValidation();
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log("Service Worker enregistré"))
        .catch(error => console.error("Erreur lors de l'enregistrement du Service Worker:", error));
}