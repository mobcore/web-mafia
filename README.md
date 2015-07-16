# Web Mafia

[![Join the chat at https://gitter.im/mobcore/web-mafia](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mobcore/web-mafia?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

 Web Mafia is a game based off of the [custom game](http://sc2mafia.wikia.com/wiki/StarCraft_II_Mafia_Wiki) by __DarkRevenant__ on the Starcraft II engine.

## Installation
For the application to work, you will need to have NodeJS and MongoDB already installed and set up. If you are not using a local MongoDB server, then you will need to either configurate a .env file or have set your environment variables in .bash_profile (OSX) or .bashrc (Linux) prior to running.

Sample .env file:

```
MONGOHQ_URL='mongodb://localhost/mafiadb'

FACEBOOK_ID="get these from"
FACEBOOK_SECRET="facebook developers"

SESSION_SECRET="this can be whatever"
```

To install NodeJS visit [https://nodejs.org/](https://nodejs.org/).

To install MongoDB visit [https://www.mongodb.org/](https://www.mongodb.org/).

To set up mongodb visit: [http://docs.mongodb.org/manual/](http://docs.mongodb.org/manual/).

After everything is set up:

```bash
$ git clone https://github.com/mobcore/web-mafia.git
$ npm install
$ npm start
```
## Project Structure
	.
	├── config // All the configurations/initializations are here to not clog up entry file.
	│   ├── database.js
	│   └── passport.js
	├── models // This is where all the mongodb schemas are.
	│   └── user.js
	├── public // This is where we keep at the front end material.
	│   ├── images // This is where we store all the images.
	│   │   └── photo.jpg
	│   ├── javascripts // This is where we store all the javascript files.
	│   │   └── lobby.js
	│   ├── stylesheets // This is where we store all the CSS files.
	│   │   ├── lobby.css
	│   │   └── login.css
	│   └── favicon.ico // Our website icon.
	├── routes // This is where all the routes are.
	│   ├── api.js
	│   ├── gameroom.js
	│   ├── lobby.js
	│   └── login.js
	├── views // This is where are the views are.
	│   ├── lobby.html
	│   ├── login.html
	│   └── signup.html
	├── .travis.yml // Visit the travis-ci website for more info.
	├── app.js // This is the entry file.
	├── CHANGELOG.md // This is a log for all the changes.
	├── CONTRIBUTING.md // This is a file to explain how to contribute to this project.
	├── LICENSE // This is the license of the project.
	├── package.json // This is the package.json file.
	└── README.md // This is the README.md file.

## Contribution
We welcome __anyone__ to help and contribute to this open source project! If this project interests you, check out our [contributing outlines](https://github.com/mobcore/web-mafia/blob/master/CONTRIBUTING.md).

## NPM Packages
A list of some of the npm packages used in this app.

- [Express](http://expressjs.com/)
- [Passport](http://passportjs.org/)
- [Bcrypt-NodeJS](https://www.npmjs.com/package/bcrypt-nodejs)
- [Mongoose](http://mongoosejs.com/)

## Resouces
A list of some helpful resouces that were useful in creating this app.

- [Bootstrap](http://getbootstrap.com/)
- [Glyphicons](http://glyphicons.com/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

## Wiki
Please also visit our wiki page: [https://github.com/mobcore/web-mafia/wiki](https://github.com/mobcore/web-mafia/wiki)

## Contributors
[Andy Tung](https://github.com/andyytung), [Derek Chan](https://github.com/dchanman), [Eleanor Wong](https://github.com/eleanorwong), [Connie Ma](https://github.com/maknoon), and [Harris Lin](https://github.com/HarrisLin).
