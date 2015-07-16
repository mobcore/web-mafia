//Express
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Socket.io
var server = require('http').createServer(app);
//var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

//Mongoose
var mongoose = require('mongoose');

//Passport
var passport = require('passport');
var flash = require('connect-flash');

//Session
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

//Getting path variables
var login = require('./routes/login');
var lobby = require('./routes/lobby');
var api = require('./routes/api');
var configDB = require('./config/database.js');
require('./config/passport');

//Setting up express
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setting up templating engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//Connect to mongoDB
mongoose.connect(configDB.url);

//Check database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successfully connected to mongoDB");
});

//Required setup for passport
app.use(session({
    secret: process.env.SESSION_SECRET || 'whenyougayyoufeelitintherainbow',
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
//    cookie: { secure: false },
    store: new mongoStore({ mongooseConnection: db })
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Getting path variables and routing
app.use('/', login);
app.use('/', lobby);
app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));

//Start server
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});
