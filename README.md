# Didlydoo App

Didlydoo App est une application web conçue pour simplifier la planification d'événements entre amis et proches. Avec Didlydoo, les utilisateurs peuvent afficher, créer, éditer et supprimer des événements tout en gérant la disponibilité de chaque participant. Didlydoo identifie automatiquement les dates optimales pour maximiser la participation à votre événement.

### Capture d'écran
![Didlydoo App Screenshot](https://www.united-internet.de/fileadmin/user_upload/Brands/Downloads/Logo_IONOS_by.jpg)

## Technologies

* **HTML, CSS/SASS, JavaScript :** Structure, présentation et comportement interactif.
* **Vite :** Bundler pour regrouper et optimiser les fichiers JS et CSS.
* **Node.js (avec Express.js) :** Initialisation du serveur web pour gérer les requêtes HTTP.
* **Fetch API :** Réalisation des requêtes HTTP depuis le navigateur vers le serveur.
* **RESTful API :** Facilite la communication entre le front-end et le back-end.
* **Git/GitHub :** Système de contrôle de version pour la gestion collaborative du code.
* **FontAwesome :** Intégration d'icônes dans l'interface utilisateur.
* **date-fns :** Utilisé pour manipuler les dates de manière efficace.

## Fonctionnalités
* **Affichage d'Événements :** Permet aux utilisateurs de consulter tous les événements existants avec la disponibilité de chaque participant.

* **Création d'Événements :** Autorise les utilisateurs à créer de nouveaux événements en fournissant des détails tels que le nom, les dates possibles, l'auteur et la description.

* **Gestion de Disponibilité :** Permet aux participants de définir leur disponibilité pour chaque date proposée lors de la création ou de la modification de leur participation à un événement existant.

* **Édition d'Événements :** Permet aux utilisateurs de modifier le nom, la description et l'auteur d'un événement existant.

* **Suppression d'Événements :** Offre la possibilité de supprimer un événement existant.

## Installation
Clonez le repository.

Dans votre terminal :
   > git clone [backend_repository_url]

### Backend
Allez dans le répertoire backend, et installez les dépendances.
   > cd backend
   > npm install

Démarrez le serveur pour gérer les requêtes HTTP.
   > node server/index.mjs
Note : Gardez le terminal ouvert pour maintenir le serveur en cours d'exécution.

### Front-End (Vite)
Ouvrez un terminal, allez dans le répertoire frontend, et installez les dépendances.
   > cd frontend
   > npm install

Démarrez le serveur de développement Vite.
   > npm run dev

Note : Gardez le terminal ouvert pour maintenir le serveur en cours d'exécution.

Ouvrez votre navigateur web et accédez à l'URL de développement local fournie (généralement http://localhost:5173/).

Maintenant, vous êtes prêt à explorer et à utiliser l'application Didlydoo sur votre machine locale.

### Endpoint documentation

| Method | Endpoint                   | Body                                                                                          | Response                                                                                                                                  |
| ------ | -------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/events/               |                                                                                               | A list of all the events                                                                                                                  |
| GET    | /api/events/[id]           |                                                                                               | A single event                                                                                                                            |
| GET    | /api/attendees/            |                                                                                               | Get a list of all the attendees, and the events they're attending                                                                         |
| GET    | /api/attendees/[name]      |                                                                                               | Get all attendances for a given name                                                                                                      |
| POST   | /api/events/               | `{ name: string, dates: array of dates ['YYYY-MM-DD'], author: string, description: string }` | Creates an event with `dates` as possibilities. You must provide an author, a name and a description for the event                        |
| PATCH  | /api/events/[id]/          | `{ name: string (optional), author: string (optional), description: string (optional) }`      | Patches (edit) an event with the provided infos                                                                                           |
| DELETE | /api/events/[id]/          |                                                                                               | Deletes an event                                                                                                                          |
| POST   | /api/events/[id]/add_dates | `{ dates: array of dates ['YYYY-MM-DD'] }`                                                    | Add some possible dates to an event                                                                                                       |
| POST   | /api/events/[id]/attend    | `{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }`  | Add an attendance for the given event. You must provide the attendee's `name` and some availabilities, in the form of an array of object  |
| PATCH  | /api/events/[id]/attend    | `{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }`  | Edit an attendance for the given event. You must provide the attendee's `name` and some availabilities, in the form of an array of object |

## Comment utiliser 
1. Consultez la liste des événements avec les disponibilités de chaque participant.

2. Créez de nouveaux événements en fournissant les détails nécessaires.

3. Gérez la disponibilité en modifiant votre participation à un événement existant.

4. Modifiez le nom, la description ou l'auteur d'un événement existant si nécessaire.

5. Supprimez les événements qui ne sont plus pertinents.

6. Inscrivez-vous à un événement et choisissez les dates où vous êtes disponible.

## Auteurs
Stacy Maloteaux et Alice Marique


