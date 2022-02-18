/* ../__tests__/comment.test.js */
import { getComment, commentsCounter } from '../handleComments.js';

const id = '64952';

describe('Movies Counter', () => {
  test('It should be display the number of comments', async () => {
    const comment = await getComment(id);
    const countComment = await commentsCounter(id);
    expect(countComment).toBe(comment.length);
  });
});