const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'MryrGqfCiLUJUEbyrBie';

const postReservation = async (username, datestart, dateEnd, id) => {
  const resolve = await fetch(`${baseURL}/${appID}/reservations/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      date_start: datestart,
      date_end: dateEnd,
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
      element.username,
      element.date_start,
      element.date_end,
    );
    html += reservationItem;
  });
  ul.insertAdjacentHTML('beforeend', html);
  const number = document.querySelector('.counter');
  number.textContent = await reservationsCounter(id);
};

const addReservation = async (event, form, id) => {
  event.preventDefault();
  const number = document.querySelector('.counter');
  const name = document.querySelector('input');
  const startDate = document.getElementById('start__date');
  const endDate = document.getElementById('end__date');
  await postReservation(name.value, startDate.value, endDate.value, id);
  await displayReservations(id);
  number.textContent = await reservationsCounter(id);
  form.reset();
};

export {
  displayReservations, addReservation, reservationsCounter, getReservation,
};
