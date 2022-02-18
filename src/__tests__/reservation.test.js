/**
 * @jest-environment jsdom
 */
import { reservationsCounter } from '../modules/reservation.js';

test('Test the reservations counter', () => {
  const reservationTest = [{
    username: 'sam',
    date_start: '2121-02-12',
    date_end: '2121-03-21',
  },
  {
    username: 'matt',
    date_start: '2121-01-12',
    date_end: '2121-07-22',
  },
  {
    username: 'rizo',
    date_start: '2121-03-12',
    date_end: '2121-05-20',
  },
  ];
  const count = reservationsCounter(reservationTest);
  expect(count).toBe(3);
});