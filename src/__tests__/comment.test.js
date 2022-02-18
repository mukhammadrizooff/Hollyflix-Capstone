/* ../__tests__/comment.test.js */
import { commentsCounter } from '../modules/comment.js';

const array = [
  { username: 'matt', comment: 'a new comment', creation_date: '2022-02-16' },
  { username: 'Boaz', creation_date: '2022-02-17', comment: 'Hello comment' },
  { comment: 'Hello comment', username: 'Boaz', creation_date: '2022-02-17' },
  { comment: 'Hello comment', username: 'Boaz', creation_date: '2022-02-17' },
];

describe('Movies Counter', () => {
  test('It should be display the number of comments', async () => {
    const countComment = commentsCounter(array);
    expect(countComment).toBe(4);
  });
});
