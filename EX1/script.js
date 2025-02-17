function startGame() {
    const d = prompt("Niveau :\n1-Facile (1-50, 10 vies)\n2-Moyen (1-100, 7)\n3-Dur (1-200, 5)");
    let max = 50, vies = 10;
    
    if (d === '2') { max = 100; vies = 7; } 
    else if (d === '3') { max = 200; vies = 5; }

    const nombre = Math.floor(Math.random() * max) + 1;
    let essais = vies;

    while (essais > 0) {
        const reponse = prompt(`Entrez un nombre (1-${max}) - ${essais} essais restants :`);
        
        if (reponse === null) {
            if (confirm("Quitter la partie ?")) return;
            else continue;
        }

        const nombreUtilisateur = parseInt(reponse);
        
        if (!nombreUtilisateur || nombreUtilisateur < 1 || nombreUtilisateur > max) {
            alert("Nombre invalide !");
            continue;
        }

        essais--;

        if (nombreUtilisateur === nombre) {
            alert(` Gagné ! Nombre trouvé en ${vies - essais} coups !`);
            return redemarrer();
        }
        else alert(nombreUtilisateur < nombre ? " Plus grand" : " Plus petit");
    }

    alert(` Perdu ! Le nombre était ${nombre}`);
    redemarrer();
}

function redemarrer() {
    confirm("Nouvelle partie ?") ? startGame() : alert("À bientôt !");
}
