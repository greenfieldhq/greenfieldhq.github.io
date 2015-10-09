var express = require('express');
var routes = require('./routes');
var contact = require('./routes/contact')
var work = require('./routes/work')
var http = require('http');
var path = require('path');

global.config = require('konfig')();
console.log(global.config.app);

var app = express();
var postmark = require("postmark")(global.config.app.keys.postmark);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser(global.config.app.keys.cookieParser));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('prerender-node')).set('prerenderToken', global.config.app.keys.prerender);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/public/assets/sass';
var destPath = __dirname + '/public/assets/css';


app.use('/assets/css', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));

app.get('/', routes.index);
app.get('/work', work.index);
app.post('/contacts', contact.create(postmark));

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
