/**
 * Module dependencies
 */

import express from 'express';
import http from 'http';
import dbapi from './db-api';

const port = 3000;
const app = express();

// Configurar la ruta de archivos estáticos
//
app.use('/public', express.static(__dirname+ '/public'));


app.get('/dirhead', (req, res) => {
  dbapi.contenido.find((contenido) => {
    res.json(contenido);
  });
});

app.get('/dirmod', (req, res) => {
	dbapi.modulos.find((modulos) => {
  		res.json(modulos);
  	});
});

app.get('/dirintomod2', (req, res) => {
  dbapi.intomod2.find((intomod2) => {
      res.json(intomod2);
    });
});


app.get('/dirmod2', (req, res) => {
  dbapi.modulo2.find((modulo2) => {
      res.json(modulo2);
    });
});

app.get('/dirintomod3', (req, res) => {
  dbapi.intomod3.find((intomod3) => {
      res.json(intomod3);
    });
});
app.get('/dirmod3', (req, res) => {
  dbapi.modulo3.find((modulo3) => {
      res.json(modulo3);
    });
});
app.get('/dirintomod4', (req, res) => {
  dbapi.intomod4.find((intomod4) => {
      res.json(intomod4);
    });
});
app.get('/dirmod4', (req, res) => {
  dbapi.modulo4.find((modulo4) => {
      res.json(modulo4);
    });
});
app.get('/dirintomod5', (req, res) => {
  dbapi.intomod5.find((intomod5) => {
      res.json(intomod5);
    });
});
app.get('/dirmod5', (req, res) => {
  dbapi.modulo5.find((modulo5) => {
      res.json(modulo5);
    });
});
app.get('/dircred', (req, res) => {
	dbapi.creditos.find((creditos) => {
  		res.json(creditos);
  	});
});
app.get('/dirmod1', (req, res) => {
  dbapi.modulo1.find((modulo1) => {
      res.json(modulo1);
    });
});

app.get('/',(req,res) => {
	res.sendFile(__dirname+'/index.html');
});

let server = http.createServer(app).listen(port,() =>{
		console.log(`El servidor se esta ejecutando por el puerto ${port}`);

});
