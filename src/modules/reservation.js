const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'MryrGqfCiLUJUEbyrBie';

const postReservation = async (username, reservation, id) => {
  const resolve = await fetch(`${baseURL}/${appID}/reservations`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      reservation,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const result = await resolve.text();
  return result;
};

const getReservation = async (id) => {
  const resolve = await fetch(`${baseURL}/${appID}/reservations?item_id=${id}`);
  const result = await resolve.json();

  if (!result.length) {
    return [];
  }

  return result;
};

const reservationsCounter = async (id) => {
  const reservationsNum = await getReservation(id);
  if (!reservationsNum.length) {
    return 0;
  }
  return reservationsNum.length;
};

const reservationTemplate = (date, name, reservation) => `
  <li>
    <span>${date}</span>
    <span>${name}: </span>
    <span>${reservation}</span>
  </li>
`;

const displayReservations = async (id) => {
  const ul = document.querySelector('ul');
  const reservationArr = await getReservation(id);
  ul.innerHTML = '';
  let html = '';

  reservationArr.forEach((element) => {
    const reservationItem = reservationTemplate(
      element.creation_date,
      element.username,
      element.reservation,
    );
    html += reservationItem;
  });
  ul.insertAdjacentHTML('beforeend', html);
};

const addReservation = async (event, form, id) => {
  event.preventDefault();
  const number = document.querySelector('.counter');
  const name = form.querySelector('input');
  const reservation = form.querySelector('textarea');

  await postReservation(name.value, reservation.value, id);
  await displayReservations(id);
  number.textContent = await reservationsCounter(id);
  form.reset();
};

export {
  displayReservations, addReservation, reservationsCounter, getReservation,
};
