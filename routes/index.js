var express = require('express');
var router = express.Router();

let movies = [{
 id: 1, name: "Casablanca"
},
{
  id: 2, name: "El padrino"
},{
  id: 3, name: "E.T."
}];

router.get('/movies', function(req, res, next) {
  res.send(movies);
});

router.get('/movies/:id', function(req, res, next) {
  console.log("Parametro",req.params.id);

});

/*
GET /api/movies
// Listado de películas
Body
Respuesta [{},{}]

GET /api/movies/1
//Película con el id 1
Body
Respuesta {}

POST /api/movies
//Crear una película
Body {}
Respuesta {}

PUT /api/movies/1
//Actualizar película id 1
Body {}
Respuesta {}

DELETE /api/movies/1
//BOrrar pelícual id 1
Body //204
Respuesta 
*/

module.exports = router;
