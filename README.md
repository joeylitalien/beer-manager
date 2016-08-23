# Beerolog
*Beerolog* est un outil de gestion de menu hebdomadaire pour les bars du Québec.

### Description
*Beerolog* permet aux bars et pubs du Québec de gérer facilement leur menu hebdomadaire de consommation alcoolisées et d'afficher rapidement leur nouvelle sélection à leurs clients.

### Implémentation

*Beerolog* est développé entièrement avec le framework de développement web [MeteorJS](https://www.meteor.com/) et utilise [MongoDB](https://www.mongodb.com/) comme système de gestion de données NoSQL.

### Hébergement
Présentement, *Beerolog* est temporairement hébergé via [Galaxy](https://galaxy.meteor.com/) (la plateforme d'hébergement de MeteorJS) à des fins de démonstration. Les banques de données utilisées sont hébergées à distance via [mLab](https://mlab.com/) pour assurer une non-interruption du service.

### Déploiement de l'application

Pour installer MeteorJS localement, ouvrir le terminal et exécuter

`curl https://install.meteor.com/ | sh`.

Ensuite, clôner le répertoire et simplement rouler `meteor`. Pour déployer l'application en tant qu'utilisateur autorisé, se connecter à votre compte MeteorJS par `meteor login` et exécuter

`DEPLOY_HOSTNAME=us-east-1.galaxy-deploy.meteor.com meteor deploy beer-manager.meteorapp.com --settings settings.json`.

Le fichier `settings.json` est ignoré par `git` pour des raisons évidentes de sécurité.


### [Démo](http://beer-manager.meteorapp.com)
