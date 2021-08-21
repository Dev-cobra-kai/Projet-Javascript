const questions = [
    {
        question:
            "Qui est Alan Walker ?\n1. Un pianiste \n2. Un DJ",
        reponse: 2
    },
    {
        question:
            "Quelle est la capitale de l'Autriche ?\n1. Vienne \n2. Oslo",
        reponse: 1
    },
    {
        question:
            "Quel animal à un long cou  ?\n1. L'éléphant \n2. La Girafe",
        reponse: 2
    },
    {
        question:
            "Quelle est la couleur de l'herbe  ?\n1. Verte \n2. Jaune",
        reponse: 1
    },
];

/*******************Debut du Jeu**************/

let nbBonneReponse = 0;

for (let i = 0; i < questions.length; i += 1) {
    let repUser = prompt(questions[i].question);
    if (repUser == questions[i].reponse) {
        alert("Bonne Réponse");
        nbBonneReponse += 1;
    } else {
        alert("Mauvaise Réponse");
    }
}

if (nbBonneReponse <= 1) {
    alert(`Vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`);
} else {
    alert(`Vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`);
}
