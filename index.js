// Author: Rich Rose
// Description: Cloud Functions example
//

// Define dependencies
var data = require('./data/marvel');
var pug  = require('pug');

// Function: marvelFilm Detail
// Description: Show the information for the film selected
function marvelFilmDetail(req, res, movieRef) {
  // Define the view to be displayed
  const pugInputFile = pug.compileFile('views/index.pug');

  // Create the HTML view
  res.status(200).send(pugInputFile({
    // Pass data object [movies] to Pug
    items : data.movies[movieRef]
  }));
}

// Entrypoint: marvelFilmAPI
// Description: This is the Cloud Function endpoint
exports.marvelFilmAPI= (req, res) => {
  // Define the default view to be displayed
  let filmNum = req.query.film || '00';
  
  // Translate string to int
  var movieRef = parseInt(filmNum, 10);

  // Simple validation
  if (movieRef > 5 || movieRef < 0)
    movieRef = 0;

  // Log endpoint query information
  console.log('Movie Ref endpoint called - Query film: ' + movieRef);
  
  // Display the relevant film
  marvelFilmDetail(req, res, movieRef);
};

