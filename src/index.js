import './style.css';
import getMovies from './modules/fetchMovies.js';
import displayMovies from './modules/displayMovies.js';

getMovies().then((movieList) => {
  displayMovies(movieList);
});
