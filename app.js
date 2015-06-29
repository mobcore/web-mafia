//Express
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
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
var session = require('express-session');

//Getting path variables
var routes = require('./routes/index');
var configDB = require('./config/database.js');
require('./config/passport');

//Setting up express
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());

//Setting up templating engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//Required setup for passport
app.use(session({secret: 'whenyougayyoufeelitintherainbow'})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Connect to mongoDB
mongoose.connect(configDB.url);

//Check database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successfully connected to mongoDB");
});

//Getting path variables and routing
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

//Start server
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});