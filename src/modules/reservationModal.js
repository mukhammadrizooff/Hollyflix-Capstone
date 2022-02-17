import { displayReservations, addReservation } from './reservation.js';

const reservationLength = 0;

const reservationModal = (movie, reservationLength) => `
<button class="close-modal-btn">x</button>
  <div class="modal-header">
    <figure>
      <img src="${movie.image.medium}" alt="Title image"/>
    </figure>
    <h2 class="movie-title">${movie.name}</h2>
  </div>
  <div class="info-container">
    <h3>Instructions:</h2>
    <p class="description">${movie.genres}</p>
  </div>
  <div class="info-container reservation">
    <h3>Reservation (<span class="counter">${reservationLength}</span>)</h2>
    <ul class="reservation-container"></ul>
    <h3>Reserve</h2>
    <div class="msgErrorContainer"></div>
    <form action="index_submit" method="POST" accept-charset="utf-8">
      <input type="text" placeholder="Name" name="Your name" maxlength="20" required/>
      <p>Start Date</p>
      <input id="start__date" type="date" placeholder="Start date" name="Start date" maxlength="20" required/>
      <p>Return Date</p>
      <input id="end__date" type="date" placeholder="Return date" name="Return date" maxlength="20" required/>
      <button type="submit" class="btn add-reservation-btn">Submit</button>
    </form>
  </div>
`;
const modalSection = document.querySelector('.modal-container');
const $body = document.querySelector('body');

const openModal = () => {
  modalSection.classList.add('show-modal');
  $body.classList.add('overflow-hidden');
};
const closeModal = () => {
  modalSection.classList.remove('show-modal');
  $body.classList.remove('overflow-hidden');
  modalSection.innerHTML = '';
};
const createModal = (movieData, reservationLength) => {
  const modalArticle = document.createElement('div');
  modalArticle.className = 'modal-card';
  modalArticle.innerHTML = reservationModal(movieData, reservationLength);
  modalSection.appendChild(modalArticle);
  const closeModalBtn = document.querySelector('.close-modal-btn');
  closeModalBtn.addEventListener('click', closeModal);
};

const reservationHandler = (movies) => {
  const reservationBtn = document.querySelectorAll('.card__reservations');
  reservationBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      openModal();
      const urlBase = 'https://api.tvmaze.com/shows/';
      const url = `${urlBase}${movies[index].id}`;
      const movieData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);

      createModal(movieData, reservationLength);
      const form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        addReservation(event, form, movies[index].id);
      });
      displayReservations(movies[index].id);
    });
  });
};
export default reservationHandler;
