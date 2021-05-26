var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9567);
app.use(express.static('public'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.render('home');
});

app.get('/places',function(req,res){
    res.render('places');
});

app.get('/experience',function(req,res){
    res.render('experience');
});

app.get('/question',function(req,res){
    res.render('question');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});