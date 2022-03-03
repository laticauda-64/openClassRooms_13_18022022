# Utilisez une API pour un compte utilisateur bancaire avec React

Vous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications web. L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end.

<img src="https://user.oc-static.com/upload/2020/08/14/15974097192929_image1.png" alt="Logo de Remede Agency">

### Après quelques jours dans l’entreprise, vous recevez le courriel suivant :

> Objet: Bienvenue !
> De: Mila
> À: Moi
>
> Bienvenue dans l'équipe !
>
> Je m'appelle Mila Lavigne et je suis ta nouvelle cheffe de projet. Nous sommes très heureux que tu rejoignes l'équipe ! J’ai une excellente nouvelle : le contrat dont nous t’avons parlé lors de l'entretien a été accepté et le client est prêt pour qu’on démarre.
>
> Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le >secteur et qui a besoin d'aide pour mettre en place son application. Nous avons obtenu un contrat en >deux parties qui se décompose en plusieurs phases :
>
> Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
> Phase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.
>
> À la fin du projet, tu présenteras les deux livrables à Avery Moreau, qui gère l’équipe technique d’Argent Bank.
>
> Nous attendons encore des informations, mais je veillerai à ce que tu sois inclus dans toutes les communications pour que tu sois à jour sur le projet.
>
> Au plaisir de travailler avec toi !
>
> Mila
> Cheffe de projet

### Quelques heures plus tard, vous recevez l’e-mail suivant :

<img src="https://user.oc-static.com/upload/2020/08/14/1597410191519_image2.png" alt="Logo de Argent Bank">

> Objet: Brief mission profil Argent Bank
> De: Avery
> À: Moi, Mila
>
> Bonjour Mila et l’équipe,
>
> Je suis Avery Moreau VP Engineering chez Argent Bank. Nous sommes ravis de vous avoir avec nous pour créer notre application web React pour le nouveau système d'authentification des utilisateurs. Nous avons des délais très serrés et nous aurons besoin d’aide !
>
> Voici un aperçu de ce dont nous avons besoin pour la phase 1 : Authentification des utilisateurs.
>
> Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le [HTML statique et le CSS](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs) pour la page d'accueil, la page de connexion et la page de profil.
> Utiliser Redux pour gérer le state de l'ensemble de l'application.
> Ce que doit faire l’application (voir les détails pour chacune sur [nos modèles de GitHub Issues](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)) :
> L'utilisateur peut visiter la page d'accueil
> L'utilisateur peut se connecter au système
> L'utilisateur peut se déconnecter du système
> L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
> L'utilisateur peut modifier le profil et conserver les données dans la base de données.
>
> Vous pouvez commencer par forker [notre repo existant](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) et suivre l’avancement du travail grâce aux modèles d’Issues GitHub que nous y avons incluses.
>
> Nos ingénieurs back-end ont déjà créé toutes les API dont vous avez besoin. Vous trouverez toute l adocumentation Swagger à l'intérieur du repo.
>
> Pour la phase 2 : Transactions, nous sommes encore en phase de conception. De notre côté, nous mettons au point une fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :
>
> de visualiser toutes leurs transactions pour le mois en cours ;
> de visualiser les détails d'une transaction dans une autre vue ;
> d'ajouter, de modifier ou de supprimer des informations sur une transaction.
>
> Puisque vous gérez déjà l'application web pour la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les API devraient être modélisées du côté back end. Nous avons besoin que vous nous fournissiez un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger.
>
> Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :
>
> La méthode HTTP (ex. : GET, POST, etc.)
> La route (ex. : /store/inventory)
> La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
> Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = >ID de l'article spécifique à demander à la base de données d'inventaire).
> Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).
>
> Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix >(mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document est exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans [l'outil d'édition de Swagger](https://editor.swagger.io/).
>
> Nous ferons une revue de code et discuterons ensemble de la proposition d'API une fois que tout sera terminé.
>
> Au plaisir de travailler avec vous !

Avery Moreau

Vous remarquez que l'interface est en anglais. Même si vous n'êtes pas très à l'aise dans cette langue, vous vous dites que c'est l'occasion de pratiquer un peu ! C'est toujours bien pour un développeur de lire l'anglais, car la documentation professionnelle se fait souvent dans cette langue. Et Google Traduction est votre ami 😉

Toutes ces informations en main, vous vous mettez au travail dès que possible !

## Let's get started !

This project was made with [Vite.js](https://vitejs.dev/). You don't know Vite ? Ok it's the same purpose than traditionnal "Create React App" but with huge enhancements, ([See here](https://medium.com/codex/you-should-choose-vite-over-cra-for-react-apps-heres-why-47e2e7381d13)), and it was made by [Evan You](https://evanyou.me/).

You will need some dependencies for running this project :

-   React (17.0.2)
-   React Router (6+)
-   Redux Toolkit (1.8.0)
-   React Redux (7.2.6)
-   Redux Persist (6.0.0)
-   Styled-components: (5.3.3)
-   Axios (0.26.0)

Also, i assume that you will use NodeJS at version 16 or more.

## Installation :

Just run usual commands to get the needed dependecies  
`npm install or yarn`

## Scripts :

Launch the app in developpement mode  
`npm run dev or yarn dev`  
Project is being served on port 3010 (cause backend is using 3000) but you can change that in vite.config.js file.

Make the final build for serve in production  
`npm run build or yarn build`  
Output files goes in the 'dist' folder with usual optimisations (js bundling, css minifying, etc...)

Locally preview production build  
`npm run preview or yarn preview`

## External Api

You can find the backend made by the OpenClassRooms team [here](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).  
Read their instructions to launch the script.
