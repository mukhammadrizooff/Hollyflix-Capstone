const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'MryrGqfCiLUJUEbyrBie';

const postComment = async (username, comment, id) => {
  const resolve = await fetch(`${baseURL}/${appID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const result = await resolve.text();
  return result;
};

const getComment = async (id) => {
  const resolve = await window.fetch(`${baseURL}/${appID}/comments?item_id=${id}`);
  const result = await resolve.json();

  if (!result.length) {
    return [];
  }

  return result;
};

const countComments = async (id) => {
  const commentsNum = await getComment(id);
  return commentsCounter(commentsNum)
  
};

const commentsCounter = (commentsNum) => {
  console.log(commentsNum)
  if (!commentsNum.length) {
    return 0;
  }
  return commentsNum.length;
} 

const commentTemplate = (date, name, comment) => `
  <li>
    <span>${date}</span>
    <span>${name}: </span>
    <span>${comment}</span>
  </li>
`;

const displayComments = async (id) => {
  const ul = document.querySelector('ul');
  const commentArr = await getComment(id);
  ul.innerHTML = '';
  let html = '';

  commentArr.forEach((element) => {
    const commentItem = commentTemplate(
      element.creation_date,
      element.username,
      element.comment,
    );
    html += commentItem;
  });
  ul.insertAdjacentHTML('beforeend', html);
};

const addComment = async (event, form, id) => {
  event.preventDefault();
  const number = document.querySelector('.counter');
  const name = form.querySelector('input');
  const comment = form.querySelector('textarea');

  await postComment(name.value, comment.value, id);
  await displayComments(id);
  number.textContent = await commentsCounter(id);
  form.reset();
};

export {
  displayComments, addComment, commentsCounter,countComments, getComment,
};
