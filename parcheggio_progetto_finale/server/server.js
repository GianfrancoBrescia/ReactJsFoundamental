// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
 var path    = require('path');

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});

  

var router = express.Router();

var targhe =
 [{id: 0,'nome': 'Roberto','cognome': 'Rob','email': 'roby@gmail.com','telefono': '123-234344','targa': '123-234341'},
    {id: 1,'nome': 'Mario','cognome': 'Robe','email': 'mario@gmail.com','telefono': '123-98765','targa': '123-234342'},
    {id: 2,'nome': 'Pino','cognome': 'Rober','email': 'pino@gmail.com','telefono': '123-7777','targa': '123-234343'},
    {id: 3,'nome': 'Lino','cognome': 'Robert','email': 'lino@gmail.com','telefono': '123-88888','targa': '123-234344'},
    {id: 4,'nome': 'Gino','cognome': 'berto','email': 'gino@gmail.com','telefono': '123-999999','targa': '123-234345'},
    {id: 5,'nome': 'Zito','cognome': 'berto','email': 'ziot@gmail.com','telefono': '123-555555','targa': '123-234346'}];
var lastId = 6;

router.get('/parcheggi', function(req, res) {
  res.send(JSON.stringify(targhe));
});
router.post('/parcheggi', function(req, res) {
  var contact = req.body;
  contact.id = lastId;
  lastId++;
  targhe.push(contact);
  res.send(contact);
});

router.get('/parcheggi/:id', function(req, res) {
  for (var i = 0; i < targhe.length; i++) {
    if (targhe[i].id == req.params.id) {
      res.send(targhe[i]);
      break;
    }
  }
  res.send({msg: 'Note not found'}, 404);
});



router.put('/parcheggi/:id', function(req, res) {
  for (var i = 0; i < targhe.length; i++) {
    if (targhe[i].id == req.params.id) {
      targhe[i] = req.body;
      targhe[i].id = req.params.id;
      res.send(targhe[i]);
      break;
    }
  }
  console.log("macchina non trovata")
  res.send({msg: 'Note not found'}, 408);
});

function stampa(targhe){
for (var i = 0; i < targhe.length; i++) {

  console.log(targhe[i].id)
}


}
router.delete('/parcheggi/:id', function(req, res) {
  for (var i = 0; i < targhe.length; i++) {
    console.log("dentro for:" +targhe[i].id + " valore passato:"+ req.params.id)
    if (targhe[i].id == req.params.id) {
              targhe.splice(i, 1);
              lastId--
              break;
            }
     
      
    }
  res.send({msg: 'Delete succesfully'}, 200);
});

 //creo il server
 app.get('/', function(req,res){

  res.sendFile(path.join(__dirname+'/index.html'))
 });

app.use('/api', router);




app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
