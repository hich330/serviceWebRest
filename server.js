var express = require('express');
app = express();

//  require('./fixtures');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var cors = require('cors');
app.use(cors());
//var models = require('./route.js');
//require('./fixtures');
//exports.Livre = mongoose.model('Livre', schema.schemaLivre);
//exports.Categorie = mongoose.model('Categorie', schema.schemaCategorie);
//console.log(schema);

var contoller = require('./controller');

app.get('/Livres', contoller.RecupererLivres);
app.get('/Livres/:categorie', contoller.RecupererLivresParCategorie);
app.get('/Livre/:Id', contoller.RecupererLivreParId);
app.get('/Categories', contoller.RecupererCategories);
app.post('/Categorie/Creer', contoller.CreerCategorie);
app.post('/Livre/Creer', contoller.CreerLivre);

app.post('/Compte/Creer', contoller.CreerCompte);
app.post('/Login', contoller.Login);



app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});