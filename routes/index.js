var express = require('express');
var router = express.Router();

var quizController = require ('../controllers/quiz_controller');
var authorController= require ('../controllers/author_controller');

// Pagina de entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: []});
});

// Autoload de comandos con ids
router.param('quizId', quizController.load);  // autoload :quizId

// Definicion de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new',		   quizController.new);
router.post('/quizes/create',              quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',   quizController.edit); 
router.put('/quizes/:quizId(\\d+)',        quizController.update);
router.delete('/quizes/:quizId(\\d+)',     quizController.destroy);

// Definicion de ruta de Autor
router.get('/author', authorController.author);

module.exports = router;
