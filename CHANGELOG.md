**19.07.2015**

Refractored view engine to handlebars.
- As a result lobby.handlebars is deprecated.
- lobby.handlebars will be in the future refractored to implement angular spa.
- Therefore, this change is safe to merge.

**16.07.2015**

Updated to structure of the project.
- Added a .travis.yml file (nothing set up yet). Visit [travis-ci](https://travis-ci.org/) for more information on continuous integration.
- Added a CONTRIBUTING.md.
- Updated README.md file.

**02.07.2015**

Added a more interactive lobby.
- Your info
- Buttons to vote, lynch, update last will
- List of all players, vote count, dead or alive, last will
- Game message

Note that nothing works yet.

**26.06.2015**

Inital skeleton of the web server application for the mafia game in NodeJS.
 - Expressjs as the base framework
 - Passportjs for authentication and authorisation
 - Mongoosejs for using the MongoDB database

Bluebird and Socket.io are two npm packages installed but not used yet.
