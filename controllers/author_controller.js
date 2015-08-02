// GET/author
exports.author = function(req, res) {
   res.render('author', {nombre: 'Adrian Klinger', nombreimagen:'adrianklinger'
              , errors: []});
              
              
};
