var ghost = require('ghost');
var express = require('express');
var pa = require('path');
var scApp = express();
var gallery = require('node-gallery');
var hbs = require('express-hbs');
var MusicController = require('./music-controller.js');
var AppsController = require('./apps-controller.js');

/**
 * handlebars view engine 
 */
scApp.engine('hbs', hbs.express4({
  partialsDir: [relative('views/partials')],
  defaultLayout: relative('views/layouts/default.hbs')
}));
scApp.set('view engine', 'hbs');
scApp.set('views', relative('views'));


/**
 * public dir
 */
scApp.use(express.static('public'));

/**
 * node-gallery
 */
scApp.use('/photos', gallery({
	staticFiles: 'public/photos',
	urlRoot: 'photos',
	title: 'Photos',
	render: false
}), function(req, res, next) {
	return res.render('photos', {html: req.html, page_section: "photos"})
});

/**
 * basic routes
 */
scApp.get('/', function (req, res) { 
	res.render('index', {page_section: "index"}); 
});
// scApp.get('/music', function (req, res) { res.render('music') });

MusicController.controller(scApp);
AppsController.controller(scApp);

scApp.get('/about', function (req, res) { res.render('about', {page_section: "about"}) });

/**
 * start ghost (at /blog, set in config.js) and hook it up to our express app
 */
ghost({config: relative('config.js')}).then(function (ghostServer) {
  console.log('Ghost running at ' + ghostServer.config.paths.subdir);
  scApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);  
  ghostServer.start(scApp);     
});

/**
 * Get relative path to file
 * @param  {String} path the path to the file
 * @return {String}      the full path to the file
 */
function relative(path) {
  return pa.join(__dirname, path);
}