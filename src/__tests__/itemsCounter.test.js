/* ../__tests__/comment.test.js */
import { counter } from '../modules/counter.js';

const array = [
  {
    id: 1, name: 'Under the Dome', genres: 'horror', image: 'image', end: '2015-09-10',
  },
  {
    id: 2, name: 'Person of Interest', genres: 'thriller', image: 'image', end: '2016-06-21',
  },
  {
    id: 3, name: 'Bitten', genres: 'action', image: 'image', end: '2016-04-15',
  },
  {
    id: 4, name: 'Arrow', genres: 'fantasy', image: 'image', end: '2020-01-28',
  },
  {
    id: 5, name: 'True Detective', genres: 'mystery', image: 'image', end: null,
  },
  {
    id: 6, name: 'The 100', genres: 'political thriller', image: 'image', end: '2020-09-30',
  },
  {
    id: 7, name: 'Homeland', genres: 'political thriller', image: 'image', end: '2020-04-26',
  },
];

describe('Item list counter', () => {
  test('It should display the count of list items', async () => {
    const countItems = counter(array);
    expect(countItems).toBe(7);
  });
});
