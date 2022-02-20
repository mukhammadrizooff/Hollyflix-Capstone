import './style.css';
import getMovies from './modules/fetchMovies.js';
import displayMovies from './modules/displayMovies.js';
import modalHandle from './modules/modalElements.js';
import reservationHandler from './modules/reservationModal.js';

getMovies().then((movieList) => {
  displayMovies(movieList);
  modalHandle(movieList);
  reservationHandler(movieList);
});
