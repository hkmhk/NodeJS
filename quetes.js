
// Réaliser votre première application NodeJS. Cette application écrite doit demander à l'utilisateur son âge et
// , à partir de cette valeur, lui retourner son année de naissance. Vous posterez le lien de votre Gist.

// Critéres de validation
// L'application demande une valeur à l'utilisateur
// La valeur ne peut être que numérique
// La valeur ne peut pas être supérieure à 99
// La valeur retournée est inférieure à l'année en cours

process.stdin.resume()
process.stdin.setEncoding('utf8')
console.log('Quel âge avez-vous ?')

process.stdin.on('data', (age) => {
    typeof age === "number"
    if (age >= 1 && age <= 99) {
        var d = new Date();
        var n = d.getFullYear();
        console.log(n - age);
        process.exit();
    }
    else
        console.log("Donnez une nouvelle valeur")
    process.exit();
})
// What's a cow !
// Écrire le code NodeJS qui affiche une vache meuglant "hello boy" grâce au module cowsay. Le code sera contenu dans un Gist.

// Critéres de validation
// Le code affichera une vache affichant "hello boy"
// Le cowsay est utilisé avec un require

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "hello boy",
    e: "oO",
    T: "U "
}));

// Réaliser votre premier site avec NodeJS. Cette application écrite doit permettre d'avoir une application web avec 2 pages (accueil et à propos. Le contenu de ces pages importe peu). Vous posterez le lien de votre Gist.

// Critéres de validation
// Serveur HTTP NodeJS en écoute sur le port 3000
// Lorsque je vais à l'adresse : http://localhost:3000/ afficher la page d'accueil
// Lorsque je vais à l'adresse : http://localhost:3000/about afficher la page propos

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/about', function (req, res) {
    res.send('about');



    // Dans un dossier contenant un projet Express, tu vas créer une nouvelle route dans routes/index.js. Puis écrire un middleware sur la route /superMiddleware qui affiche hello middleware dans le terminal (via un console.log()), à chaque appel de la page. Dans la fonction "suivante", afficher hello world à l'utilisateur (via un res.send()).

    // Critéres de validation
    // La route /superMiddleware contient deux fonctions
    // Le middleware comporte bien le next()
    // Le middleware affiche hello middleware en console


    const express = require('express')
    const app = express()

    app.get('/', function (req, res) {
        res.send('Hello World!')
    })

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })

    app.get('/about', function (req, res) {
        res.send('about');
    });

    const express = require('express');
    const router = express.Router();

    /* GET users listing. */
    router.get("/superMiddleware", (req, res, next) => {
        console.log("Hello Middleware");
        next();
    },
        (req, res, next) => {
            res.send("hello world");
        }
    );

    // Song Session
    // Dans ton dossier contenant ton projet généré avec l'express-generator, tu vas créer deux nouvelles routes dans le fichier routes/index.js.

    // Une route /session-in dans laquelle tu initialisera une variable de session (song) contenant be bop a lula. Attention, l'écriture en session se fera seulement lorsque la réponse sera envoyée à l'utilisateur par exemple via res.send() ou res.render() ou res.end().
    // Une route /session-out qui affichera le contenu de la variable de session song
    // Le code sera disponible dans un gist.

    // Critéres de validation
    // Le fichier contient les deux routes (session-in & session-out)
    // La route session-out affiche be bop a lula

    const express = require('express');
    const router = express.Router();


    router.get('/session-in', (req, res, next) => {
        req.session.song = "be bop a lula"
        res.send("kiki")
    });

    router.get('/session-out', (req, res, next) => {
        res.send(req.session.song)
    });

    //  Désormais c'est à toi de jouer ! Tu vas devoir créer :

    //  une route acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera "Hey my name is [prénom]"
    //  une route acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera "Hey it's a DELETE ID [numéro]"
    //  Critéres de validation
    //  L'appel de l'URL /users/bob en PUT affiche Hey my name is bob
    //  L'appel de l'URL /users/2 en DELETE affiche Hey it's a DELETE ID 2
    //  Le code de users.js sera disponible sur un gist

    var express = require('express');
    var router = express.Router();

    router.delete('/:id(\\d+)', function (req, res, next) {
        res.send('Hey ! It\'s a DELETE with ID ' + req.params.id);
    });


    router.put("/:name([A-Za-z]+)", function (req, res, next) {
        res.send(`Hey ! My name is ${req.params.name}`);
    });


    // Dans ton dossier contenant ton projet généré avec l'express-generator, tu vas créer quatres nouvelles routes dans routes/users.js.

    // Tu vas devoir créer :

    // une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug
    // une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]
    // une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug
    // une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]
    // Dans tes ton dossier views tu auras deux vues pour lancer ces appels de routes :

    // un fichier update-user.pug avec un formulaire envoyant sur la route en PUT
    // un fichier delete-user.pug avec un formulaire envoyant sur la route en DELETE

    router.get('/:name([A-Za-z]+)', (req, res, next) => {
        res.render('update-users', { name: req.params.name });
    });
    router.put("/:name([A-Za-z]+)", (req, res, next) => {
        res.send(`the new name is  ${req.params.name}`);
    });
    router.get('/:id(\\d+)', (req, res, next) => {
        res.render('delete-users', { id: req.params.id });
    });

    router.delete('/:id(\\d+)', (req, res, next) => {
        res.send('No more users with id ' + req.params.id);
    });



    module.exports = router;

})
